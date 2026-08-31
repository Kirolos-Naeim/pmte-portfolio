import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { localBusinessJsonLd, siteUrl } from "./seo-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Demolition Company in Abu Dhabi, UAE | PMTE", template: "%s | PMTE" },
  description: "PMTE is a demolition company in Abu Dhabi, UAE providing controlled demolition, heavy equipment, earthworks and marine works since 1994.",
  alternates: { canonical: "/", languages: { "en-AE": "/", "ar-AE": "/ar" } },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Demolition Company in Abu Dhabi, UAE | PMTE",
    description: "Controlled demolition, heavy equipment, earthworks and marine works since 1994.",
    url: siteUrl,
    images: ["/assets/social/pmte-social-cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
