"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-700 via-red-800 to-red-950 text-white relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center max-w-4xl"
      >
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight leading-tight">
          Pronto para transformar sua vida com movimento e cuidado?
        </h2>
        <p className="text-red-100 mb-8 max-w-xl mx-auto font-medium">
          Venha nos conhecer e faça uma aula experimental sem compromisso!
        </p>
        <div className="flex justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/5512996466259?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20aula%20experimental%20no%20CEEC%20Benaias!"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 font-bold shadow-lg shadow-black/10 gap-2 text-base cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Agende uma aula experimental
              </Button>
            </motion.div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}