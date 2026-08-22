import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://olusola-ayodeji-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Olusola Ayodeji Ezekiel | Product Manager Portfolio",
  description: "Product Manager across FinTech, digital payments, eCommerce and iGaming, backed by more than ten years of construction and project leadership.",
  openGraph: {
    title: "Olusola Ayodeji Ezekiel | Product Manager",
    description: "Product strategy and delivery grounded in more than a decade of real-world project leadership.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Olusola Ayodeji Ezekiel, Product Manager" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olusola Ayodeji Ezekiel | Product Manager",
    description: "Product strategy and delivery grounded in more than a decade of real-world project leadership.",
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
