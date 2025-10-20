'use client'
import { allTestimonials } from '../.contentlayer/generated'
import { Carousel } from './ui/carousel'

export default function TestimonialSlider({ ariaLabelledby }) {
  const slideData = allTestimonials
    .filter((t) => t.featured)
    .map((t) => ({
      title: t.title,
      role: t.role ?? '',
      avatar: t.avatar ?? '/media/testimonial__placeholder-avatar.png',
      testimonial: t.testimonial,
      src: t.src ?? '',
    }))
  return (
    <div className="relative overflow-hidden w-full h-full pb-20">
      <Carousel slides={slideData} ariaLabelledby={ariaLabelledby} />
       <div className='pointer-events-none absolute inset-y-0 left-0 w-1/9 bg-gradient-to-r from-slate-50  dark:from-slate-900'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/9 bg-gradient-to-l from-slate-50 dark:from-slate-900'></div>
    </div>
  )
}

