"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import loja from "@/assets/images/academia/academia.jpeg";
import equipamento from "@/assets/images/academia/equipamentos.jpeg";
import area from "@/assets/images/academia/tatame.jpeg";

export function StructureSection() {
  const estrutura = [
    { title: "Loja", description: "Roupas, equipamentos e acessórios para treinar com qualidade.", image: loja },
    { title: "Equipamentos", description: "Estrutura moderna voltada para condicionamento físico e performance.", image: equipamento },
    { title: "Área de treino", description: "Ambiente preparado para treinos de capoeira, jiu-jitsu e funcional.", image: area },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <ScrollReveal direction="up">
          <div className="max-w-2xl mb-14 text-center sm:text-left">
            <span className="text-red-600 font-extrabold text-xs uppercase tracking-widest block mb-1">Estrutura</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">Um ambiente completo para evolução física e pessoal.</h2>
          </div>
        </ScrollReveal>

        <div className="space-y-16 sm:space-y-20">
          {estrutura.map((item, index) => (
            <div
              key={item.title}
              className={`grid lg:grid-cols-12 gap-8 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-12" : ""
              }`}
            >
              <div className="lg:col-span-6">
                <ScrollReveal direction={index % 2 === 0 ? "right" : "left"} delay={0.1}>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-lg border border-slate-100">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-6 text-center sm:text-left space-y-2">
                <ScrollReveal direction="up" delay={0.2}>
                  <h3 className="text-xl font-extrabold text-slate-950">{item.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto sm:mx-0">{item.description}</p>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}