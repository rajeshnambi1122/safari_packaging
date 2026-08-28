import type { Metadata } from "next";
import { Jomolhari } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const jomolhari = Jomolhari({
  weight: "400",
  variable: "--font-jomolhari",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Safari Packaging | Factory-Direct Food Packaging",
  description: "Get factory-direct pricing on custom food packaging, pizza boxes, cups, and eco-friendly takeout containers.",
  openGraph: {
    title: "Safari Packaging Corp. | Premium Custom Food Packaging",
    description: "Quality Food Packaging Materials & Custom Boxes. Get your quote today.",
    siteName: "Safari Packaging",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Safari Packaging - Custom Food Boxes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jomolhari.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-serif">
        {children}
        <Footer />
      </body>
    </html>
  );
}
