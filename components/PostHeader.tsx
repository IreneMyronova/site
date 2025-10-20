'use client'

import Link from 'next/link'
import {
  Service,
  Work,
} from '../.contentlayer/generated'

import { useState, useEffect } from 'react'

import { formatDateClient } from '../utils'
import { Icon } from './Icon'
import { AUTHOR_NAME } from '../config'

export default function PostHeader({
  data,
}: {
  data: Service | Work 
}) {

    const [formattedDate, setFormattedDate] = useState('')

  useEffect(() => {
    if (data.date) {
      setFormattedDate(formatDateClient(data.date))
    } else {
      setFormattedDate('')
    }
  }, [data.date])
  
  return (
    <>
      <header className="flex flex-col gap-8 sm:gap-10 mb-12 mt-24 sm:mt-32">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center sm:text-left text-balance text-slate-800 dark:text-slate-200">
          {data.title}
        </h1>
        <div className="flex gap-4 items-center text-base">
          <Link href={`/${data.templateKey}`} className="rounded-lg">
            <span className="flex gap-2 items-center px-3 py-2 rounded-lg text-slate-100 dark:text-slate-800 bg-slate-700 dark:bg-slate-200 hover:underline">
              <Icon name={data.templateKey!} className="size-4" />
              <span className="font-semibold">
                {data.templateKey &&
                  data.templateKey.charAt(0).toUpperCase() +
                    data.templateKey.slice(1)}
              </span>
            </span>
          </Link>
           
            <small className="tracking-wide text-sm">
              Posted by{' '}
              <Link href={'/about/'} className="text-sm font-semibold hover:underline">
                {AUTHOR_NAME}
              </Link>{' '}
              <span className="inline-flex text-sm">
                {' '}
                on {formattedDate}
              </span>
            </small>
        </div>
      </header>
    </>
  )
}
