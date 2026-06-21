import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const jakarta = Plus_Jakarta_Sans({ 
  variable: "--font-sans", 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800"] 
});

export const metadata: Metadata = {
  title: "Fixerr | A better way to get things fixed is taking shape.",
  description: "From everyday home repairs to trusted service support, Fixerr is building a cleaner, faster, and more reliable way to connect with the right expert. Starting from Jammu.",
  keywords: ["Fixerr", "Jammu", "home services", "repair", "AC repair", "plumbing", "trusted experts", "service network", "Kriyon Group"],
  authors: [{ name: "Kriyon Group Private Limited" }],
  openGraph: {
    title: "Fixerr | A better way to get things fixed.",
    description: "Building a cleaner, faster, and more reliable way to connect with the right expert in Jammu. A venture by Kriyon Group.",
    url: "https://fixerr.in",
    siteName: "Fixerr",
    type: "website",
    images: [], // Explicitly empty to prevent image previews when sharing
  },
  twitter: {
    card: "summary", 
    title: "Fixerr | A better way to get things fixed.",
    description: "Building a cleaner, faster, and more reliable way to connect with the right expert in Jammu.",
    images: [], // Explicitly empty to prevent image previews when sharing
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'none', // Prevents search engines from generating image snippets
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={jakarta.variable}>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
