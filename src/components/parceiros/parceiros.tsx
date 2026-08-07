"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import bf from "@/assets/images/parceiros/bf.jpg";
import ievp from "@/assets/images/parceiros/ievp.jpg";
import pincelmagico from "@/assets/images/parceiros/pincelmagico.jpg";
import cnascimento from "@/assets/images/parceiros/colegionascimento.jpg";
import lumnare from "@/assets/images/parceiros/lumnare.jpeg";


interface Sponsor {
  name: string;
  src: StaticImageData;
  link?: string;
}

const sponsors: Sponsor[] = [
  { name: "BF Gestão", src: bf },
  { name: "IEVP", src: ievp },
  { name: "Pincel Mágico", src: pincelmagico },
  { name: "Colégio Nascimento", src: cnascimento },
  { name: "Lumare", src: lumnare },
  
];

export default function SponsorLogos() {
  return (
    <div className="py-6 sm:py-10">
      {/* Título com contraste correto para o fundo claro */}
      <h3 className="text-center text-[11px] font-black text-slate-400 uppercase tracking-widest mb-10">
        Nossos Patrocinadores e Apoios
      </h3>

      {/* Grid inteligente: 3 colunas no mobile para não quebrar a tela */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 place-items-center">
        {sponsors.map((sponsor, idx) => {
          const logoContent = (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.05 }}
              // Base do card branca e nítida para destacar as cores de cada logo
              className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center p-2 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              <Image
                src={sponsor.src}
                alt={`${sponsor.name} Logo`}
                width={96}
                height={96}
                // CORRIGIDO: Removido o grayscale. Agora as cores originais aparecem 100% no mobile e desktop.
                className="w-full h-full object-contain rounded-lg filter contrast-115 mix-blend-multiply transition-all duration-300"
              />
            </motion.div>
          );

          return sponsor.link ? (
            <Link
              key={sponsor.name}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center"
            >
              {logoContent}
            </Link>
          ) : (
            <div key={sponsor.name} className="w-full flex justify-center">
              {logoContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}