import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = process.env.NEXT_PUBLIC_URL || "";

  return {
    rules: {
      userAgent: [
        "Googlebot",
        "Applebot",
        "Facebot",
        "Duckduckbot",
        "Twitterbot",
      ],
      allow: "/",
      disallow: "/api/",
    },
    sitemap: BASE_URL + "/sitemap.xml",
  };
}
