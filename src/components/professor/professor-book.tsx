import Image from "next/image";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

import capalivro from "@/assets/images/livro/rafaresgatado.jpeg";
import { bookWhatsapp } from "@/lib/professor";

export function ProfessorBook() {
  return (
    <section className="py-24 bg-neutral-950 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <span className="text-red-400 font-semibold uppercase tracking-wider">
              Livro
            </span>

            <h2 className="text-5xl lg:text-6xl font-black mt-4 mb-6">
              O Resgatado
            </h2>

            <p className="text-xl text-red-200 mb-8">
              Das drogas ao esporte — Ministério Resgate
            </p>

            <div className="space-y-5 text-neutral-300 text-lg leading-relaxed mb-10">
              <p>
                Rafael Reis conheceu a dor cedo: rejeitado pela mãe, entregue à
                adoção, mergulhou nas drogas e no crime ainda jovem.
              </p>

              <p>
                Quando tudo parecia perdido, o amor de Cristo o alcançou. Esse
                reencontro mudou sua história.
              </p>

              <p>
                Hoje, através do esporte e do Ministério Resgate, Rafael dedica
                sua vida a cuidar de quem também precisa ser lembrado, acolhido
                e transformado.
              </p>
            </div>

            <a target="_blank" href={bookWhatsapp}>
              <Button className="h-14 px-8 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold">
                Adquirir o livro
                <BookOpen className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -inset-6 rounded-[2rem] bg-red-600/30 blur-3xl" />

              <Image
                src={capalivro}
                alt="Capa do livro O Resgatado"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}