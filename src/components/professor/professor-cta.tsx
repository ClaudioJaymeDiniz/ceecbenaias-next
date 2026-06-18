"use client";

import { Button } from "@/components/ui/button";
import { contactWhatsapp } from "@/lib/professor";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function ProfessorCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-red-950 text-white py-24 border-t border-red-950">
      
      {/* TEXTURAS */}
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
            Conexão e Propósito
          </span>

          <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
            Conheça o trabalho do Professor Rafael
          </h2>

          <p className="text-base sm:text-xl text-red-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Entre em contato para saber mais sobre aulas, projetos, metodologias
            e também sobre o livro O Resgatado.
          </p>

          <div className="pt-4 max-w-xs mx-auto">
            <a target="_blank" href={contactWhatsapp} className="block w-full">
              <Button className="w-full bg-white text-red-800 hover:bg-red-50 active:scale-[0.98] px-8 h-14 text-base rounded-xl font-bold transition-all shadow-xl shadow-black/10 gap-2 cursor-pointer">
                <MessageSquare className="w-4 h-4 fill-current" />
                Entrar em contato
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}