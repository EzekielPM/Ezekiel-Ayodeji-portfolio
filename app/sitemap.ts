import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://ezekiel-ayodeji-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/v2", priority: 1.0 },
    { path: "/rough-space", priority: 0.5 },
    { path: "/case-studies/siiqo", priority: 0.8 },
    { path: "/case-studies/canvoy", priority: 0.7 },
    { path: "/case-studies/wayagram", priority: 0.7 },
    { path: "/v2/tradeflow", priority: 0.8 },
    { path: "/v2/dm-confirmed-order", priority: 0.8 },
  ];

  return routes.map(({ path, priority }) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: "monthly",
    priority,
  }));
}
