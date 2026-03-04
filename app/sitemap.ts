import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://twinb.me', priority: 1.0, changeFrequency: 'monthly', lastModified: new Date() },
    { url: 'https://twinb.me/ai-engineering', priority: 0.9, changeFrequency: 'monthly', lastModified: new Date() },
    { url: 'https://twinb.me/ai-transformation', priority: 0.9, changeFrequency: 'monthly', lastModified: new Date() },
    { url: 'https://twinb.me/about', priority: 0.6, changeFrequency: 'monthly', lastModified: new Date() },
    { url: 'https://twinb.me/contact', priority: 0.6, changeFrequency: 'yearly', lastModified: new Date() },
  ];
}
