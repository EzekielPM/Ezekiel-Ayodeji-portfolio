import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://ezekiel-ayodeji-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Olusola Ayodeji Ezekiel | Product Manager & Technical Product Delivery",
  description: "Product Manager specialising in FinTech, digital payments, eCommerce and iGaming, combining product strategy, technical delivery and cross-functional leadership.",
  openGraph: {
    title: "Olusola Ayodeji Ezekiel | Product Manager & Technical Product Delivery",
 description: "Product strategy, technical delivery and cross-functional leadership across FinTech, digital payments, eCommerce and iGaming.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Olusola Ayodeji Ezekiel, Product Manager" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olusola Ayodeji Ezekiel | Product Manager & Technical Product Delivery",
    description: "Product strategy, technical delivery and cross-functional leadership across FinTech, digital payments, eCommerce and iGaming.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
