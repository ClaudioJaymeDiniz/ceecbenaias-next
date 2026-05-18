// components/sections/about-hero.tsx

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, MapPin, Shield } from "lucide-react";

import heroImage from "@/assets/images/galeria/img36.png";

export function AboutHero() {
  return (
    <section className="relative bg-neutral-950 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-200 mb-8">
              <Flame className="w-4 h-4" />
              Capoeira • Jiu-Jitsu • Cultura • Comunidade
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
              Mais que uma academia.
              <span className="block text-red-500">
                Um espaço de transformação.
              </span>
            </h1>

            <p className="max-w-2xl text-lg text-neutral-300 leading-relaxed mb-10">
              O CEEC Benaias une artes marciais, cultura, disciplina e
              acolhimento em um ambiente feito para desenvolver corpo, mente e
              propósito.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                target="_blank"
                href="https://wa.me/5512996466259?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20ao%20CEEC%20Benaias!"
              >
                <Button className="h-14 px-8 rounded-full bg-red-600 hover:bg-red-700 text-white text-base font-bold">
                  Agendar visita
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              <Link href="/programas">
                <Button
                  variant="outline"
                  className="h-14 px-8 rounded-full border-white/20 bg-white/5 text-white hover:bg-white hover:text-black text-base font-bold"
                >
                  Ver programas
                </Button>
              </Link>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-red-600/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
              <Image
                src={heroImage}
                alt="CEEC Benaias"
                priority
                className="h-[420px] lg:h-[560px] w-full object-cover"
              />

              <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-md p-5">
                <p className="text-sm text-neutral-300 mb-1">
                  Artes marciais, cultura e disciplina
                </p>
                <p className="text-2xl font-black">
                  Um lugar para evoluir todos os dias.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
            <Shield className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-black mb-2">Disciplina</h3>
            <p className="text-neutral-400">
              Treinos que desenvolvem foco, respeito e constância.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
            <Flame className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-black mb-2">Capoeira</h3>
            <p className="text-neutral-400">
              Movimento, cultura, musicalidade e identidade brasileira.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
            <MapPin className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-black mb-2">Comunidade</h3>
            <p className="text-neutral-400">
              Um ambiente acolhedor para crianças, jovens e adultos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}