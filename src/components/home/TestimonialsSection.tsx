"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    { text: "O CEEC mudou a vida do meu filho. Hoje ele tem mais autonomia e confiança.", author: "Mãe de aluno" },
    { text: "As aulas de capoeira me trouxeram não só saúde física, mas também paz mental.", author: "Aluna do Capo&Vida" },
    { text: "Ambiente acolhedor e profissionais dedicados. Recomendo para toda família.", author: "Pai de aluno" },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Depoimentos
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Card className="border border-gray-100 bg-gray-50/50 shadow-sm relative pt-4 h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <Quote className="w-8 h-8 text-red-200 absolute top-4 left-4 pointer-events-none" />
                  <p className="text-gray-700 italic mb-4 relative z-10 pl-2 pt-2">
                    "{item.text}"
                  </p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-2">— {item.author}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}