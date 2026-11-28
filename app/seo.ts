import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ezekiel-ayodeji-portfolio.vercel.app";
const SITE_NAME = "Olusola Ayodeji Ezekiel Portfolio";

// One place for every page's title, description, canonical URL and share card,
// so links shared on LinkedIn, WhatsApp or X show the right page.
export function pageMeta({ title, description, path, image, alt, article = false }: {
  title: string; description: string; path: string; image: string; alt: string; article?: boolean;
}): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const img = { url: image, width: 1200, height: 630, type: "image/jpeg", alt };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url, siteName: SITE_NAME, type: article ? "article" : "website", locale: "en_GB", images: [img] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
