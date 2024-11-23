import type { Metadata } from "next";
import { Playfair_Display, Lato } from 'next/font/google';
import "./globals.css";

const PlayfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--playfair-display',
  display: 'swap',
})

const LatoDisplay = Lato({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PlayfairDisplay.variable} ${LatoDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
