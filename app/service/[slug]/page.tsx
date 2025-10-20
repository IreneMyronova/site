import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allServices, Service } from '../../../.contentlayer/generated'
import Layout from '../../../components/Layout'
import ServicePost from '../../../components/ServicePost'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../../config'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = allServices.find((s) => s.slug === slug) as Service | undefined

  if (!service) {
    return notFound()
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/services/${service.slug}/`,
      title: service.title,
      description: service.description,
      publishedTime: service.date,
      authors: `${AUTHOR_NAME}`,
      tags: service.tags,
      images: [
        {
          url: `${SITE_URL}${service.image}`,
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

export default async function ServicePostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = allServices.find((s) => s.slug === slug)

  if (!service) {
    return notFound()
  }

  return (
    <Layout>
      <ServicePost service={service} />
    </Layout>
  )
}
