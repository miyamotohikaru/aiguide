import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, M_PLUS_Rounded_1c, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-kaku",
});
const rounded = M_PLUS_Rounded_1c({
  weight: ["700", "800"],
  subsets: ["latin"],
  variable: "--font-rounded",
});
const plexMono = IBM_Plex_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
});

const DESCRIPTION =
  "AIで作ったサイトを、公開してみんなが使えるようにするまでの道案内。AIの選び方、公開のしかた、ターミナル入門、スラッシュコマンド一覧、用語集、プロンプト集。";

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
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* スクロールで出す演出は、JS が動くときだけ有効にする */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className={`${zenKaku.variable} ${rounded.variable} ${plexMono.variable}`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-card focus:px-3 focus:py-1"
        >
          本文へ
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
