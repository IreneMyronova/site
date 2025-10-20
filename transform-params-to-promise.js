// transform-params-to-promise.js
// jscodeshift transform: convert `params: { ... }` -> `params: Promise<{ ... }>`
// make function async and insert `const paramsResolved = await params;`
// NOTE: do a git commit before running!

module.exports = function(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  function handleFn(nodePath) {
    const node = nodePath.node;
    if (!node.params || node.params.length === 0) return;

    const firstParam = node.params[0];

    // we target patterns like: ({ params }: { params: { slug: string } })
    if (
      firstParam.type === 'ObjectPattern' &&
      firstParam.typeAnnotation &&
      firstParam.typeAnnotation.type === 'TSTypeAnnotation' &&
      firstParam.typeAnnotation.typeAnnotation.type === 'TSTypeLiteral'
    ) {
      const typeLiteral = firstParam.typeAnnotation.typeAnnotation;
      const prop = typeLiteral.members.find((m) => {
        return (
          m.type === 'TSPropertySignature' &&
          m.key &&
          ((m.key.type === 'Identifier' && m.key.name === 'params') ||
            (m.key.type === 'StringLiteral' && m.key.value === 'params'))
        );
      });

      if (!prop || !prop.typeAnnotation) return;

      const originalType = prop.typeAnnotation.typeAnnotation;

      // Create Promise<originalType>
      const promiseType = j.tsTypeReference(
        j.identifier('Promise'),
        j.tsTypeParameterInstantiation([originalType])
      );

      // replace the type annotation of prop
      prop.typeAnnotation = j.tsTypeAnnotation(promiseType);

      // make function async (if not already)
      node.async = true;

      // ensure block body
      if (!node.body || node.body.type !== 'BlockStatement') return;

      // Insert const paramsResolved = await params; at top if not present
      const firstStmt = node.body.body[0];
      const alreadyHasParamsResolved =
        firstStmt &&
        firstStmt.type === 'VariableDeclaration' &&
        firstStmt.declarations &&
        firstStmt.declarations.some((d) => d.id && d.id.name === 'paramsResolved');

      if (!alreadyHasParamsResolved) {
        const awaitDecl = j.variableDeclaration('const', [
          j.variableDeclarator(
            j.identifier('paramsResolved'),
            j.awaitExpression(j.identifier('params'))
          ),
        ]);
        node.body.body.unshift(awaitDecl);
      }

      // replace member expressions `params.xxx` -> `paramsResolved.xxx` inside the function body
      j(node.body)
        .find(j.MemberExpression, {
          object: { type: 'Identifier', name: 'params' },
        })
        .forEach((mePath) => {
          mePath.get('object').replace(j.identifier('paramsResolved'));
        });
    }
  }

  // Process function declarations, function expressions, arrow functions
  root.find(j.FunctionDeclaration).forEach(handleFn);
  root.find(j.FunctionExpression).forEach(handleFn);
  root.find(j.ArrowFunctionExpression).forEach(handleFn);

  return root.toSource({ quote: 'single' });
};
