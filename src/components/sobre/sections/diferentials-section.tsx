// components/sections/diferentials-section.tsx

import { Award, Clock, Dumbbell, Users } from "lucide-react";

const diferencials = [
  {
    title: "Acompanhamento profissional",
    icon: Users,
  },
  {
    title: "Horários flexíveis",
    icon: Clock,
  },
  {
    title: "Treinos personalizados",
    icon: Dumbbell,
  },
  {
    title: "Profissionais certificados",
    icon: Award,
  },
];

export function DiferentialsSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-semibold uppercase tracking-wider">
            Diferenciais
          </span>

          <h2 className="text-4xl lg:text-5xl font-black mt-4">
            Estrutura, disciplina e acompanhamento real.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferencials.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all"
              >
                <Icon className="w-10 h-10 text-red-500 mb-6" />

                <h3 className="text-xl font-bold leading-snug">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}