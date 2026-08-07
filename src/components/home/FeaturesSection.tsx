// "use client";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Users, Music, Dumbbell, Heart, Trophy, Activity } from "lucide-react";
// import { motion } from "framer-motion";
// import type { Variants } from "framer-motion";

// export default function FeaturesSection() {
//   const offers = [
//     { icon: Users, title: "Capoeira", desc: "Arte marcial que integra jogo, acrobacias, ritmo e resgate cultural para todas as idades." },
//     { icon: Music, title: "Musicalização", desc: "Desenvolvimento do ritmo, canto e expressão corporal através de instrumentos tradicionais." },
//     { icon: Trophy, title: "Jiu-Jitsu", desc: "Foco em defesa pessoal, disciplina mental, respeito e excelência no desenvolvimento físico." },
//     { icon: Dumbbell, title: "Musculação", desc: "Treinos estruturados para ganho de massa, emagrecimento e fortalecimento muscular geral." },
//     { icon: Activity, title: "IRON30", desc: "Circuitos dinâmicos de alta intensidade em 30 minutos. Máxima queima calórica." },
//     { icon: Heart, title: "Capo&Vida", desc: "Metodologia exclusiva dedicada à saúde, mobilidade e longevidade de mulheres e idosos." },
//   ];

//   const containerVariants: Variants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.08
//       }
//     }
//   };

//   const cardVariants: Variants = {
//     hidden: { opacity: 0, y: 25 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
//   };

//   return (
//     <section className="py-16 sm:py-24 bg-slate-50/40 relative overflow-hidden">
//       <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

//       <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
//         <motion.div 
//           initial={{ opacity: 0, y: -10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
//         >
//           <span className="text-red-600 font-extrabold text-xs uppercase tracking-widest block mb-2">Nossas Modalidades</span>
//           <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight px-2">
//             ATIVIDADES QUE TRANSFORMAM O CORPO E FORTALECEM A MENTE
//           </h2>
//         </motion.div>

//         {/* CONTÊINER INTELIGENTE COM ANIMAÇÃO EM CASCATA */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-6 lg:pb-0 px-2 lg:px-0 scrollbar-none snap-x snap-mandatory"
//         >
//           {offers.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <motion.div key={index} variants={cardVariants} className="snap-center shrink-0 flex-1">
//                 <Card 
//                   className="group border border-slate-100 bg-white shadow-xs rounded-2xl min-w-[280px] max-w-[320px] sm:max-w-none sm:min-w-0 h-full lg:hover:shadow-xl lg:hover:-translate-y-1 transition-all duration-300"
//                 >
//                   <CardContent className="p-6 sm:p-8 flex flex-col items-start text-left">
//                     <div className="w-11 h-11 bg-red-50 text-red-600 lg:group-hover:bg-red-600 lg:group-hover:text-white rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
//                       <Icon className="w-5 h-5" />
//                     </div>
//                     <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
//                       {item.title}
//                     </h3>
//                     <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
//                       {item.desc}
//                     </p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Indicador visual discreto */}
//         <div className="flex justify-center gap-1.5 mt-4 lg:hidden">
//           <div className="w-4 h-1 bg-red-600 rounded-full"></div>
//           <div className="w-1.5 h-1 bg-slate-300 rounded-full"></div>
//           <div className="w-1.5 h-1 bg-slate-300 rounded-full"></div>
//         </div>

//         <div className="text-center mt-10 sm:mt-14">
//           <Link href="/programas">
//             <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 font-bold gap-2 text-sm sm:text-base group">
//               Conhecer todos os programas 
//               <span className="transform group-hover:translate-x-1 transition-transform">→</span>
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Users, Music, Dumbbell, Heart, Trophy, Activity, Calendar, Clock, Maximize2, Download, PersonStanding } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Importe a imagem da sua grade de horários aqui
import gradeHorarios from "@/assets/images/grade.jpeg";

