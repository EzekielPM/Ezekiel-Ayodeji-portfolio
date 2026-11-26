import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://ezekiel-ayodeji-portfolio.vercel.app";
const socialImage = `${siteUrl}/ezekiel-social-preview-20260916.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Olusola Ayodeji Ezekiel | Product Manager · Fintech, iGaming, Commerce",
  description:
    "Lead Product Manager in Lagos. Fintech, iGaming and commerce products from discovery to delivery: Siiqo (500+ active vendors), BetBonanza and Canvoy, plus 18 PRDs, roadmaps and papers.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Olusola Ayodeji Ezekiel | Product Manager · Fintech, iGaming, Commerce",
    description:
      "Lead PM at Siiqo. Fintech, iGaming and commerce products from discovery to delivery, with real results and 18 open product documents.",
    type: "website",
    url: siteUrl,
    siteName: "Olusola Ayodeji Ezekiel Portfolio",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Olusola Ayodeji Ezekiel, Product Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olusola Ayodeji Ezekiel | Product Manager · Fintech, iGaming, Commerce",
    description:
      "Lead PM at Siiqo. Fintech, iGaming and commerce products from discovery to delivery, with real results and 18 open product documents.",
    images: [socialImage],
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
