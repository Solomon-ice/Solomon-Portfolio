import type { MetadataRoute } from "next";

const getBaseUrl = () => {
  const vercelUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : undefined;

  return (process.env.NEXT_PUBLIC_SITE_URL ?? vercelUrl ?? "http://localhost:3000")
    .replace(/\/$/, "");
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
