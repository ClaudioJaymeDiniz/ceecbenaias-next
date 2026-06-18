"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import perfil from "@/assets/images/rafaperfil.png";
import { motion } from "framer-motion";

export default function TeacherSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="overflow-hidden border border-gray-100 shadow-md rounded-2xl bg-gray-50">
          <div className="grid md:grid-cols-12 gap-0">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-72 sm:h-96 md:h-auto md:col-span-5"
            >
              <Image
                src={perfil}
                alt="Professor Rafael"
                fill
                className="object-cover object-center"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="md:col-span-7 flex flex-col justify-center"
            >
              <CardContent className="p-8 sm:p-10 flex flex-col justify-center h-full">
                <span className="text-red-600 text-xs font-bold tracking-widest uppercase mb-1">Idealizador</span>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Professor Rafael
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  Rafael é educador físico, escritor e idealizador de projetos
                  que unem inclusão, esporte e desenvolvimento humano. Criador
                  do método Capo&Vida e do curso "Transformando Vidas", é
                  referência no Vale do Paraíba.
                </p>
                <Link href="/professor">
                  <Button className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-fit font-medium">
                    Conheça o professor Rafael
                  </Button>
                </Link>
              </CardContent>
            </motion.div>

          </div>
        </Card>
      </div>
    </section>
  );
}