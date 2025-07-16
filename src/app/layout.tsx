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
  title: "NextApp - Modern Web Deneyimi",
  description: "Next.js 15 ve React 19 ile güçlendirilmiş, modern tasarım prensipleri ile oluşturulmuş yüksek performanslı web uygulaması. Kullanıcı deneyimini ön planda tutan yaklaşımımızla dijital dönüşümünüzü destekliyoruz.",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Modern Web", "Performance", "UI/UX"],
  authors: [{ name: "NextApp Team" }],
  creator: "NextApp",
  publisher: "NextApp",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nextapp.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "NextApp - Modern Web Deneyimi",
    description: "Next.js 15 ve React 19 ile güçlendirilmiş yüksek performanslı web uygulaması",
    url: 'https://nextapp.com',
    siteName: 'NextApp',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "NextApp - Modern Web Deneyimi",
    description: "Next.js 15 ve React 19 ile güçlendirilmiş yüksek performanslı web uygulaması",
    creator: '@nextapp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
