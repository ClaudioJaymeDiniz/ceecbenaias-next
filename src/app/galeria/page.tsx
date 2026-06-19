"use client";

import { GalleryGrid } from "@/components/gallery/gallery-grid";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { GALLERY_ITEMS, CATEGORIES } from "@/lib/galeria";
import { Camera, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO SECTION REFINADO E IMERSIVO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-red-950 text-white py-24 lg:py-32 border-b border-red-950">
        {/* Textura de pontos sutil de fundo */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10 invert pointer-events-none" />
        
        {/* Aurora dourada flutuante de fundo */}
        <motion.div 
          animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none" 
        />

        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center space-y-6">
          
          {/* Badge institucional de topo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-red-200 text-xs font-semibold tracking-wide uppercase shadow-inner backdrop-blur-md mx-auto"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            Registros Históricos
          </motion.div>

          {/* Ícone de Câmera estilizado */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Camera className="w-12 h-12 mx-auto text-amber-400/90 drop-shadow-sm" />
          </motion.div>

          {/* Título com tipografia marcante */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight"
          >
            Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Galeria</span>
          </motion.h1>

          {/* Descrição em tom suave */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-red-100/80 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Explore os momentos marcantes, a energia das rodas, os exames de faixas e a constante evolução dos nossos alunos.
          </motion.p>
        </div>
      </section>

      {/* SEÇÃO DA GRADE DA GALERIA */}
      <section className="py-20 bg-slate-50/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <GalleryGrid items={GALLERY_ITEMS} categories={CATEGORIES} />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}