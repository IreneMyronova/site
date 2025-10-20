'use client'

import { Work } from '../.contentlayer/generated'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

export default function WorkPost({ work }: { work: Work }) {
  return (
    <article className="max-w-5xl p-4 sm:p-12 sm:pt-0 m-auto">
      <PostHeader data={work as Work} />

      <div className="blog-post">
        {work.image && (
          <img src={work.image} alt={work.title} className="rounded-lg" />
        )}

        <div
          className="blog-post"
          dangerouslySetInnerHTML={{ __html: work.body.html }}
        />

        {/* PDF-link after text */}
        <div className="w-full flex flex-row gap-4 sm:justify-end">
          {work.originalPdf && (
            <a
              href={work.originalPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-block text-center px-4 sm:px-6 py-3 m-0 text-sm sm:text-base font-bold shadow-md hover:shadow-lg border rounded-md border-blue-300 dark:border-blue-600 hover:border-blue-600 dark:hover:border-blue-300 focus:outline-hidden focus:border-blue-600 text-blue-600 dark:text-white transition-colors"
              aria-label="Link look at original article"
              role="button"
            >
              Original text →
            </a>
          )}
          {work.updatePdf && (
            <a
              href={work.updatePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-block text-center px-4 sm:px-6 py-3 m-0 text-sm sm:text-base font-bold shadow-md hover:shadow-lg border rounded-md border-blue-300 dark:border-blue-600 hover:border-blue-600 dark:hover:border-blue-300 focus:outline-hidden focus:border-blue-600 text-blue-600 dark:text-white transition-colors"
              aria-label="Link look at updated article"
              role="button"
            >
              View article →
            </a>
          )}
        </div>
      </div>

      <PostFooter data={work as Work} />
    </article>
  )
}
