import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});
