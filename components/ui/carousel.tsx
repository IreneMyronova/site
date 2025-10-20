'use client'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import { useState, useRef, useId, useEffect } from 'react'

interface SlideData {
  title: string
  button: string
  role: string
  avatar: string
  testimonial: string
}

interface SlideProps {
  slide: SlideData
  index: number
  current: number
  handleSlideClick: (index: number) => void
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null)

  const xRef = useRef(0)
  const yRef = useRef(0)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return

      const x = xRef.current
      const y = yRef.current

      slideRef.current.style.setProperty('--x', `${x}px`)
      slideRef.current.style.setProperty('--y', `${y}px`)

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current
    if (!el) return

    const r = el.getBoundingClientRect()
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2))
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2))
  }

  const handleMouseLeave = () => {
    xRef.current = 0
    yRef.current = 0
  }

  const { role, avatar, testimonial, title } = slide

  return (
      <li
        ref={slideRef}
        className="[perspective:1200px] [transform-style:preserve-3d] flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[80vmin] h-[90vmin] md:w-[70vmin] md:h-[30vmin] mx-[1vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? 'scale(0.98) rotateX(8deg)'
              : 'scale(1) rotateX(0deg)',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          transformOrigin: 'bottom',
        }}
      >
        <div
          className="absolute top-0 left-0 size-full rounded-2xl overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? 'translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)'
                : 'none',
          }}
        >
          <span
            className="absolute inset-0 w-[120%] h-[120%] object-cover duration-600 ease-in-out bg-blue-50 dark:bg-slate-800"
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
          />
          {current === index && (
            <div className="absolute inset-0 bg-blue-100/30 dark:bg-slate-700/30 transition-all duration-1000 flex justify-end items-start p-[3vmin]">
              <img
                src="/Quote.svg"
                alt="quote"
                height={50}
                width={50}
                className="opacity-20"
                loading="eager"
                decoding="sync"
              />
            </div>
          )}
        </div>

        <article
          className={`relative p-[3vmin] transition-opacity duration-1000 ease-in-out ${
            current === index ? 'opacity-100 visible' : 'opacity-30 visible'
          }`}
        >
          <div className="flex justify-start items-center gap-2 flex-row">
            <img
              src={avatar}
              alt={title}
              className="size-[50px] rounded-full object-cover"
            />

            <div className="text-left flex justify-center flex-col text-balance">
              <h2 className="text-slate-900 dark:text-slate-50 font-bold text-sm sm:text-lg text-balance">
                {title}
              </h2>
              <span className="text-slate-600 dark:text-[#9fb6db] text-sm font-bold text-balance leading-4">
                {role}
              </span>
            </div>
          </div>

          <p
            className="mt-4 text-left text-sm lg:text-base text-slate-900 dark:text-slate-50 text-balance line-clamp-10 sm:line-clamp-6"
          >
            {testimonial}
          </p>
        </article>
      </li>
  )
}

interface CarouselControlProps {
  type: string
  title: string
  handleClick: () => void
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center  border border-gray-300 dark:border-gray-600 rounded-full focus:border-blue-300 dark:focus:border-blue-600 focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === 'previous' ? 'rotate-180' : ''
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  )
}

interface CarouselProps {
  slides: SlideData[]
  ariaLabelledby?: string
}

export function Carousel({ slides, ariaLabelledby }: CarouselProps) {
  const [current, setCurrent] = useState(1)

  const handlePreviousClick = () => {
    const previous = current - 1
    setCurrent(previous < 0 ? slides.length - 1 : previous)
  }

  const handleNextClick = () => {
    const next = current + 1
    setCurrent(next === slides.length ? 0 : next)
  }

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index)
    }
  }

  const id = useId()

  return (
    <div
      className="relative w-[80vmin] h-[90vmin] md:w-[70vmin] md:h-[30vmin] mx-auto"
      aria-labelledby={ariaLabelledby ?? `carousel-heading-${id}`}
    >
      <ul
        className="absolute flex  transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(100%+2rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  )
}
