import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConsoleFilter from "@/components/ConsoleFilter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeonApp - Futuristik Web Deneyimi",
  description: "Next.js 15 ve React 19 ile güçlendirilmiş, neon efektleri ve modern tasarım prensipleri ile oluşturulmuş yüksek performanslı web uygulaması. Geleceğin web deneyimini bugün yaşayın.",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Neon Design", "Futuristic Web", "Performance", "UI/UX"],
  authors: [{ name: "NeonApp Team" }],
  creator: "NeonApp",
  publisher: "NeonApp",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://neonapp.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "NeonApp - Futuristik Web Deneyimi",
    description: "Next.js 15 ve React 19 ile güçlendirilmiş, neon efektleri ile yüksek performanslı web uygulaması",
    url: 'https://neonapp.com',
    siteName: 'NeonApp',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "NeonApp - Futuristik Web Deneyimi",
    description: "Next.js 15 ve React 19 ile güçlendirilmiş, neon efektleri ile yüksek performanslı web uygulaması",
    creator: '@neonapp',
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
    <html lang="tr" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConsoleFilter />
        {children}
      </body>
    </html>
  );
}
