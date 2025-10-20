'use client'
import { Contacts } from '../.contentlayer/generated'
import { Icon } from './Icon'
import { useState } from 'react'

const iconClasses =
  'size-6 sm:size-8 opacity-60 text-slate-600 dark:text-[#a0b6dc]'

interface ContactsPostCardProps {
  post: Contacts
  className?: string 
}

export default function ContactsPostCard({ post, className }: ContactsPostCardProps) {
  const [copied, setCopied] = useState(false)

  const isMail = post.link?.startsWith('mailto:')
  const isTel = post.link?.startsWith('tel:')

  const displayLink = isMail
    ? post.link.replace(/^mailto:/i, '')
    : isTel
      ? post.link.replace(/^tel:/i, '')
      : post.link.replace(/^https?:\/\//i, '').replace(/^www\./i, '')

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(displayLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch {
      setCopied(false)
    }
  }

  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      title={`Open ${post.title}`}
      className={`
        w-full flex flex-col gap-2 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md
        hover:shadow-xl dark:hover:shadow-2xl hover:dark:bg-slate-700
        transition-shadow dark:transition-colors cursor-pointer group overflow-hidden
        ${className}
      `}
    >
      <div className="flex flex-row items-center gap-2">
        <Icon key={post.title} name={post.title} className={iconClasses} />
        <h2 className="w-full font-bold text-sm sm:text-base text-balance ">
          {post.title}
        </h2>
      </div>

      <p className="text-slate-600 dark:text-[#9fb6db] text-sm font-bold">
        {post.description}
      </p>

      <div className="flex items-center gap-2">
        <span className="text-sm text-slate-600 dark:text-[#9fb6db] break-all select-text">
          {displayLink}
        </span>

        <span
          onClick={handleCopy}
          aria-label={`Copy ${displayLink}`}
          className="ml-auto p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer select-none"
        >
          {copied ? (
            <Icon name="checkIcon" className="size-6 text-blue-600" />
          ) : (
            <Icon
              name="clipboardDocumentIcon"
              className="size-6 opacity-60 text-slate-600 dark:text-[#a0b6dc]"
            />
          )}
        </span>
      </div>
    </a>
  )
}