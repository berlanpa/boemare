import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pablo Berlanga Boemare",
  description: "Personal website of Pablo Berlanga Boemare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lora.variable}>
      <body className="antialiased" style={{ fontFamily: 'var(--font-lora), serif' }}>
        {children}
      </body>
    </html>
  );
}
