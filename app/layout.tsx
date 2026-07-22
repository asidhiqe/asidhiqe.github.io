import type { Metadata } from "next";
import type { ReactNode } from "react";
import { inter, instrumentSerif, jetbrainsMono } from "./fonts";
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
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
