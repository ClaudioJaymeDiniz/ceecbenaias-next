import type { Metadata } from "next";
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
