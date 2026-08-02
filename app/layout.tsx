import type { Metadata } from "next";
import type { ReactNode } from "react";
import { inter, outfit, jetbrainsMono, langar, lexend } from "./fonts";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aboobacker Sidhiqe — Principal Product Designer",
  description:
    "Aboobacker Sidhiqe designs systems that help experts make better decisions in complex environments — across healthcare, AI, airports, finance, and logistics.",
  openGraph: {
    title: "Aboobacker Sidhiqe — Principal Product Designer",
    description:
      "Designing systems that help make better decisions in complex environments.",
    type: "website",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} ${langar.variable} ${lexend.variable}`}
    >
      <body>
        <CustomCursor />
        <Preloader />
        <div className="film-grain" aria-hidden="true" />
        <div className="global-svg-grid-pattern" aria-hidden="true" />
        <div className="svg-sprinkles-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
