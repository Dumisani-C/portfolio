import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dumisanichikomo.com"),
  title: "Dumisani Chikomo · Software Engineer",
  description:
    "Software engineer building AI developer tools. Former SWE intern at Credit Karma, CS at Berea College, PEARC25 ML researcher.",
  openGraph: {
    title: "Dumisani Chikomo · Software Engineer",
    description:
      "AI developer tools, ML systems and fintech. Former SWE intern at Credit Karma, CS at Berea College.",
    url: "https://dumisanichikomo.com",
    siteName: "Dumisani Chikomo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
