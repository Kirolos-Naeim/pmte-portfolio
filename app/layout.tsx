import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteUrl, sitewideJsonLd } from "./seo-data";
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
  description: "PMTE is an Abu Dhabi demolition contractor providing controlled demolition, heavy equipment, earthworks, marine works and site support since 1994.",
  applicationName: "PMTE Abu Dhabi",
  category: "Demolition contractor",
  alternates: { canonical: "/", languages: { "en-AE": "/", "ar-AE": "/ar", "x-default": "/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Demolition Company in Abu Dhabi, UAE | PMTE",
    description: "Controlled demolition, heavy equipment, earthworks and marine works since 1994.",
    url: siteUrl,
    siteName: "PMTE Abu Dhabi",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/assets/social/pmte-social-cover.png", width: 1200, height: 630, alt: "PMTE demolition company in Abu Dhabi" }],
  },
  twitter: { card: "summary_large_image", title: "Demolition Company in Abu Dhabi, UAE | PMTE", description: "Controlled demolition, heavy equipment, earthworks and marine works since 1994.", images: ["/assets/social/pmte-social-cover.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sitewideJsonLd).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
