'use client' 

import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-pug'
import 'prismjs/components/prism-markup-templating'
import { Service } from '../.contentlayer/generated'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

export default function ServicePost({ service }: { service: Service }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <article className="max-w-5xl p-4 sm:p-12 sm:pt-0 m-auto">
      <PostHeader data={service} />
      <div
        className="blog-post"
        dangerouslySetInnerHTML={{ __html: service.body.html }}
      />
      <PostFooter data={service} />
    </article>
  )
}