export default function FeaturesSection() {
  const offers = [
    { icon: Users, title: "Capoeira", desc: "Arte marcial que integra jogo, acrobacias, ritmo e resgate cultural para todas as idades." },
    { icon: Music, title: "Musicalização", desc: "Desenvolvimento do ritmo, canto e expressão corporal através de instrumentos tradicionais." },
    { icon: Trophy, title: "Jiu-Jitsu", desc: "Foco em defesa pessoal, disciplina mental, respeito e excelência no desenvolvimento físico." },
    { icon: Dumbbell, title: "Musculação", desc: "Treinos estruturados para ganho de massa, emagrecimento e fortalecimento muscular geral." },
    { icon: Activity, title: "IRON30", desc: "Circuitos dinâmicos de alta intensidade em 30 minutos. Máxima queima calórica." },
    { icon: Heart, title: "Capo&Vida", desc: "Metodologia exclusiva dedicada à saúde, mobilidade e longevidade de mulheres e idosos." },
    { icon: PersonStanding, title: "Kickboxing", desc: "Treinamento dinâmico de socos e chutes para alta queima calórica, tonificação e defesa pessoal." },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10 space-y-24">
        
        {/* PARTE 1: CARDS DAS MODALIDADES */}
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          >
            <span className="text-red-600 font-extrabold text-xs uppercase tracking-widest block mb-2">Nossas Modalidades</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight px-2">
              ATIVIDADES QUE TRANSFORMAM O CORPO E FORTALECEM A MENTE
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-6 lg:pb-0 px-2 lg:px-0 scrollbar-none snap-x snap-mandatory"
          >
            {offers.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} variants={cardVariants} className="snap-center shrink-0 flex-1">
                  <Card 
                    className="group border border-slate-100 bg-white shadow-xs rounded-2xl min-w-[280px] max-w-[320px] sm:max-w-none sm:min-w-0 h-full lg:hover:shadow-xl lg:hover:-translate-y-1 transition-all duration-300"
                  >
                    <CardContent className="p-6 sm:p-8 flex flex-col items-start text-left">
                      <div className="w-11 h-11 bg-red-50 text-red-600 lg:group-hover:bg-red-600 lg:group-hover:text-white rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="flex justify-center gap-1.5 mt-4 lg:hidden">
            <div className="w-4 h-1 bg-red-600 rounded-full"></div>
            <div className="w-1.5 h-1 bg-slate-300 rounded-full"></div>
            <div className="w-1.5 h-1 bg-slate-300 rounded-full"></div>
          </div>
        </div>

        {/* PARTE 2: GRADE DE HORÁRIOS ORGANIZADA E INTERATIVA */}
        <div className="border-t border-slate-200/60 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Coluna Texto Informativo */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 bg-red-50 border border-red-100 px-3 py-1 rounded-full text-red-700 text-xs font-bold uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  Planeje sua Semana
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Grade Completa de Horários
                </h3>
              </div>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Temos turmas distribuídas estrategicamente entre os períodos da <strong>manhã, tarde e noite</strong> para se ajustar perfeitamente à sua rotina de evolução.
              </p>

              {/* Mini cards de resumo dos turnos */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-2xs">
                  <Clock className="w-4 h-4 text-amber-500 mb-1.5" />
                  <h4 className="font-bold text-slate-900 text-xs">Manhã</h4>
                  <p className="text-[11px] text-slate-500 font-medium">A partir das 08:00</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-2xs">
                  <Clock className="w-4 h-4 text-red-500 mb-1.5" />
                  <h4 className="font-bold text-slate-900 text-xs">Tarde</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Treinos às 14:00</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-2xs">
                  <Clock className="w-4 h-4 text-indigo-500 mb-1.5" />
                  <h4 className="font-bold text-slate-900 text-xs">Noite</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Até as 21:00</p>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/programas">
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl h-11 px-6 shadow-md shadow-red-600/10 active:scale-98 transition-all gap-2 text-sm">
                    Fazer uma Aula Experimental
                  </Button>
                </Link>
              </div>
            </div>

            {/* Coluna Container da Imagem com Modal de Zoom */}
            <div className="lg:col-span-7">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-4 border-white shadow-xl hover:shadow-2xl transition-all duration-300 bg-slate-950">
                    <Image 
                      src={gradeHorarios} 
                      alt="Grade Horária CT Benaias" 
                      className="w-full h-auto object-cover group-hover:scale-101 group-hover:opacity-90 transition-all duration-500"
                      priority
                    />
                    {/* Overlay de Interatividade */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 text-slate-900 text-xs font-bold shadow-md">
                        <Maximize2 className="w-3.5 h-3.5 text-red-600" />
                        Clique para ampliar a grade
                      </div>
                    </div>
                  </div>
                </DialogTrigger>

                {/* Modal que abre em tamanho cheio */}
                <DialogContent className="max-w-4xl p-1 bg-slate-950 border-slate-800 rounded-2xl overflow-hidden">
                  <div className="relative w-full h-full max-h-[85vh] flex items-center justify-center p-2 select-none">
                    <Image 
                      src={gradeHorarios} 
                      alt="Grade Horária Completa" 
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>

          </div>
        </div>

        {/* BOTÃO DE LINK INFERIOR TRADICIONAL */}
        <div className="text-center pt-4">
          <Link href="/programas">
            <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 font-bold gap-2 text-sm sm:text-base group">
              Conhecer todos os programas 
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}