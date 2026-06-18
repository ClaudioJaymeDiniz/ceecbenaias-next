"use client";

import Image from "next/image";
import SponsorLogos from "@/components/parceiros/parceiros";
import tiorafa1 from "@/assets/images/parceiros/tiorafa1.jpg";
import tiorafa2 from "@/assets/images/parceiros/tiorafa2.jpg";
import logo from "@/assets/images/parceiros/benaias.jpeg";
import { motion } from "framer-motion";

export default function PartnersSection() {
  const corporateBenefits = ["Wellhub", "TotalPass", "GuruPass"];
  const institutionalLogos = [
    { src: tiorafa1, alt: "Tio Rafa Academia" },
    { src: tiorafa2, alt: "Instituto Tio Rafa" },
    { src: logo, alt: "CEEC Benaias" },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200 relative overflow-hidden">
      {/* Aumentada a opacidade do dot-pattern para dar textura real no fundo */}
      <div className="absolute inset-0 bg-dot-pattern opacity-70 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-3 text-center lg:text-left"
          >
            {/* Texto auxiliar agora em vermelho escuro para destacar */}
            <span className="text-[11px] font-black uppercase tracking-widest text-red-600 block">Conveniência</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              Treine usando seu benefício corporativo
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
              Simplificamos seu cuidado com a saúde. Somos credenciados com as maiores redes corporativas do país.
            </p>
          </motion.div>

          {/* CARDS DE CONVÊNIOS: Mudado para 2 colunas no mobile (grid-cols-2) e 3 no desktop (sm:grid-cols-3) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-4 lg:mt-0">
            {corporateBenefits.map((benefit, idx) => (
              <motion.div 
                key={benefit} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                // bg-white puro, borda mais visível, shadow realçado e texto text-slate-800 para dar contraste pesado
                className={`bg-white border border-slate-200 p-4 sm:p-6 rounded-xl shadow-sm text-center flex items-center justify-center min-h-[80px] sm:min-h-[90px] transition-all duration-200 hover:shadow-md cursor-default ${
                  benefit === "GuruPass" ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <span className="text-sm sm:text-base font-black text-slate-800 tracking-wider uppercase">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Linha divisória com mais presença */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-12" />

        {/* ÁREA DE MARCA REPETIDA/APOIO */}
        <div className="space-y-6">
          <p className="text-center text-[11px] font-black text-slate-500 uppercase tracking-widest">
            Realização & Apoio Institucional
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-10 sm:gap-16 flex-wrap"
          >
            {institutionalLogos.map((img, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.08 }}
                className="w-16 h-16 sm:w-20 sm:h-20 relative opacity-100 filter drop-shadow-xs transition-transform duration-200"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain mix-blend-multiply"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        
        <div className="mt-10 border-t border-slate-200 pt-8">
          <SponsorLogos />
        </div>

      </div>
    </section>
  );
}