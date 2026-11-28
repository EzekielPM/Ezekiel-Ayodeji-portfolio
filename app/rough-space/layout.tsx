import type { Metadata } from "next";
import { pageMeta } from "../seo";

export const metadata: Metadata = pageMeta({
  title: "Rough Space | Olusola Ayodeji Ezekiel",
  description: "A working space for product explorations, interface studies, validation notes and experiments by Olusola Ayodeji Ezekiel.",
  path: "/rough-space",
  image: "/og/rough-space.jpg",
  alt: "Rough Space by Olusola Ayodeji Ezekiel",
});

export default function RoughSpaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
