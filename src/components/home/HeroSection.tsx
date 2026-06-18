"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, ShieldCheck, MessageSquare } from "lucide-react";
import hero from "@/assets/images/capa-hero.jpeg";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onWatchVideo: () => void;
}

export default function HeroSection({ onWatchVideo }: HeroSectionProps) {
  return (
    // CORRIGIDO: Fundo trocado para o gradiente premium escuro e textos globais em branco
    <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-red-950 text-white pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32 border-b border-red-950">
      
      {/* TEXTURAS DE FUNDO: Sutil textura invertida (pontos brancos) igual ao CTA */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 invert pointer-events-none" />
      
      {/* Auroras de luz internas para dar profundidade e tirar o aspecto chapado */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/20 rounded-full blur-3xl pointer-events-none" 
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
              // CORRIGIDO: Bordas e fundo adaptados para contrastar elegantemente no fundo escuro
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-red-200 text-xs font-semibold tracking-wide uppercase shadow-inner mx-auto lg:mx-0 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-400" />
              Inclusão através do Movimento
            </motion.div>

            {/* CORRIGIDO: Gradiente alterado de vermelho para tons de âmbar/laranja para brilhar sobre o fundo escuro */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.1]">
              Movimento que <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 py-1">transforma</span>.
              <br />
              Inclusão que acolhe.
            </h1>
            
            {/* CORRIGIDO: Cor do parágrafo ajustada para um tom claro legível (text-red-100/90) */}
            <p className="text-base sm:text-lg lg:text-xl text-red-100/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Promovemos o desenvolvimento humano através do esporte, educação e cultura. 
              Aqui, cada treino é planejado para gerar autonomia, saúde e bem-estar real.
            </p>
            
            {/* CORRIGIDO: Botões com tamanho h-14 fixo (robustos no mobile) e cores de alto contraste */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 max-w-md mx-auto lg:mx-0">
              <Button
                size="lg"
                // Botão principal agora é branco sólido com texto vermelho escuro (padrão de destaque sobre fundo vermelho)
                className="bg-white hover:bg-red-50 text-red-800 font-black h-14 px-6 shadow-xl shadow-black/10 active:scale-[0.98] transition-all duration-200 gap-3 text-base rounded-xl w-full sm:flex-1 py-4 cursor-pointer"
                onClick={onWatchVideo}
              >
                <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                Assista Nossa História
              </Button>

              <a
                href="https://wa.me/5512996466259?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20ao%20CEEC%20Benaias!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1"
              >
                <Button
                  size="lg"
                  variant="outline"
                  // Botão secundário vazado com bordas brancas e efeito de preenchimento translúcido
                  className="w-full h-14 px-6 border-white/20 bg-white/5 text-white hover:bg-white hover:text-red-800 font-black text-base shadow-xs rounded-xl py-4 transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                  Agendar Visita
                </Button>
              </a>
            </div>
          </motion.div>

          {/* IMAGEM PRINCIPAL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center mt-4 lg:mt-0"
          >
            {/* Adicionado um brilho sutil vermelho por trás da imagem para destacar no fundo escuro */}
            <div className="absolute -inset-2 rounded-[1.5rem] sm:rounded-[2.5rem] bg-red-500/10 blur-xl pointer-events-none" />

            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none aspect-[4/3] sm:aspect-square rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 bg-neutral-900 z-10">
              <Image
                src={hero}
                alt="Alunos praticando capoeira e atividades físicas"
                fill
                priority
                className="object-cover"
              />
              
              {/* Pequena tag de proteção interna perfeitamente preservada e nítida */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-100 flex items-center gap-3 shadow-md text-slate-800"
              >
                <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center text-amber-500 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none">Ambiente Seguro</p>
                  <p className="text-xs font-extrabold text-slate-800 mt-0.5">Metodologia 100% Inclusiva</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}