import { Metadata } from 'next'
import { allServices, Service } from '../../.contentlayer/generated'
import { pick } from '@contentlayer2/client'
import Layout from '../../components/Layout'
import CategoryHeader from '../../components/CategoryHeader'
import ServicePostCard from '../../components/cards/ServicePostCard'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../config'

export function generateMetadata(): Metadata {
  const SEO = {
    title: 'B2B Content Writing Services | Articles, Blogs & White Papers',
    description:
      'Boost your business growth with expert B2B content writing services. I create engaging articles, blogs, guides, and white papers that highlight your cloud computing, finance, and technology solutions',
    image: `${SITE_URL}/og-card.png`,
  }

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      url: `${SITE_URL}/services/`,
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

export default function ServicePage() {
  // find content for the side page
  const pageData = allServices.find((p) => p.templateKey === 'servicesIntro')
  // select all services (without page.md)
  const services = allServices
    .filter((p) => p.templateKey !== 'servicesIntro')
    .map((service) =>
      pick(service, [
        'title',
        'date',
        'slug',
        'description',
        'image',
        'templateKey',
      ])
    )

  return (
    <Layout>
      <section className="md:max-w-[87%] m-auto flex flex-col gap-6 px-4 sm:px-12 mb-32">
        <CategoryHeader
          title="Service"
          templateKey={services[0].templateKey!}
        />
        {pageData?.introText && (
          <p className="text-center text-balance text-lg text-slate-600 dark:text-[#a0b6dc] mb-12">
            {pageData.introText}
          </p>
        )}
        <div className="grid lg:grid-cols-2 gap-4 w-full justify-center">
          {services.map((post) => {
            return <ServicePostCard key={post.slug} post={post as Service} />
          })}
        </div>
      </section>
    </Layout>
  )
}
