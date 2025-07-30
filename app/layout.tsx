import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Overlook - Learn Photography by Shooting, Not Reading",
  description: "AI-powered photography companion that helps you master composition and camera settings in real-time. Get instant feedback and improve with every shot.",
  keywords: "camera app, AI photography, composition guide, learn photography, photo analysis, RAW camera, manual camera controls",
  openGraph: {
    title: "Overlook - Learn Photography by Shooting, Not Reading",
    description: "AI-powered photography companion that helps you master composition and camera settings in real-time.",
    url: "https://overlook.app",
    siteName: "Overlook",
    images: [
      {
        url: "https://overlook.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Overlook - AI Photography App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overlook - Learn Photography by Shooting",
    description: "AI-powered photography companion for better photos",
    images: ["https://overlook.app/images/twitter-image.jpg"],
    creator: "@overlookapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}