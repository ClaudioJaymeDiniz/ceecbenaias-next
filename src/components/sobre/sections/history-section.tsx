// components/sections/history-section.tsx

import Image from "next/image";

import sede from "@/assets/images/sobrenos.jpeg";

export function HistorySection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">
          <div className="relative">
            <Image
              src={sede}
              alt="CEEC Benaias"
              className="rounded-3xl shadow-2xl object-cover"
            />
          </div>

          <div>
            <span className="text-red-600 font-semibold uppercase tracking-wider">
              Nossa história
            </span>

            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-4 mb-8 leading-tight">
              Conheça o CEEC Benaias
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Fundado em 2022, o CEEC Benaias nasceu com o propósito de unir
                esporte, cultura e educação em um ambiente acolhedor e
                transformador.
              </p>

              <p>
                Nossa missão vai além do treinamento físico. Trabalhamos o
                respeito, a disciplina, a inclusão e o desenvolvimento humano
                através da capoeira, do jiu-jitsu e da preparação física.
              </p>

              <p>
                Hoje somos referência no Vale do Paraíba em programas inclusivos
                que ajudam crianças, jovens e adultos a evoluírem dentro e fora
                dos treinos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}