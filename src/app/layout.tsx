import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { LAYOUT_STYLE } from "@constants/layout.constants";
import { GoogleAnalytics } from "@next/third-parties/google";

const pjs = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dean's blog",
  description: "all about guitar loops and music theory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId="G-ZKXP22XP2V" />
      )}
      <body
        className={`${pjs.className} ${LAYOUT_STYLE} gradient-bg px-4 md:px-6`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
