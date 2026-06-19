/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, MapPin, Shield } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import heroImage from "@/assets/images/home-sobre.jpeg";

export function AboutHero() {
  return (
    <section className="relative bg-neutral-950 text-white overflow-hidden pt-12 pb-20 sm:py-24 lg:py-32">
      
      {/* AURORA ORGÂNICA EM MOVIMENTO (Substitui os pontos rígidos) */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] sm:w-[650px] sm:h-[650px] bg-gradient-to-tr from-red-600/20 via-orange-500/10 to-transparent rounded-full blur-[80px] pointer-events-none" 
      />
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -20, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[-5%] left-[-10%] w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] bg-red-950/40 rounded-full blur-[60px] pointer-events-none" 
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* TEXTO ANIMADO */}
          <div className="text-center lg:text-left space-y-6">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-1.5 text-xs font-semibold text-red-400 mx-auto lg:mx-0 backdrop-blur-md">
                <Flame className="w-3.5 h-3.5" />
                Capoeira • Jiu-Jitsu • Cultura • Comunidade
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-6xl font-black leading-[1.1] tracking-tight">

                MAIS QUE UMA ACADEMIA.

                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">

                  UM ESPAÇO DE TRANSFORMAÇÃO.

                </span>

              </h1>

            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base text-neutral-400 leading-relaxed">
                O CEEC Benaias une artes marciais, cultura, disciplina e acolhimento em um ambiente feito para desenvolver corpo, mente e propósito.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0 pt-2">
                <Link target="_blank" href="https://wa.me/5512996466259?text=Ol%C3%A1" className="w-full sm:flex-1">
                  <Button className="w-full h-13 sm:h-14 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-bold gap-2 shadow-lg shadow-red-600/20 transition-all">
                    Agendar visita
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/programas" className="w-full sm:flex-1">
                  <Button variant="outline" className="w-full h-13 sm:h-14 rounded-xl border-neutral-800 bg-neutral-900/40 text-neutral-300 hover:bg-white hover:text-black text-sm font-bold transition-all">
                    Ver programas
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* IMAGEM COM MICRO-FLUTUAÇÃO ORGÂNICA NATIVA */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="relative mt-4 lg:mt-0 flex justify-center">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-md lg:max-w-none overflow-hidden rounded-2xl sm:rounded-[2.5rem] border border-white/10 bg-neutral-900 shadow-2xl"
              >
                <Image src={heroImage} alt="CEEC Benaias" priority className="h-[280px] sm:h-[420px] lg:h-[500px] w-full object-cover" />
                <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-black/70 backdrop-blur-md p-4">
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold mb-0.5">Artes marciais, cultura e disciplina</p>
                  <p className="text-base sm:text-lg font-black text-white">Um lugar para evoluir todos os dias.</p>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* PILARES INFERIORES */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 mt-16 pb-4 md:pb-0 scrollbar-none snap-x snap-mandatory px-1 md:px-0">
          {[
            { icon: Shield, title: "Disciplina", desc: "Treinos que desenvolvem foco, respeito e constância." },
            { icon: Flame, title: "Capoeira", desc: "Movimento, cultura, musicalidade e identidade brasileira." },
            { icon: MapPin, title: "Comunidade", desc: "Um ambiente acolhedor para crianças, jovens e adultos." }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="min-w-[260px] max-w-[300px] md:max-w-none md:min-w-0 snap-center shrink-0 flex-1">
                <ScrollReveal direction="up" delay={0.1 * idx}>
                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-xs h-full">
                    <div className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center mb-4 text-red-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-black mb-1 text-white">{item.title}</h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}