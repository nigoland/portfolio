// Homepage-only typefaces for the Nigoland brand system. Scoped via CSS variables
// on the homepage root rather than the global <html> element, so other routes keep
// using the site-wide Geist fonts from once-ui.config.ts.
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";

export const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const nigolandInter = Inter({
  variable: "--font-nigoland-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
