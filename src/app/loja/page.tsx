/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { StaticImageData } from "next/image";

import camisaRosa from "@/assets/images/loja/camisa-preta.jpg";
import camisaVerde from "@/assets/images/loja/camisa-verde.jpg";

import camisaCalca from "@/assets/images/loja/camisa-calca.jpg";

import moletonPreto from "@/assets/images/loja/meleton-preto.jpg";
import moletonBranco from "@/assets/images/loja/moleton-branco.jpg";
import moletonVermelho from "@/assets/images/loja/moleton-vermelho.jpg";
import conjunto from "@/assets/images/loja/conjunto.jpg";

import canecas from "@/assets/images/loja/canecas.jpg";
import canecaBranca from "@/assets/images/loja/caneca-branca.jpg";

import funcional from "@/assets/images/loja/funcional.jpg";

import coquinho from "@/assets/images/loja/coquinho.jpg";
import pandeiro from "@/assets/images/loja/pandeiro.jpg";
import berimbau from "@/assets/images/loja/berimbau.jpg";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagens: StaticImageData[];
}

const produtos: Produto[] = [
  {
    id: 1,
    nome: "Camiseta Funcional",
    descricao: "Camiseta Capo&Vida preta",
    preco: "R$ 75,00",
    imagens: [camisaRosa, camisaVerde],
  },
  {
    id: 2,
    nome: "Abadá de Capoeira",
    descricao: "Uniforme tradicional para práticas de capoeira. Até tamanho G",
    preco: "R$ 290,00",
    imagens: [camisaCalca],
  },
  {
    id: 3,
    nome: "Canecas",
    descricao: "Canecas branca e preta.",
    preco: "R$ 55,00 / 65,00",
    imagens: [canecas, canecaBranca],
  },
  {
    id: 4,
    nome: "Camiseta Funcional",
    descricao: "Camiseta Capo&Vida branca.",
    preco: "R$ 65,00",
    imagens: [funcional],
  },
  
  {
    id: 5,
    nome: "Conjunto Moleton Benais",
    descricao: "Conjunto de moleton e calça BENAIAS",
    preco: "R$ 300,00",
    imagens: [conjunto],
  },
  {
    id: 6,
    nome: "Moleton Benaias",
    descricao: "Preto, Vermelho ou Branco",
    preco: "R$ 220,00",
    imagens: [moletonPreto, moletonVermelho, moletonBranco],
  },
  {
    id: 7,
    nome: "Agogô",
    descricao: "Agogô tradicional para capoeira",
    preco: "R$ 150,00",
    imagens: [coquinho],
  },
  {
    id: 8,
    nome: "Pandeiro",
    descricao: "Pandeiro para musicalização",
    preco: "R$ 180,90",
    imagens: [pandeiro],
  },
  {
    id: 9,
    nome: "Berimbau",
    descricao: "Berimbau tradicional para capoeira",
    preco: "R$ 200,00",
    imagens: [berimbau],
  },
];

export default function LojaPage() {
  const handleComprar = (produto: string) => {
    const mensagem = `Olá! Gostaria de comprar: ${produto}`;
    const whatsappUrl = `https://wa.me/5512996466259?text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <ShoppingCart className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Loja CEEC</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Produtos oficiais e equipamentos para capoeira, música e cultura
            brasileira.
          </p>
        </div>
      </section>

      {/* Produtos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {produtos.map((produto) => (
              <ProdutoCard
                key={produto.id}
                produto={produto}
                handleComprar={handleComprar}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Informações */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Como funciona
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              Ao clicar em "Comprar", você será direcionado para nosso WhatsApp
              onde poderá finalizar o pedido e combinar a forma de pagamento e
              entrega.
            </p>
            <p className="text-gray-600">
              Aceitamos PIX, cartão e dinheiro. Entregamos na região do Vale do
              Paraíba.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
function ProdutoCard({
  produto,
  handleComprar,
}: {
  produto: Produto;
  handleComprar: (nome: string) => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === produto.imagens.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? produto.imagens.length - 1 : prevIndex - 1
    );
  };

  return (
    <Card className="overflow-hidden border-2 border-gray-100 hover:border-red-200 transition-colors">
      <div className="relative h-64">
        <Image
          src={produto.imagens[currentImageIndex] || "/placeholder.svg"}
          alt={produto.nome}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
        {produto.imagens.length > 1 && (
          <>
            <Button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 p-1 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 p-1 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{produto.nome}</h3>
        <p className="text-gray-600 mb-4 h-10">{produto.descricao}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-red-600">
            {produto.preco}
          </span>
          <Button
            onClick={() => handleComprar(produto.nome)}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Comprar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
