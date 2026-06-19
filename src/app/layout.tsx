import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";

import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CEEC Benaias",
  description:
    "O CEEC Benaias une artes marciais, cultura, disciplina e acolhimento em um ambiente feito para desenvolver corpo, mente e propósito.",
  keywords: ["Capoeira", "CEEC Benaias", "Jiu-Jitsu", "Inclusão Social", "Desenvolvimento Humano"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="pt-BR" 
      className={`${inter.variable} ${outfit.variable}`}
      suppressHydrationWarning 
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}