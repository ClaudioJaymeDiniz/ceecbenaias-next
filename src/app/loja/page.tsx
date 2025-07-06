/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import camisaPreta from '@/assets/images/loja/camisa-preta.jpg';
import camisaBranca from '@/assets/images/loja/camisa-branca.jpg';
import canecas from '@/assets/images/loja/canecas.jpg';
import Logo from "@/components/ui/logo"
import Footer from "@/components/footer/footer"

const produtos = [
  {
    id: 1,
    nome: "Camiseta CEEC Benaias",
    descricao: "Camiseta oficial do CEEC com logo bordado",
    preco: "R$ 45,00",
    imagem: camisaPreta,
  },
  {
    id: 2,
    nome: "Abadá de Capoeira",
    descricao: "Uniforme tradicional para práticas de capoeira",
    preco: "R$ 80,00",
    imagem: camisaBranca,
  },
  {
    id: 3,
    nome: "Berimbau Artesanal",
    descricao: "Berimbau feito à mão por artesãos locais",
    preco: "R$ 150,00",
    imagem: canecas,
  },
  {
    id: 4,
    nome: "Atabaque Pequeno",
    descricao: "Atabaque tradicional para roda de capoeira",
    preco: "R$ 120,00",
    imagem: canecas,
  },
  {
    id: 5,
    nome: "Pandeiro Profissional",
    descricao: "Pandeiro de alta qualidade para musicalização",
    preco: "R$ 90,00",
    imagem: camisaBranca,
  },
  {
    id: 6,
    nome: "Kit Iniciante Capoeira",
    descricao: "Kit completo para quem está começando",
    preco: "R$ 200,00",
    imagem: camisaPreta,
  },
]

export default function LojaPage() {
  const handleComprar = (produto: string) => {
    const mensagem = `Olá! Gostaria de comprar: ${produto}`
    const whatsappUrl = `https://wa.me/5512999999999?text=${encodeURIComponent(mensagem)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">Voltar</span>
          </Link>

          <div className="flex items-center space-x-2">
            <Logo />
            <span className="text-xl font-bold text-black">CEEC Benaias</span>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <ShoppingCart className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Loja CEEC</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Produtos oficiais e equipamentos para capoeira, música e cultura brasileira.
          </p>
        </div>
      </section>

      {/* Produtos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {produtos.map((produto) => (
              <Card
                key={produto.id}
                className="overflow-hidden border-2 border-gray-100 hover:border-red-200 transition-colors"
              >
                <div className="relative h-64">
                  <Image
                    src={produto.imagem || "/placeholder.svg"}
                    alt={produto.nome}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{produto.nome}</h3>
                  <p className="text-gray-600 mb-4">{produto.descricao}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-600">{produto.preco}</span>
                    <Button
                      onClick={() => handleComprar(produto.nome)}
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      Comprar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Informações */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Como funciona</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              Ao clicar em "Comprar", você será direcionado para nosso WhatsApp onde poderá finalizar o pedido e
              combinar a forma de pagamento e entrega.
            </p>
            <p className="text-gray-600">Aceitamos PIX, cartão e dinheiro. Entregamos na região do Vale do Paraíba.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
