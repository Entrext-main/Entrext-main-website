import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.entrext.com'
  
  const pages = [
    { url: '', priority: 1.0 },
    { url: '/pro', priority: 0.8 },
    { url: '/labs', priority: 0.8 },
    { url: '/blog', priority: 0.8 },
    { url: '/apply', priority: 0.8 },
    { url: '/advertise', priority: 0.8 },
    { url: '/products', priority: 0.8 },
    { url: '/edge', priority: 0.8 },
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page.priority,
  }))
}
