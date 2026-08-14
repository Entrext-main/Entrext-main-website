import { MetadataRoute } from 'next'
import { BRAIN_SECTIONS } from '@/src/constants/brain'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.entrext.com'

  const pages = [
    { url: '', priority: 1.0 },
    { url: '/labs', priority: 0.8 },
    { url: '/pro', priority: 0.8 },
    { url: '/match', priority: 0.8 },
    { url: '/newsroom', priority: 0.8 },
    { url: '/apply', priority: 0.8 },
    { url: '/brain', priority: 0.6 },
    ...BRAIN_SECTIONS.map((s) => ({ url: `/brain/${s.slug}`, priority: 0.4 })),
    { url: '/advertise', priority: 0.8 },
    { url: '/products', priority: 0.8 },
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page.priority,
  }))
}
