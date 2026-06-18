"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import perfil from "@/assets/images/rafaperfil.png";
import { professorWhatsapp } from "@/lib/professor";
import { motion } from "framer-motion";

export function ProfessorHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-red-950 text-white pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36 border-b border-red-950">
      
      {/* TEXTURAS E AURORAS DE FUNDO */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 invert pointer-events-none" />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* CONTEÚDO TEXTUAL */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 lg:col-span-7 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded-full text-red-200 text-xs font-semibold tracking-wide uppercase shadow-inner mx-auto lg:mx-0 backdrop-blur-md"
            >
              Professor • Educador • Escritor • Idealizador
            </motion.div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.15] sm:leading-[1.1] tracking-tight">
              Professor Rafael Reis
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 py-1">
                uma história de resgate e transformação.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-red-100/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Educador físico, escritor e idealizador de projetos que unem esporte, inclusão, fé e desenvolvimento humano.
            </p>

            <div className="pt-2 max-w-xs mx-auto lg:mx-0">
              <a target="_blank" href={professorWhatsapp} className="block w-full">
                <Button className="w-full bg-white text-red-800 hover:bg-red-50 active:scale-[0.98] px-8 h-14 text-base rounded-xl font-bold transition-all shadow-xl shadow-black/10 gap-2 cursor-pointer">
                  Fale com o professor
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* IMAGEM DO PROFESSOR */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center mt-4 lg:mt-0"
          >
            <div className="absolute -inset-2 rounded-[2.5rem] bg-red-500/10 blur-xl pointer-events-none" />

            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none aspect-[4/5] overflow-hidden rounded-[2rem] border-4 border-white/10 bg-white/5 shadow-2xl z-10">
              <Image
                src={perfil}
                alt="Professor Rafael Reis"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}