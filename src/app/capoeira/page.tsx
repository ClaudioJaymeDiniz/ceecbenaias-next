"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Flame, 
  Swords, 
  History, 
  Activity, 
  MessageSquare 
} from "lucide-react";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

import angola from "@/assets/images/capoeira/angola.jpeg";
import regional from "@/assets/images/capoeira/cap-12.jpeg";
import contemporanea from "@/assets/images/capoeira/contemp.jpeg";
import maculele from "@/assets/images/capoeira/maculele.png";
import { motion } from "framer-motion";

const lutas = [
  {
    id: 1,
    nome: "Capoeira Angola",
    descricao:
      "O estilo tradicional e ancestral da capoeira. Caracteriza-se por manter viva a essência ritualística dos fundamentos, com um jogo estratégico, expressivo e executado mais próximo ao solo.",
    imagem: angola,
    icone: History,
    caracteristicas: [
      "Movimentos estratégicos e cadenciados",
      "Jogo técnico próximo ao chão",
      "Forte preservação da tradição ancestral",
    ],
  },
  {
    id: 2,
    nome: "Capoeira Regional",
    descricao:
      "Criada pelo mestre pioneiro Mestre Bimba, esta vertente trouxe um método de ensino sistemático e focado na disciplina. Apresenta uma dinâmica de jogo mais rápida, com golpes objetivos e acrobacias.",
    imagem: regional,
    icone: Flame,
    caracteristicas: [
      "Movimentos rápidos e dinâmicos",
      "Acrobacias e floreios marcantes",
      "Sequências estruturadas de ensino",
    ],
  },
  {
    id: 3,
    nome: "Capoeira Contemporânea",
    descricao:
      "Uma fusão moderna que une elementos e pontos fortes tanto da Angola quanto da Regional. É a abordagem mais versátil da atualidade, adaptando-se a diferentes perfis de praticantes.",
    imagem: contemporanea,
    icone: Activity,
    caracteristicas: [
      "Alta versatilidade tática",
      "Adaptação para os tempos modernos",
      "Metodologia inclusiva e abrangente",
    ],
  },
  {
    id: 4,
    nome: "Maculelê",
    descricao:
      "Uma riquíssima expressão e dança folclórica brasileira associada à cultura da capoeira. Simula de maneira artística uma batalha tribal ritmada através do uso de bastões de madeira.",
    imagem: maculele,
    icone: Swords,
    caracteristicas: [
      "Uso rítmico de bastões (grimas)",
      "Expressão artística e folclórica",
      "Ritmo percussivo e intenso",
    ],
  },
];

export default function LutasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO SECTION PREMIUM */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-red-950 text-white py-20 lg:py-28 border-b border-red-950">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 invert pointer-events-none" />
        
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.12, 0.22, 0.12] }}
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
            Tradição, Arte e Movimento
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight"
          >
            Modalidades de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Capoeira</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-red-100/90 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Explore as diferentes vertentes rítmicas, históricas e marciais que preservamos e ensinamos em nossa escola.
          </motion.p>
        </div>
      </section>

      {/* SEÇÃO DAS MODALIDADES / LUTAS */}
      <section className="py-24 bg-slate-50/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-16">
            {lutas.map((luta, index) => {
              const IconeComponente = luta.icone;

              return (
                <motion.div
                  key={luta.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Card className="overflow-hidden border border-slate-100 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 bg-white group">
                    <div className="grid lg:grid-cols-12 gap-0">
                      
                      {/* IMAGEM DA VALORIZAÇÃO DA LUTA */}
                      <div className={`relative min-h-[260px] sm:min-h-[340px] lg:h-full lg:col-span-5 overflow-hidden ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}>
                        <Image
                          src={luta.imagem}
                          alt={luta.nome}
                          fill
                          className="object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      </div>

                      {/* CONTEÚDO EXPLICATIVO */}
                      <CardContent className="p-6 sm:p-10 lg:p-12 lg:col-span-7 flex flex-col justify-center space-y-6">
                        
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shrink-0 shadow-xs">
                            <IconeComponente className="w-6 h-6" />
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
                            {luta.nome}
                          </h2>
                        </div>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                          {luta.descricao}
                        </p>

                        {/* LISTA DE CARACTERÍSTICAS PREMIUM */}
                        <div className="space-y-3 pt-2">
                          <h3 className="font-extrabold text-slate-900 text-sm tracking-wide uppercase">
                            Características Principais:
                          </h3>
                          <ul className="space-y-2.5">
                            {luta.caracteristicas.map((caracteristica, idx) => (
                              <li key={idx} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-red-600 to-orange-500 rounded-full shrink-0 shadow-sm" />
                                <span className="text-sm sm:text-base text-slate-700 font-medium">
                                  {caracteristica}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION PREMIUM */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-red-950 text-white py-24 border-t border-red-950">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 invert pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <span className="uppercase tracking-widest text-red-200 text-xs font-extrabold block">
              Vivencie na Pele
            </span>

            <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
              Interessado em aprender?
            </h2>

            <p className="text-base sm:text-xl text-red-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
              Venha conhecer de perto a nossa energia! Agende uma aula experimental e descubra qual desses ritmos e estilos conecta melhor com você.
            </p>

            <div className="pt-4 max-w-xs mx-auto">
              <a
                target="_blank"
                href="https://wa.me/5512996466259?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20aula%20experimental%20no%20CEEC%20Benaias!"
                className="block w-full"
              >
                <Button className="w-full bg-white text-red-800 hover:bg-red-50 active:scale-[0.98] px-8 h-14 text-base rounded-xl font-bold transition-all shadow-xl shadow-black/10 gap-2 cursor-pointer">
                  <MessageSquare className="w-4 h-4 fill-current" />
                  Agende uma aula experimental
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}