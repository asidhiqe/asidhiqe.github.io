import { Inter, Outfit, JetBrains_Mono, Langar, Lexend } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const outfit = Outfit({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const langar = Langar({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-langar",
});

export const lexend = Lexend({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

