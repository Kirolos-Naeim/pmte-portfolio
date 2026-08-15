import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "PMTE | Company Portfolio | Abu Dhabi",
  description: "Petroleum Machinery and Technical Equipment - L.L.C. - S.P.C. Company Portfolio: demolition, earthworks, marine works and industrial support in Abu Dhabi since 1994.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "PMTE | Demolition, Earthworks & Marine Works",
    description: "Established 1994 in Abu Dhabi, UAE.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
