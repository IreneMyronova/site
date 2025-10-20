import Link from 'next/link'
import {
  allServices,
  allWorks,
  Service,
  Work,
} from '../.contentlayer/generated'
import { Icon } from './Icon'

export default function PostFooter({
  data,
}: {
  data: Service | Work 
}) {
  let navPosts: (Service | Work )[] = []

  switch (data.templateKey) {
    case 'service':
      navPosts = allServices as Service[]
      break
    case 'work':
      navPosts = allWorks as Work[]
      break
  }

  // Find the index of the current post
  const currentIndex = navPosts.findIndex((post) => post.slug === data.slug)

  // Determine the previous and next posts
  const prevPost = currentIndex > 0 ? navPosts[currentIndex - 1] : null
  const nextPost =
    currentIndex < navPosts.length - 1 ? navPosts[currentIndex + 1] : null

  return (
    <>
      {(prevPost || nextPost) && (
        <div className="flex flex-col lg:flex-row justify-between gap-12 xl:gap-24 mt-24 py-8 border-t border-t-slate-300 dark:border-t-slate-700">
          {prevPost && (
            <Link
              href={`/${prevPost.templateKey}/${prevPost.slug}`}
              className="text-balance max-w-[24rem] group rounded outline-offset-[1rem]"
            >
              <span className="flex items-center gap-2 mb-2 justify-start text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 duration-300">
                <Icon name="prev" className="size-3" />
                Previous
              </span>
              {prevPost.title}
            </Link>
          )}
          {nextPost && (
            <Link
              href={`/${nextPost.templateKey}/${nextPost.slug}`}
              className="text-end text-balance max-w-[24rem] group rounded outline-offset-[1rem] ml-auto"
            >
              <span className="flex items-center gap-2 mb-2 justify-end text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 duration-300">
                Next
                <Icon name="next" className="size-3" />
              </span>
              {nextPost.title}
            </Link>
          )}
        </div>
      )}
    </>
  )
}
