"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 max-w-4xl text-center"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Sobre Nós
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed font-normal max-w-3xl mx-auto">
          Fundado em 2022, o <strong>CEEC Benaias</strong> promove inclusão e desenvolvimento
          por meio do esporte, da educação e da cultura. Aqui, cada
          movimento é um passo para uma vida com mais autonomia, saúde e
          bem-estar de nossos alunos.
        </p>
        <Link href="/sobre">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-medium shadow-md shadow-red-600/10">
            Saiba mais sobre nossa história
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}