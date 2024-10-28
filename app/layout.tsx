import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevSum | Design & Development Studio",
  description: "Grow your business with DevSum, a design & development studio.",
  openGraph: {
    images: [
      {
        url: 'https://www.devsumstudio.com/_next/image?url=%2Flogo%2FDevsum.png&w=3840&q=75',
        width: 1200,
        height: 600,
        alt: 'DevSum Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>

        {children}
        <Analytics />

      </body>
    </html>
  );
}
