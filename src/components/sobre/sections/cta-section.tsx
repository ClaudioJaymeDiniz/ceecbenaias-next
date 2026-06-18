import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-700 via-red-800 to-red-950 text-white relative overflow-hidden">
      {/* Sutil textura interna no CTA para dar dinamismo à cor sólida */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 invert pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          <span className="uppercase tracking-widest text-red-200 text-xs font-extrabold block">
            Faça parte
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            Venha treinar com a gente.
          </h2>

          <p className="text-base sm:text-xl text-red-100/90 leading-relaxed max-w-2xl mx-auto font-normal">
            Conheça nossa estrutura, participe das aulas e descubra como o esporte pode transformar sua rotina.
          </p>

          <div className="pt-4 max-w-xs mx-auto">
            <Link
              target="_blank"
              href="https://wa.me/5512996466259?text=Olá,%20gostaria%20de%20agendar%20uma%20visita!"
              className="block w-full"
            >
              <Button className="w-full bg-white text-red-700 hover:bg-red-50 active:scale-98 px-8 h-14 text-base rounded-xl font-bold transition-all shadow-xl shadow-black/10 gap-2">
                <MessageSquare className="w-4 h-4 fill-current" />
                Agendar visita
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}