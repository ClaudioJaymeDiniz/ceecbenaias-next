import { Quote } from "lucide-react";

export function ProfessorQuote() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* O ícone já faz o papel das aspas de forma elegante */}
          <Quote className="w-10 h-10 text-red-600/20 mx-auto mb-6" />

          <blockquote className="text-2xl lg:text-3xl text-gray-800 italic leading-relaxed">
            Que este livro seja mais do que apenas uma leitura, mas sim uma
            experiência que toque o seu coração e o leve a descobrir o
            extraordinário poder da fé e do amor de Deus.
          </blockquote>

          <p className="mt-8 font-bold text-gray-900">Rafael Reis</p>
        </div>
      </div>
    </section>
  );
}