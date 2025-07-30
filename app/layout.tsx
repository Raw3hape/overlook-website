import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Overlook - Master Photography Through Practice",
  description: "Complete photography challenges, get AI-powered feedback, and track your improvement. Learn composition, lighting, and storytelling with personalized guidance.",
  keywords: "photography challenges, learn photography, AI photo analysis, composition guide, photography app, camera tutorial, photo feedback, photography practice",
  metadataBase: new URL("https://raw3hape.github.io/overlook-website"),
  openGraph: {
    title: "Overlook - Master Photography Through Practice",
    description: "Complete challenges, get AI feedback, and track your improvement with every photo.",
    url: "https://raw3hape.github.io/overlook-website",
    siteName: "Overlook",
    images: [
      {
        url: "/images/6x9_1.png",
        width: 1200,
        height: 630,
        alt: "Overlook - Photography Learning App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overlook - Master Photography Through Practice",
    description: "Complete challenges and get AI feedback to improve your photography",
    images: ["/images/6x9_1.png"],
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
  alternates: {
    canonical: "https://raw3hape.github.io/overlook-website",
  },
  authors: [{ name: "Overlook Team" }],
  category: "Photography",
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