import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://corporatelawyers.uk"),

  title: {
    default: "Corporate Lawyers UK",
    template: "%s | Corporate Lawyers UK",
  },

  description:
    "Corporate, commercial and business legal services for companies, entrepreneurs, directors and investors throughout the United Kingdom.",

  keywords: [
    "Corporate Lawyers UK",
    "Corporate Solicitors",
    "Commercial Lawyers",
    "Commercial Contracts",
    "Shareholder Agreements",
    "Mergers and Acquisitions",
    "Employment Law",
    "Corporate Governance",
    "Business Lawyers",
    "Commercial Litigation",
  ],

  authors: [
    {
      name: "Corporate Lawyers UK",
    },
  ],

  creator: "Corporate Lawyers UK",

  publisher: "Corporate Lawyers UK",

  category: "Legal Services",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/images/logo/logo-icon.png",
        type: "image/png",
      },
    ],

    shortcut: ["/images/logo/logo-icon.png"],

    apple: [
      {
        url: "/images/logo/logo-icon.png",
      },
    ],
  },

  openGraph: {
    type: "website",

    locale: "en_GB",

    url: "https://corporatelawyers.uk",

    siteName: "Corporate Lawyers UK",

    title: "Corporate Lawyers UK",

    description:
      "Corporate, commercial and business legal services throughout the United Kingdom.",

    images: [
      {
        url: "/images/logo/logo-primary.png",
        width: 1200,
        height: 630,
        alt: "Corporate Lawyers UK",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Corporate Lawyers UK",

    description:
      "Corporate, commercial and business legal services throughout the United Kingdom.",

    images: ["/images/logo/logo-primary.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
