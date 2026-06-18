import { Award, Clock, Dumbbell, Users } from "lucide-react";

export function DiferentialsSection() {
  const diferencials = [
    { title: "Acompanhamento profissional", icon: Users },
    { title: "Horários flexíveis", icon: Clock },
    { title: "Treinos personalizados", icon: Dumbbell },
    { title: "Profissionais certificados", icon: Award },
  ];

  return (
    <section className="py-20 sm:py-24 bg-neutral-950 text-white relative overflow-hidden border-t border-neutral-900">
      <div className="absolute inset-0 bg-dot-pattern opacity-10 invert mask-radial pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-red-500 font-extrabold text-xs uppercase tracking-widest block mb-2">
            Diferenciais
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Estrutura, disciplina e acompanhamento real.
          </h2>
        </div>

        {/* Swipe nativo no mobile para os diferenciais corporativos */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 pb-4 md:pb-0 scrollbar-none snap-x snap-mandatory px-1 md:px-0">
          {diferencials.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="min-w-[240px] md:min-w-0 snap-center shrink-0 flex-1 bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6 border border-red-500/10">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base sm:text-lg font-bold leading-snug text-neutral-100">
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