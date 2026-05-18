// components/sections/values-section.tsx

import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users } from "lucide-react";

const values = [
  {
    title: "Missão",
    icon: Target,
    description:
      "Transformar vidas através do esporte, da cultura e da educação.",
  },
  {
    title: "Valores",
    icon: Heart,
    description:
      "Respeito, disciplina, inclusão e compromisso com cada aluno.",
  },
  {
    title: "Visão",
    icon: Users,
    description:
      "Ser referência em desenvolvimento humano através das artes marciais.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-semibold uppercase tracking-wider">
            Nossa essência
          </span>

          <h2 className="text-4xl font-black text-gray-900 mt-4">
            Valores que levamos para dentro e fora do tatame.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="border-0 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-10 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-red-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}