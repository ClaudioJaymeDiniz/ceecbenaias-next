"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Music, Dumbbell, Heart, Trophy, Activity } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function FeaturesSection() {
  const offers = [
    { icon: Users, title: "Capoeira", desc: "Arte marcial que integra jogo, acrobacias, ritmo e resgate cultural para todas as idades." },
    { icon: Music, title: "Musicalização", desc: "Desenvolvimento do ritmo, canto e expressão corporal através de instrumentos tradicionais." },
    { icon: Trophy, title: "Jiu-Jitsu", desc: "Foco em defesa pessoal, disciplina mental, respeito e excelência no desenvolvimento físico." },
    { icon: Dumbbell, title: "Musculação", desc: "Treinos estruturados para ganho de massa, emagrecimento e fortalecimento muscular geral." },
    { icon: Activity, title: "IRON30", desc: "Circuitos dinâmicos de alta intensidade em 30 minutos. Máxima queima calórica." },
    { icon: Heart, title: "Capo&Vida", desc: "Metodologia exclusiva dedicada à saúde, mobilidade e longevidade de mulheres e idosos." },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-red-600 font-extrabold text-xs uppercase tracking-widest block mb-2">Nossas Modalidades</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight px-2">
            ATIVIDADES QUE TRANSFORMAM O CORPO E FORTALECEM A MENTE
          </h2>
        </motion.div>

        {/* CONTÊINER INTELIGENTE COM ANIMAÇÃO EM CASCATA */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-6 lg:pb-0 px-2 lg:px-0 scrollbar-none snap-x snap-mandatory"
        >
          {offers.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} variants={cardVariants} className="snap-center shrink-0 flex-1">
                <Card 
                  className="group border border-slate-100 bg-white shadow-xs rounded-2xl min-w-[280px] max-w-[320px] sm:max-w-none sm:min-w-0 h-full lg:hover:shadow-xl lg:hover:-translate-y-1 transition-all duration-300"
                >
                  <CardContent className="p-6 sm:p-8 flex flex-col items-start text-left">
                    <div className="w-11 h-11 bg-red-50 text-red-600 lg:group-hover:bg-red-600 lg:group-hover:text-white rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Indicador visual discreto */}
        <div className="flex justify-center gap-1.5 mt-4 lg:hidden">
          <div className="w-4 h-1 bg-red-600 rounded-full"></div>
          <div className="w-1.5 h-1 bg-slate-300 rounded-full"></div>
          <div className="w-1.5 h-1 bg-slate-300 rounded-full"></div>
        </div>

        <div className="text-center mt-10 sm:mt-14">
          <Link href="/programas">
            <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 font-bold gap-2 text-sm sm:text-base group">
              Conhecer todos os programas 
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}