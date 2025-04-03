import { MetadataRoute } from "next";
import { BLOGS } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = process.env.NEXT_PUBLIC_URL || "";

  const blogSitemap = BLOGS.map((blog) => ({
    url: `${BASE_URL}/blogs/${blog.code}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  })) satisfies MetadataRoute.Sitemap;

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...blogSitemap,
  ];
}
