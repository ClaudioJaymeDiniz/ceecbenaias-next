import { Button } from "@/components/ui/button";
import { contactWhatsapp } from "@/lib/professor";

export function ProfessorCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-red-700 to-red-950 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Conheça o trabalho do Professor Rafael
          </h2>

          <p className="text-xl text-red-100 mb-10">
            Entre em contato para saber mais sobre aulas, projetos, metodologias
            e também sobre o livro O Resgatado.
          </p>

          <a target="_blank" href={contactWhatsapp}>
            <Button className="h-14 px-10 rounded-full bg-white text-red-700 hover:bg-gray-100 font-bold">
              Entrar em contato
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}