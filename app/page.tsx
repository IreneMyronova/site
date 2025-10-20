import { pick } from 'contentlayer2/client'
import Layout from '../components/Layout'
import {
  Service,
  Work,
  allServices,
  allWorks,
  allHeros,
} from '../.contentlayer/generated'
import Link from 'next/link'
import Hero from './hero/page'
import ServiceCardPost from '../components/cards/ServicePostCard'
import WorkPostCard from '../components/cards/WorkPostCard'
import TestimonialSlider from '../components/TestimonialSlider'
import FAQSection from '../components/FAQSection'
import ContactsSection from '../components/ContactsSection'

import { Metadata } from 'next'
import { Icon } from '../components/Icon'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../config'

import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

// for SEO
const home = allHeros.find((home) => home?.slug === 'home')
// for content on the homepage
const about = allHeros.find((about) => about?.slug === 'about')

// Metadata function for SEO
export function generateMetadata(): Metadata {
  const SEO = {
    title: home?.title || 'Home',
    description: home?.description || `Welcome to the Homepage of ${SITE_NAME}`,
    image: `${SITE_URL}/og-card.png`,
  }

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      url: `${SITE_URL}`,
      title: SEO.title,
      description: SEO.description,
      authors: `${AUTHOR_NAME}`,
      images: [
        {
          url: `${SITE_URL}/og-card.png`,
          width: 1600,
          height: 800,
          alt: `${SITE_NAME}`,
          type: 'image/jpeg',
        },
      ],
      siteName: `${SITE_NAME}`,
    },
  }
}

// Get all posts and pick specific fields
export default function Home() {
  let services = allServices.map((post: Service) =>
    pick(post, ['featured', 'image', 'title', 'date', 'slug', 'description'])
  )
  services = services
    .filter((post) => post.featured === true)
    .sort(
      (a, b) =>
        new Date(b.date ?? '').getTime() - new Date(a.date ?? '').getTime()
    )

  let works = allWorks.map((post: Work) =>
    pick(post, ['featured', 'image', 'title', 'date', 'slug'])
  )
  works = works.filter((post) => post.featured === true).slice(0, 6)

  return (
    <Layout>
      <Hero />
      <section className="flex flex-col gap-4" aria-labelledby="services-title">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <Icon
              name="service"
              className="size-6 sm:size-8 opacity-60 text-slate-600 dark:text-[#a0b6dc]"
            />
            <span id="services-title">Services</span>
          </h2>
          <Link href="/service">View all &rarr;</Link>
        </div>
        <div className="grid xl:grid-cols-2 gap-4 flex-wrap">
          {services.map((post) => (
            <ServiceCardPost key={post.slug} post={post as Service} />
          ))}
        </div>
      </section>

      <section
        id="works"
        className="flex flex-col gap-4"
        aria-labelledby="works-title"
      >
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <Icon
              name="work"
              className="size-6 sm:size-8 opacity-60  text-slate-600 dark:text-[#a0b6dc]"
            />
            <span id="works-title">My works</span>
          </h2>
          <Link href="/work">View all &rarr;</Link>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 flex-wrap">
          {works.map((post) => (
            <WorkPostCard key={post.slug} post={post as Work} />
          ))}
        </div>
      </section>

      <section
        id="testimonials"
        className="scroll-mt-30 flex flex-col items-center justify-center gap-8"
      >
        <h2
          id="testimonials-heading"
          className="text-2xl sm:text-3xl font-bold flex items-center gap-3"
        >
          What my clients say
        </h2>
        <div className="flex min-h-[350px] w-full justify-center items-center">
          <TestimonialSlider ariaLabelledby="testimonials-heading" />
        </div>
      </section>
      <section
        id="faq"
        className="scroll-mt-30 flex flex-col items-center justify-center gap-4"
        aria-labelledby="faq-title"
      >
        <h2 id="faq-title" className="text-2xl sm:text-3xl font-bold mb-3">
          FAQ
        </h2>
        <FAQSection />
      </section>

      <section
        id="contacts"
        className="scroll-mt-30 flex flex-col items-center justify-center gap-4"
        aria-labelledby="contacts-title"
      >
        <h2 id="contacts-title" className="text-2xl sm:text-3xl font-bold mb-3">
          Contacts
        </h2>
        <ContactsSection />
      </section>
    </Layout>
  )
}
