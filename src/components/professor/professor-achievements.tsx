import { Card, CardContent } from "@/components/ui/card";
import { professorAchievements } from "@/lib/professor";

export function ProfessorAchievements() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-red-600 font-semibold uppercase tracking-wider">
            Reconhecimento
          </span>

          <h2 className="text-4xl font-black text-gray-900 mt-4">
            Uma caminhada construída com propósito.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {professorAchievements.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="border-0 rounded-3xl shadow-md hover:shadow-xl transition-all"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-red-600" />
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}