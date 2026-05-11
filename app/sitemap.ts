import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/support', '/privacy', '/terms', '/faq', '/login'];

  return routes.map((route) => ({
    url: `https://thumbdna.com${route}`,
    lastModified: new Date(),
  }));
}
