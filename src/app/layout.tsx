import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Noto_Sans_JP } from "next/font/google";
import InteractiveBackground from "@/components/InteractiveBackground";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "SaikyoTsuchidaZ",
  description: "it my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} antialiased flex flex-col min-h-screen relative`}
      >
        <Header />
        <InteractiveBackground />
        <main className="flex-grow relative z-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
