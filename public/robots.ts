import type { MetadataRoute } from "next";

const getBaseUrl = () => {
  const vercelUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL }`
    : undefined;

  return (process.env.NEXT_PUBLIC_SITE_URL ?? vercelUrl ?? "http://localhost:3000")
    .replace(/\/$/, "");
};

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
