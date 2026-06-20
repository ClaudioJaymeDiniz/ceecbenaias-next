/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, ChevronLeft, ChevronRight, Sparkles, MessageSquare, ShieldCheck, Truck, CreditCard } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

import { PRODUTOS, Produto } from "@/lib/loja";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function LojaPage() {
  const handleComprar = (produto: string) => {
    const mensagem = `Olá! Gostaria de encomendar o item da loja: ${produto}`;
    const whatsappUrl = `https://wa.me/5512996466259?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-red-950 text-white py-20 lg:py-28 border-b border-red-950">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 invert pointer-events-none" />
        
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none" 
        />

        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-red-200 text-xs font-semibold tracking-wide uppercase shadow-inner backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            Coleção Oficial #USEBENAIAS
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight"
          >
            Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Loja Oficial</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-red-100/90 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Adquira vestuários exclusivos, instrumentos tradicionais e acessórios feitos para representar o nosso centro de cultura.
          </motion.p>
        </div>
      </section>

      {/* SEÇÃO DA GRADE DE PRODUTOS */}
      <section className="py-20 bg-slate-50/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PRODUTOS.map((produto) => (
              <ProdutoCard
                key={produto.id}
                produto={produto}
                handleComprar={handleComprar}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO INFORMATIVA "COMO FUNCIONA" REFINADA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-12">
          <div className="space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Como funciona o seu pedido
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base font-medium">
              Garantimos um atendimento humano e personalizado direto em nossa secretaria digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl flex flex-col items-center text-center space-y-3 border border-slate-100/80">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shadow-xs">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">1. Escolha & Clique</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                Ao clicar em "Comprar", uma mensagem com o nome do produto é gerada para o nosso WhatsApp comercial.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl flex flex-col items-center text-center space-y-3 border border-slate-100/80">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shadow-xs">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">2. Pagamento Flexível</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                Alinhamos com você os tamanhos e as opções de pagamento. Aceitamos PIX, cartões de crédito/débito e dinheiro.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl flex flex-col items-center text-center space-y-3 border border-slate-100/80">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shadow-xs">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">3. Entrega Garantida</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                Disponibilizamos a retirada em nossa sede na Vila Industrial ou combinamos a entrega para a região do Vale do Paraíba.
              </p>
            </div>
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

  // Trata o fim do arrasto para decidir se muda de imagem ou volta
  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50; // Quantidade de pixels que o usuário precisa arrastar para disparar a troca
    if (info.offset.x < -threshold) {
      nextImage();
    } else if (info.offset.x > threshold) {
      prevImage();
    }
  };

  return (
    <Card className="overflow-hidden border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 bg-white group flex flex-col justify-between">
      
      {/* AREA DE CAROUSEL DA IMAGEM */}
      <div className="relative h-72 w-full bg-slate-50 flex items-center justify-center overflow-hidden border-b border-slate-100 p-6 select-none touch-pan-y">
        
        {/* Container animado e arrastável */}
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0.6, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.6 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          drag={produto.imagens.length > 1 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.4}
          onDragEnd={handleDragEnd}
          className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
        >
          <Image
            src={produto.imagens[currentImageIndex] || "/placeholder.svg"}
            alt={produto.nome}
            fill
            className="object-contain p-4 group-hover:scale-102 transition-transform duration-500 pointer-events-none"
          />
        </motion.div>
        
        {/* SETAS DO SLIDE (Visíveis por padrão no mobile, hover no desktop) */}
        {produto.imagens.length > 1 && (
          <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-md hover:bg-white text-slate-800 rounded-full shadow-md active:scale-90 transition-all pointer-events-auto cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-md hover:bg-white text-slate-800 rounded-full shadow-md active:scale-90 transition-all pointer-events-auto cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        )}

        {/* INDICADORES DE PÁGINA (DOTS) */}
        {produto.imagens.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/5 px-2.5 py-1.5 rounded-full backdrop-blur-xs">
            {produto.imagens.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex ? "bg-red-600 w-3" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* CONTEÚDO E COMPRA */}
      <CardContent className="p-6 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-1.5">
          <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-red-700 transition-colors">
            {produto.nome}
          </h3>
          <p className="text-slate-600 text-sm font-medium leading-relaxed">
            {produto.descricao}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">A partir de</span>
            <span className="text-2xl font-black tracking-tight text-red-600 leading-none">
              {produto.preco}
            </span>
          </div>

          <Button
            onClick={() => handleComprar(produto.nome)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold h-11 px-5 rounded-xl shadow-md shadow-red-600/10 active:scale-[0.97] transition-all gap-1.5 cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4" />
            Comprar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}