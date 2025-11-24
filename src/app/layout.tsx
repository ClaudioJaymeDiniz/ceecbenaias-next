import type { Metadata } from "next";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: side-effect import of global CSS without type declarations
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "CEEC Benaias",
  description:
    "Site oficial do CEEC Benaias, promovendo a capoeira e inclusão social.",
  keywords: ["Capoeira", "CEEC Benaias", "Lutas", "Academia", "Loja"],
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
