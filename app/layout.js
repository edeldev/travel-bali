import { Alice, Dancing_Script } from "next/font/google";
import "./globals.css";

const alice = Alice({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const dancingScript = Dancing_Script({
  variable: "--font-bali",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Viaja a Bali - Descubre todo lo que se esconde en este lugar",
  description:
    "Descubre Bali: playas, templos, cultura y aventura. Planifica tu viaje perfecto con nuestra guía completa y recomendaciones locales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${alice.variable} ${dancingScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
