import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import perfil from "@/assets/images/rafaperfil.png";
import { professorWhatsapp } from "@/lib/professor";

export function ProfessorHero() {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-200 mb-8">
              Professor • Educador • Escritor • Idealizador
            </span>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
              Professor Rafael Reis
              <span className="block text-red-500">
                uma história de resgate e transformação.
              </span>
            </h1>

            <p className="text-lg text-neutral-300 leading-relaxed mb-10 max-w-2xl">
              Educador físico, escritor e idealizador de projetos que unem
              esporte, inclusão, fé e desenvolvimento humano.
            </p>

            <a target="_blank" href={professorWhatsapp}>
              <Button className="h-14 px-8 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold">
                Fale com o professor
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-red-600/20 blur-2xl rounded-[2rem]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
              <Image
                src={perfil}
                alt="Professor Rafael Reis"
                className="w-full h-[520px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}