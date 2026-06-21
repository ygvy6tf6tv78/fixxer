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
  title: "Fixerr — A Better Way to Get Things Fixed",
  description: "Fixerr is building a cleaner, faster, and more trusted way to get repairs, installations, tech support, and everyday services handled professionally.",
  themeColor: "#0B0F19",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Fixerr — A Better Way to Get Things Fixed",
    description: "A modern service platform for repairs, installations, tech support, and maintenance — starting from Jammu, India.",
    url: "https://fixerr.in",
    siteName: "Fixerr",
    type: "website",
    images: [
      {
        url: "/fixerr-og-image.png",
        width: 1200,
        height: 630,
        alt: "Fixerr",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fixerr — A Better Way to Get Things Fixed",
    description: "A cleaner, faster, and more trusted way to get things fixed.",
    images: ["/fixerr-og-image.png"],
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
