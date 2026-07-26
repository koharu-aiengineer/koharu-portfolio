import type { Metadata } from "next";
import { M_PLUS_Rounded_1c, Zen_Kaku_Gothic_New } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { BackToTopButton } from "@/components/layout/BackToTopButton";
import "./globals.css";

const heading = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-heading-raw",
  display: "swap",
});

const body = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body-raw",
  display: "swap",
});

export const metadata: Metadata = {
  title: "koharu | AI Engineer Portfolio",
  description: "AIと一緒に、つくる人。koharuのポートフォリオサイト。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${heading.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-cream-100 font-body text-ink antialiased">
        <ScrollProgressBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
