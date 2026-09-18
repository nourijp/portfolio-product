import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { site } from "@/content/site";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Product Owner | AI, Automation & Digital Products`,
    template: `%s`,
  },
  description:
    "Product Owner and technology professional specializing in digital products, AI-enabled workflows, automation, enterprise platforms, user experience, and product delivery.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: `${site.name} — Product`,
    title: `${site.name} — Product Owner | AI, Automation & Digital Products`,
    description:
      "Product Owner and technology professional specializing in digital products, AI-enabled workflows, automation, enterprise platforms, user experience, and product delivery.",
    images: [
      {
        url: "/images/social-preview.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — Product Owner | AI, Automation & Digital Products`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Product Owner | AI, Automation & Digital Products`,
    description:
      "Product Owner and technology professional specializing in digital products, AI-enabled workflows, automation, enterprise platforms, user experience, and product delivery.",
    images: ["/images/social-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
