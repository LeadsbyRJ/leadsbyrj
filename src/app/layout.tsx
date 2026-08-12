import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HashScroll } from "@/components/layout/HashScroll";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle =
  "Leads by RJ | Google Ads, SEO & Google Business Profile | Orange County";
const defaultDescription =
  "Orange County local lead generation: websites, Google Ads, SEO, and Google Business Profile optimization that get you found and get more customers. Free ranking audit.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE.name}`,
  },
  description: defaultDescription,
  keywords: [
    "Google Ads Orange County",
    "local SEO Orange County",
    "Google Business Profile optimization",
    "website design Orange County",
    "lead generation",
    "Local Services Ads",
    "Google Maps marketing",
    "Leads by RJ",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        // Link preview image — full Leads by RJ logo (black background)
        url: "/og-image.png",
        width: 832,
        height: 1248,
        alt: `${SITE.name} — local leads, Google Ads & SEO`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    creator: "@LeadsbyRJ",
    site: "@LeadsbyRJ",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LocalBusinessJsonLd />
        <HashScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
