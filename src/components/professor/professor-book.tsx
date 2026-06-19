"use client";

import Image from "next/image";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import capalivro from "@/assets/images/livro/oresgatado.jpeg";
import { bookWhatsapp } from "@/lib/professor";
import { motion } from "framer-motion";

export function ProfessorBook() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-950 via-neutral-900 to-neutral-950 text-white py-24 border-b border-neutral-950">
      
      <div className="absolute inset-0 bg-dot-pattern opacity-5 invert pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* TEXTO INFORMATIVO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 text-center lg:text-left space-y-4"
          >
            <span className="text-amber-400 font-extrabold uppercase tracking-widest text-xs block">
              Livro
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              O Resgatado
            </h2>

            <p className="text-lg sm:text-xl text-red-200/90 font-medium">
              Das drogas ao esporte — Ministério Resgate
            </p>

            <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed pt-2 font-normal">
              <p>
                Rafael Reis conheceu a dor cedo: rejeitado pela mãe, entregue à
                adoção, mergulhou nas drogas e no crime ainda jovem.
              </p>
              <p>
                Quando tudo parecia perdido, o amor de Cristo o alcançou. Esse
                reencontro mudou sua história.
              </p>
              <p>
                Hoje, através do esporte e do Ministério Resgate, Rafael dedica
                suva vida a cuidar de quem também precisa ser lembrado, acolhido
                e transformado.
              </p>
            </div>

            <div className="pt-6 max-w-xs mx-auto lg:mx-0">
              <a target="_blank" href={bookWhatsapp} className="block w-full">
                <Button className="w-full h-14 px-8 rounded-xl bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-bold text-base shadow-xl shadow-black/20 gap-2 cursor-pointer transition-all">
                  Adquirir o livro
                  <BookOpen className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* MOCKUP DO LIVRO */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative max-w-xs sm:max-w-sm w-full px-4">
              <div className="absolute -inset-4 rounded-[2rem] bg-red-600/20 blur-3xl pointer-events-none" />

              <Image
                src={capalivro}
                alt="Capa do livro O Resgatado"
                className="relative rounded-2xl shadow-2xl w-full border border-white/5"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}