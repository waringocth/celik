import { MetadataRoute } from "next";
import { regions, slugify } from "@/lib/data/regions";
import { services } from "@/lib/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://celikcilingir.com";

  // Base routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Service pages (Priority: 0.8)
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // District pages (Priority: 0.9)
  const districtRoutes: MetadataRoute.Sitemap = regions.map((region) => ({
    url: `${baseUrl}/${region.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Neighborhood pages (Priority: 0.8)
  const neighborhoodRoutes: MetadataRoute.Sitemap = [];
  regions.forEach((region) => {
    region.neighborhoods.forEach((mahalle) => {
      neighborhoodRoutes.push({
        url: `${baseUrl}/${region.slug}/${slugify(mahalle)}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    });
  });

  return [...routes, ...serviceRoutes, ...districtRoutes, ...neighborhoodRoutes];
}
