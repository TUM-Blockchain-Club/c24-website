import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });
const description =
  "Germany's leading student-run conference exploring the frontiers of blockchain technology";
const ogImages = {
  url: new URL("https://conference.tum-blockchain.com/opengraph-image.png"),
  width: 1200,
  height: 630,
};

export const metadata: Metadata = {
  title: "TUM Blockchain Conference 24",
  metadataBase: new URL("https://conference.tum-blockchain.com"),
  authors: [
    {
      name: "Yudhistira Arief Wibowo",
      url: "https://github.com/itsmeyaw",
    },
    {
      name: "Luis Kameter",
      url: "https://github.com/KameterLuis",
    },
    {
      name: "Xiyue Zhang",
      url: "https://github.com/LUOJIUzxy",
    },
    {
      name: "TUM Blockchain Club",
      url: "https://tum-blockchain.com",
    },
  ],
  publisher: "TUM Blockchain Club",
  category: "technology",
  keywords: ["conference", "blockchain"],
  robots: {
    index: true,
    follow: true,
  },
  description: description,
  openGraph: {
    title: "TUM Blockchain Conference 24",
    description: description,
    images: ogImages,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TUM Blockchain Conference 24",
    description: description,
    site: "@tbc_munich",
    creator: "@tbc_munich",
    images: ogImages,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://tally.so/widgets/embed.js"></Script>
        <Script
          src={`https://cdn-cookieyes.com/client_data/6331baf83b563ec3150ad4bb/script.js`}
          strategy="beforeInteractive"
        ></Script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${montserrat.className} bg-black text-white overflow-x-hidden`}
      >
        <Header />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
      <Script
        defer
        data-domain="conference.tum-blockchain.com"
        src="https://plausible.rbg.tum-blockchain.com/js/script.js"
      ></Script>
    </html>
  );
}
