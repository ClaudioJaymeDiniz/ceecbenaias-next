"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function ValuesSection() {
  const values = [
    { title: "Missão", icon: Target, description: "Transformar vidas através do esporte, da cultura e da educação." },
    { title: "Valores", icon: Heart, description: "Respeito, disciplina, inclusão e compromisso com cada aluno." },
    { title: "Visão", icon: Users, description: "Ser referência em desenvolvimento humano através das artes marciais." },
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-y border-slate-100">
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-red-600 font-extrabold text-xs uppercase tracking-widest block mb-1">Nossa essência</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">Valores que levamos para dentro e fora do tatame.</h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex-1">
                <ScrollReveal direction="up" delay={index * 0.15}>
                  <Card className="border border-slate-200/60 rounded-2xl bg-white shadow-2xs hover:shadow-md transition-shadow duration-300 h-full">
                    <CardContent className="p-8 text-center flex flex-col items-center">
                      <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4 shrink-0 shadow-inner">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-950 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xs">{item.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}