import type { Metadata } from "next";
import { Noto_Serif_JP, EB_Garamond, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import "./globals.css";

// 和文は字数が多いので、必要な字だけを後から読みこむ（preload しない）
const notoSerif = Noto_Serif_JP({
  weight: ["400", "500", "600"],
  preload: false,
  variable: "--font-noto-serif",
});
const garamond = EB_Garamond({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-garamond",
});
const plexMono = IBM_Plex_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
});

const DESCRIPTION =
  "AIで作ったサイトを、公開してみんなが使えるようにするまでの道案内。AIの選び方、公開のしかた、ターミナル入門、スラッシュコマンド一覧、用語集、プロンプト集、参考リンク。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME}｜作ったサイトを公開するまで`, template: `%s｜${SITE_NAME}` },
  description: DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: SITE_NAME, description: DESCRIPTION },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${notoSerif.variable} ${garamond.variable} ${plexMono.variable}`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-1">
          本文へ
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
