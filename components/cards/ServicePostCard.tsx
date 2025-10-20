import Link from 'next/link'
import { Service } from '../../.contentlayer/generated'
import ExportedImage from 'next-image-export-optimizer'

const cardClasses =
  'w-full flex gap-3 sm:gap-2 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-2xl hover:dark:bg-slate-700 transition-shadow dark:transition-colors'

export default function ServicePostCard({ post }: { post: Service }) {
  return (
    <Link
      key={post.slug}
      href={`/service/${post.slug}/`}
      className={cardClasses + ' items-center group overflow-hidden'}
    >
      <figure className="overflow-hidden size-16 sm:size-24 shrink-0 rounded-xl shadow-lg bg-slate-200 dark:bg-slate-700">
        <ExportedImage
          src={post.image ?? '/media/services__placeholder-post.png'}
          alt={post.title ?? 'Service image'}
          width={400}
          height={400}
          sizes="(max-width: 640px) 96px, (max-width: 1024px) 180px, 400px"
          className="size-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </figure>
      <div className="p-2 sm:p-4 flex flex-col gap-2">
        <h2 className="font-bold text-balance text-sm sm:text-base">
          {post.title}
        </h2>
        <span className="mt-auto text-slate-600 dark:text-[#9fb6db] text-sm font-bold">
          View more &rarr;
        </span>
      </div>
    </Link>
  )
}
