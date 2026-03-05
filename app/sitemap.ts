import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://purplesquirrel.ai', priority: 1.0, changeFrequency: 'monthly', lastModified: new Date() },
    { url: 'https://purplesquirrel.ai/ai-engineering', priority: 0.9, changeFrequency: 'monthly', lastModified: new Date() },
    { url: 'https://purplesquirrel.ai/ai-transformation', priority: 0.9, changeFrequency: 'monthly', lastModified: new Date() },
    { url: 'https://purplesquirrel.ai/about', priority: 0.6, changeFrequency: 'monthly', lastModified: new Date() },
    { url: 'https://purplesquirrel.ai/contact', priority: 0.6, changeFrequency: 'yearly', lastModified: new Date() },
  ];
}
