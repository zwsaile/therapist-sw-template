import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: "Professional Therapy Services",
  description: "Licensed therapist providing professional counseling services for individuals and couples. Specializing in anxiety, depression, and relationship issues.",
  keywords: "therapy, counseling, mental health, anxiety, depression, relationship counseling",
  openGraph: {
    title: "Professional Therapy Services",
    description: "Licensed therapist providing professional counseling services for individuals and couples.",
    url: "https://your-domain.com",
    siteName: "Therapy Services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Therapy Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Therapy Services",
    description: "Licensed therapist providing professional counseling services for individuals and couples.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
