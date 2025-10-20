import { Metadata } from 'next'
import { allHeros, Hero } from '../../.contentlayer/generated'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../config'
import ExportedImage from 'next-image-export-optimizer'

// Get page data
const about = allHeros.find((about: Hero) => about?.slug === 'about') as Hero

export function generateMetadata(): Metadata {
  return {
    title: about?.title || 'About',
    description: about?.description || 'Welcome to the about page',
    openGraph: {
      url: `${SITE_URL}/about/`,
      title: `${about?.title}`,
      description: `${about?.description}`,
      authors: `${AUTHOR_NAME}`,
      images: [
        {
          url: `${SITE_URL}/og-card.png`,
          width: 1600,
          height: 800,
          alt: 'banner',
          type: 'image/jpeg',
        },
      ],
      siteName: `${SITE_NAME}`,
    },
  }
}

export default function About() {
  const ctaLabel = about?.cta_label || 'Get in touch →'
  const ctaLink = about?.cta_link || 'mailto:irenemyronova@gmail.com'
  const photo = about?.photo || '/media/hero__my-photo1.png'

  return (
    <section
      className="w-full h-dvh flex flex-col items-center justify-center "
      aria-labelledby="about-title"
    >
      {/* === SVG background for Hero-DARK === */}
      <div className="absolute inset-0 w-dvw h-dvh overflow-hidden z-0 hidden dark:block">
        <svg
          className="w-full h-full"
          viewBox="0 0 1620 877"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <mask
            id="mask0_51_5"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1620"
            height="877"
          >
            <rect width="1620" height="877" fill="url(#paint0_radial_51_5)" />
          </mask>
          <g mask="url(#mask0_51_5)">
            <rect width="1620" height="877" fill="#0E172B" />
            <rect
              width="1620"
              height="877"
              fill="url(#paint1_radial_51_5)"
              fillOpacity="0.7"
            />
            <rect
              width="1620"
              height="877"
              fill="url(#paint2_radial_51_5)"
              fillOpacity="0.5"
            />
            <rect
              width="1620"
              height="877"
              fill="url(#paint3_radial_51_5)"
              fillOpacity="0.6"
            />
            <rect
              width="1620"
              height="877"
              fill="url(#paint4_radial_51_5)"
              fillOpacity="0.5"
            />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_51_5"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(810) rotate(90) scale(877 1878.84)"
            >
              <stop stopColor="#0E172B" />
              <stop offset="1" stopColor="#0E172B" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_51_5"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(50.4002 835.859 -1544 115.728 759.6 -40.1373)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A0EF0" />
              <stop offset="1" stopColor="#4A0EF0" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_51_5"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(776.7 -265.91 387.703 1407.7 79.2 333.14)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#119DED" />
              <stop offset="1" stopColor="#119DED" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_51_5"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(7.20005 -658.252 1215.93 16.5326 1416.6 877)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#64208B" />
              <stop offset="1" stopColor="#64208B" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint4_radial_51_5"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(-534.6 287.985 -258.3 -596.039 1699.2 30.1031)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A64214" />
              <stop offset="1" stopColor="#A64214" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* === SVG background for Hero-LIGHT === */}
      <div className="absolute inset-0 w-dvw h-dvh overflow-hidden z-0 block dark:hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1620 877"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <mask
            id="mask0_60_27"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1620"
            height="877"
          >
            <rect width="1620" height="877" fill="url(#paint0_radial_60_27)" />
          </mask>
          <g mask="url(#mask0_60_27)">
            <rect
              width="1620"
              height="877"
              fill="url(#paint1_radial_60_27)"
              fillOpacity="0.5"
            />
            <rect
              width="1620"
              height="877"
              fill="url(#paint2_radial_60_27)"
              fillOpacity="0.8"
            />
            <rect
              width="1620"
              height="877"
              fill="url(#paint3_radial_60_27)"
              fillOpacity="0.5"
            />
            <rect
              width="1620"
              height="877"
              fill="url(#paint4_radial_60_27)"
              fillOpacity="0.4"
            />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_60_27"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(810) rotate(90) scale(877 1878.84)"
            >
              <stop stopColor="#0E172B" />
              <stop offset="1" stopColor="#0E172B" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_60_27"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(50.4002 835.859 -1544 115.728 759.6 -40.1373)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4400FF" />
              <stop offset="1" stopColor="#4300FF" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_60_27"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(776.7 -265.91 387.703 1407.7 79.2 333.14)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A2FF" />
              <stop offset="1" stopColor="#00A2FF" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_60_27"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(7.20005 -658.252 1215.93 16.5326 1416.6 877)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A200FF" />
              <stop offset="1" stopColor="#A300FF" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint4_radial_60_27"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(-534.6 287.985 -258.3 -596.039 1699.2 30.1031)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF0900" />
              <stop offset="1" stopColor="#FF0900" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* === Content === */}
      <div className="flex flex-col-reverse xl:flex-row items-center xl:items-stretch justify-center xl:justify-between w-full max-w-8xl gap-4 [@media(min-width:361px)_and_(min-height:741px)]:gap-10 xl:gap-0 z-10">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center gap-4 [@media(min-width:361px)_and_(min-height:741px)]:gap-6 xl:gap-8 text-center xl:text-left">
          <h1
            id="about-title"
            className="text-3xl sm:text-4xl font-bold leading-tight text-balance"
          >
            {about?.title}
          </h1>

          <p className="text-lg text-slate-600 dark:text-[#a0b6dc] text-balance">
            {about?.description}
          </p>

          <ReactMarkdown remarkPlugins={[gfm]}>
            {about?.body?.raw || ''}
          </ReactMarkdown>

          {/* CTA */}
          {ctaLink && (
            <div className="[@media(min-width:361px)_and_(min-height:741px)]:mt-8 xl:mt-0 flex flex-col sm:flex-row sm:max-xl:justify-center xl:justify-start items-center flex-wrap gap-2 z-10">
              <a
                href={ctaLink}
                className="px-12 sm:px-6 py-3 text-base font-bold shadow-md hover:shadow-lg rounded-md hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 bg-blue-600 text-white transition-colors"
                aria-label={`${ctaLabel}, link: ${ctaLink}`}
              >
                {ctaLabel}
              </a>
              <a
                href="#works"
                className="px-12 sm:px-6 py-3 text-base font-bold shadow-md hover:shadow-lg border rounded-md border-blue-300 dark:border-blue-600 hover:border-blue-600 dark:hover:border-blue-300 focus:outline-hidden focus:border-blue-600 text-blue-600 dark:text-white transition-colors"
                aria-label="Toggle look at my work"
                role="button"
              >
                View my work
              </a>
            </div>
          )}
        </div>

        <figure className="relative flex items-center justify-center flex-1 xl:min-h-[400px] xl:aspect-[3/4]">
          <ExportedImage
            src={photo}
            alt="The photo shows a girl in a business style with long hair and a slight smile, standing against a neutral background. The lighting is soft, highlighting her facial features and creating a warm atmosphere."
            className="w-40 h-40 mid:w-64 mid:h-64 xl:w-auto xl:h-[70%] object-cover rounded-full xl:rounded-3xl object-[center_35%] transition-[border-radius,height,width] duration-700 ease-in-out"
            width="450"
            height="650"
          />
        </figure>
      </div>
    </section>
  )
}
