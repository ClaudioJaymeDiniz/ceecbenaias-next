// components/sections/cta-section.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-red-700 to-red-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="uppercase tracking-widest text-red-200 font-semibold">
            Faça parte
          </span>

          <h2 className="text-4xl lg:text-6xl font-black mt-6 mb-8 leading-tight">
            Venha treinar com a gente.
          </h2>

          <p className="text-xl text-gray-200 leading-relaxed mb-10">
            Conheça nossa estrutura, participe das aulas e descubra como o
            esporte pode transformar sua rotina.
          </p>

          <Link
            target="_blank"
            href="https://wa.me/5512996466259?text=Olá,%20gostaria%20de%20agendar%20uma%20visita!"
          >
            <Button className="bg-white text-red-700 hover:bg-gray-100 px-10 py-7 text-lg rounded-2xl font-bold">
              Agendar visita
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}