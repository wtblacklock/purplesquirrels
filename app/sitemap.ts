import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://purplesquirrels.ai', priority: 1.0, changeFrequency: 'monthly', lastModified: new Date() },
    { url: 'https://purplesquirrels.ai/ai-engineering', priority: 0.9, changeFrequency: 'monthly', lastModified: new Date() },
    { url: 'https://purplesquirrels.ai/ai-transformation', priority: 0.9, changeFrequency: 'monthly', lastModified: new Date() },
    { url: 'https://purplesquirrels.ai/about', priority: 0.6, changeFrequency: 'monthly', lastModified: new Date() },
    { url: 'https://purplesquirrels.ai/contact', priority: 0.6, changeFrequency: 'yearly', lastModified: new Date() },
  ];
}
