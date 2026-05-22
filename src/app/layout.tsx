import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: side-effect import of global CSS without type declarations
import "../styles/globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "CEEC Benaias",
  description:
    "Site oficial do CEEC Benaias, promovendo a capoeira e inclusão social.",
  keywords: ["Capoeira", "CEEC Benaias", "Lutas", "Academia", "Loja"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${oswald.variable}`}>
        {children}
      </body>
    </html>
  );
}