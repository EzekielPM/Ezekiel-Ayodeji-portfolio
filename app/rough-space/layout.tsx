import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rough Space | Product Thinking & Experiments",
  description:
    "A working space for product explorations, interface studies, validation notes and experiments by Olusola Ayodeji Ezekiel.",
  alternates: { canonical: "/rough-space" },
  openGraph: {
    title: "Rough Space | Product Thinking & Experiments",
    description:
      "Explore product notes, interface studies and experiments before they become polished work.",
    type: "website",
    url: "/rough-space",
  },
};

export default function RoughSpaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
