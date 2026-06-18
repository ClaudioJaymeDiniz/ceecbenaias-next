"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import sede from "@/assets/images/sobrenos.jpeg";

export function HistorySection() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      
      {/* Sombra de fundo orgânica e clara */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* IMAGEM DESLIZANDO DA ESQUERDA */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl border border-slate-50">
                <Image src={sede} alt="Sede física do CEEC Benaias" fill className="object-cover" />
              </div>
            </ScrollReveal>
          </div>

          {/* TEXTO DESLIZANDO DA DIREITA */}
          <div className="lg:col-span-7 space-y-5 order-1 lg:order-2 text-center lg:text-left">
            <ScrollReveal direction="left" delay={0.1}>
              <span className="text-red-600 font-extrabold text-xs uppercase tracking-widest block">
                Nossa história
              </span>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Conheça o CEEC Benaias
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>Fundado em 2022, o CEEC Benaias nasceu com o propósito de unir esporte, cultura e educação em um ambiente acolhedor e transformador.</p>
                <p>Nossa missão vai além do treinamento físico. Trabalhamos o respeito, a disciplina, a inclusão e o desenvolvimento humano através da capoeira, do jiu-jitsu e da preparação física.</p>
                <p className="text-slate-900 font-semibold border-l-2 border-red-500 pl-4 py-1 text-left hidden sm:block">
                  Hoje somos referência no Vale do Paraíba em programas inclusivos que ajudam crianças, jovens e adultos a evoluírem dentro e fora dos treinos.
                </p>
                <p className="sm:hidden">Today somos referência no Vale do Paraíba em programas inclusivos que ajudam crianças, jovens e adultos a evoluírem dentro e fora dos treinos.</p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}