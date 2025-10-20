import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allWorks, Work } from '../../../.contentlayer/generated'

import Layout from '../../../components/Layout'
import WorkPost from '../../../components/WorkPost'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../../config'

// Metadata function for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const work = allWorks.find(
    (work) => work.slug === slug
  ) as Work | undefined

  if (!work) {
    return notFound()
  }

  return {
    title: work.title,
    description: work.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/work/${work.slug}/`,
      title: work.title,
      description: work.description,
      publishedTime: work.date,
      authors: `${AUTHOR_NAME}`,
      tags: work.tags,
      images: [
        {
          url: `${SITE_URL}${work.image}`,
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

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const work = allWorks.find(
    (work) => work.slug === slug
  ) as Work | undefined

  if (!work) {
    return notFound()
  }

  return (
    <Layout>
      <WorkPost work={work} />
    </Layout>
  )
}
