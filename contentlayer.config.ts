import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

const Hero = defineDocumentType(() => ({
  name: 'Hero',
  filePathPattern: `hero/**/*.md`, 
  contentType: 'markdown',
  fields: {
    slug: {
      type: 'string',
    },
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: false,
    },
    cta_label: { type: 'string', required: false },
    cta_link: { type: 'string', required: false },
    photo: { type: 'string', required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md$/, ''),
    },
  },
}))

const Service = defineDocumentType(() => ({
  name: 'Service',
  filePathPattern: `services/*.md`,
  contentType: 'markdown',
  fields: {
    templateKey: {
      type: 'string',
      required: true,
    },
    title: {
      type: 'string',
      required: false, 
    },
    date: {
      type: 'date',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
    tags: {
      type: 'json',
      required: false,
    },
    featured: {
      type: 'boolean',
      required: false,
    },
    image: { type: 'string', required: false }, // for page.md not required
    introText: { type: 'string', required: false }, // only for page.md
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

const Work = defineDocumentType(() => ({
  name: 'Work',
  filePathPattern: `work/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      required: false,
    },
    date: {
      type: 'date',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
    tags: {
      type: 'json',
      required: false,
    },
    image: {
      type: 'string',
      required: false,
    },
    introText: { type: 'string', required: false }, // only for page.md
    templateKey: {
      type: 'string',
      required: true,
    },
    featured: {
      type: 'boolean',
      required: false,
    },
    originalPdf: { type: 'string' },
    updatePdf: { type: 'string' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

const Testimonial = defineDocumentType(() => ({
  name: 'Testimonial',
  filePathPattern: `testimonials/*.md`,
  contentType: 'markdown',
  fields: {
    title: { type: 'string', required: true },
    role: { type: 'string', required: false },
    avatar: { type: 'string', required: false },
    featured: { type: 'boolean', required: false },
    testimonial: { type: 'string', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

export const FAQ = defineDocumentType(() => ({
  name: 'FAQ',
  filePathPattern: `faq/*.md`,
  fields: {
    templateKey: { type: 'string', required: true },
    question: { type: 'string', required: true },
    answer: { type: 'string', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

const Contacts = defineDocumentType(() => ({
  name: 'Contacts',
  filePathPattern: `contacts/*.md`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false, },
    link: { type: 'string', required: true },
    templateKey: { type: 'string', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [
    Hero,
    Service,
    Work,
    Testimonial,
    FAQ,
    Contacts,
  ],
  disableImportAliasWarning: true,
})
