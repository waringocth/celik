import { MetadataRoute } from "next";
import { regions, slugify } from "@/lib/data/regions";
import { services } from "@/lib/data/services";
import { blogPosts } from "@/lib/data/blogPosts";

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
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
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
  const districtRoutes: MetadataRoute.Sitemap = [];
  regions.forEach((region) => {
    districtRoutes.push({
      url: `${baseUrl}/${region.slug}/cilingir`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
    districtRoutes.push({
      url: `${baseUrl}/${region.slug}/oto-anahtarci`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });

  // Neighborhood pages (Priority: 0.8)
  const neighborhoodRoutes: MetadataRoute.Sitemap = [];
  regions.forEach((region) => {
    region.neighborhoods.forEach((mahalle) => {
      const mahalleSlug = slugify(mahalle);
      neighborhoodRoutes.push({
        url: `${baseUrl}/${region.slug}/${mahalleSlug}/cilingir`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
      neighborhoodRoutes.push({
        url: `${baseUrl}/${region.slug}/${mahalleSlug}/oto-anahtarci`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    });
  });

  // Blog pages (Priority: 0.7)
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes, ...districtRoutes, ...neighborhoodRoutes, ...blogRoutes];
}
