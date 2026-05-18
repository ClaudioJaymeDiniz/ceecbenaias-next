// components/sections/structure-section.tsx

import Image from "next/image";

import loja from "@/assets/images/academia/academia.jpeg";
import equipamento from "@/assets/images/academia/equipamentos.jpeg";
import area from "@/assets/images/academia/tatame.jpeg";


const estrutura = [
  {
    title: "Loja",
    description:
      "Roupas, equipamentos e acessórios para treinar com qualidade.",
    image: loja,
  },
  {
    title: "Equipamentos",
    description:
      "Estrutura moderna voltada para condicionamento físico e performance.",
    image: equipamento,
  },
  {
    title: "Área de treino",
    description:
      "Ambiente preparado para treinos de capoeira, jiu-jitsu e funcional.",
    image: area,
  },
  
];

export function StructureSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <span className="text-red-600 font-semibold uppercase tracking-wider">
            Estrutura
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-4">
            Um ambiente completo para evolução física e pessoal.
          </h2>
        </div>

        <div className="space-y-12">
          {estrutura.map((item, index) => (
            <div
              key={item.title}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="rounded-3xl shadow-xl object-cover w-full h-[350px]"
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}