import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const sora = Sora({
  weight: ["300", "600"],
  variable: "--font-base",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jason Blackburn",
  description: "Portfolio of work by Jason Blackburn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
