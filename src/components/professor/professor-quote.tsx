"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function ProfessorQuote() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Quote className="w-12 h-12 text-red-600/15 mx-auto mb-6 animate-pulse" />
        </motion.div>

        <motion.blockquote 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl sm:text-2xl lg:text-3xl text-slate-800 italic font-medium leading-relaxed max-w-3xl mx-auto"
        >
          "Que este livro seja mais do que apenas uma leitura, mas sim uma
          experiência que toque o seu coração e o leve a descobrir o
          extraordinário poder da fé e do amor de Deus."
        </motion.blockquote>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-6 font-extrabold text-slate-900 tracking-wide uppercase text-sm"
        >
          — Rafael Reis
        </motion.p>
        
      </div>
    </section>
  );
}