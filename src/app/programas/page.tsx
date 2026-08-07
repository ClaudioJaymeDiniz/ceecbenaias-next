"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Music,
  Dumbbell,
  Heart,
  Clock,
  Calendar,
  Sparkles,
  MessageSquare,
  PersonStanding,
} from "lucide-react";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import imgcapoeira from "@/assets/images/capoeira/cap-12.jpeg";
import { motion } from "framer-motion";

const programas = [
  {
    id: 1,
    nome: "Capoeira para todas as idades",
    descricao:
      "Arte marcial brasileira que desenvolve corpo, mente e cultura através de movimentos, música e tradição. Turmas divididas para os públicos infantil, juvenil e adulto.",
    icone: Users,
    detalhes: {
      idade: "A partir de 3 anos",
      duracao: "1h por aula",
      frequencia: "Planos 1, 2 e 3x por semana",
      beneficios: [
        "Coordenação motora",
        "Disciplina e respeito",
        "Cultura e musicalidade",
        "Condicionamento físico",
      ],
    },
    imagem: imgcapoeira,
  },
  {
    id: 2,
    nome: "Jiu-Jitsu",
    descricao:
      "Treinamento técnico e físico de alto nível com foco em posições, defesa pessoal e estratégia competitiva ou de saúde. Indicado para todas as idades.",
    icone: Users,
    detalhes: {
      idade: "A partir de 7 anos",
      duracao: "1h por aula",
      frequencia: "2x por semana",
      beneficios: [
        "Defesa pessoal",
        "Ganho de força",
        "Foco e disciplina",
        "Condicionamento físico",
      ],
    },
    imagem: "/jiu.jpg",
  },
  {
    id: 3,
    nome: "IRON30",
    descricao:
      "Treinos rápidos, intensos e eficientes! Criado para quem busca resultados máximos sem perder tempo. Em apenas 30 minutos você eleva seu condicionamento, força e queima calorias de forma inteligente através de movimentos funcionais e alta energia.",
    icone: Dumbbell,
    detalhes: {
      idade: "A partir de 10 anos",
      duracao: "30min por aula",
      frequencia: "3x por semana",
      beneficios: ["Força explosiva", "Agilidade e reflexos", "Alta queima calórica", "Saúde cardiovascular"],
    },
    imagem: "/funcional.jpeg",
  },
  {
    id: 4,
    nome: "Capo&Vida",
    descricao:
      "Um programa exclusivo voltado para mulheres e idosos focado em longevidade, socialização e bem-estar, mesclando circuitos funcionais adaptados com a leveza da movimentação cultural.",
    icone: Heart,
    detalhes: {
      idade: "Sem limite de idade",
      duracao: "1h por aula",
      frequencia: "4x por semana",
      beneficios: [
        "Flexibilidade",
        "Equilíbrio postural",
        "Socialização ativa",
        "Qualidade de vida",
      ],
    },
    imagem: "/capoevida.jpeg",
  },
  {
    id: 5,
    nome: "Treinos de Musculação",
    descricao:
      "Planejamento personalizado focado nos seus objetivos individuais, sejam eles emagrecimento, hipertrofia ou fortalecimento muscular, contando com acompanhamento profissional qualificado.",
    icone: Dumbbell,
    detalhes: {
      idade: "A partir de 12 anos",
      duracao: "1h por treino",
      frequencia: "3 a 5x por semana",
      beneficios: [
        "Hipertrofia e tônus",
        "Redução de gordura",
        "Densidade óssea",
        "Saúde e vigor geral",
      ],
    },
    imagem: "/treinos.jpeg",
  },
  {
    id: 7,
    nome: "Musicalização e Cultura",
    descricao:
      "Desenvolvimento de aptidões musicais e ritmo através do ensino prático de instrumentos tradicionais brasileiros, canto e história da nossa cultura.",
    icone: Music,
    detalhes: {
      idade: "A partir de 6 anos",
      duracao: "1h por aula",
      frequencia: "1x por semana",
      beneficios: [
        "Coordenação rítmica",
        "Criatividade artística",
        "Expressão corporal",
        "Bagagem cultural",
      ],
    },
    imagem: "/musica.jpeg",
  },
 {
    id: 8,
    nome: "Kickboxing",
    descricao:
      "Treinamento dinâmico que combina técnicas de socos e chutes, unindo alto gasto calórico, tonificação muscular e defesa pessoal em aulas intensas e motivantes. Turmas mista e exclusiva para mulheres",
    icone: PersonStanding,
    detalhes: {
      idade: "A partir de 7 anos",
      duracao: "1h por aula",
      frequencia: "2 a 3x por semana",
      
      beneficios: [
        "Alta queima calórica",
        "Resistência cardiorrespiratória",
        "Defesa pessoal",
        "Alívio do estresse",
      ],
    },
    imagem: "/kickboxing.jpeg",
  },
];

export default function ProgramasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO SECTION PREMIUM */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-red-950 text-white py-20 lg:py-28 border-b border-red-950">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 invert pointer-events-none" />
        
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none" 
        />

        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-red-200 text-xs font-semibold tracking-wide uppercase shadow-inner backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            Modalidades e Atividades
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight"
          >
            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Programas</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-red-100/90 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Conheça todas as atividades estruturadas que oferecemos para
            transformar vidas através do movimento, da cultura e da inclusão.
          </motion.p>
        </div>
      </section>

      {/* LISTAGEM DE PROGRAMAS */}
      <section className="py-24 bg-slate-50/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-16">
            {programas.map((programa, index) => {
              const IconeComponente = programa.icone;
              
              return (
                <motion.div
                  key={programa.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Card className="overflow-hidden border border-slate-100 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 bg-white group">
                    <div className="grid lg:grid-cols-12 gap-0">
                      
                      {/* CONTAINER DA IMAGEM */}
                      <div className={`relative min-h-[260px] sm:min-h-[340px] lg:h-full lg:col-span-5 overflow-hidden ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}>
                        <Image
                          src={programa.imagem}
                          alt={programa.nome}
                          fill
                          className="object-cover group-hover:scale-102 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>

                      {/* CONTEÚDO DO CARD */}
                      <CardContent className="p-6 sm:p-10 lg:p-12 lg:col-span-7 flex flex-col justify-center space-y-6">
                        
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shrink-0 shadow-xs">
                            <IconeComponente className="w-6 h-6" />
                          </div>
                          <div>
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                              {programa.nome}
                            </h2>
                          </div>
                        </div>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                          {programa.descricao}
                        </p>

                        {/* DETALHES RÁPIDOS */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          <div className="flex items-center space-x-2.5">
                            <Users className="w-4 h-4 text-red-500 shrink-0" />
                            <div className="text-xs">
                              <p className="text-slate-400 font-medium leading-none">Idade</p>
                              <p className="text-slate-700 font-bold mt-0.5">{programa.detalhes.idade}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2.5">
                            <Clock className="w-4 h-4 text-red-500 shrink-0" />
                            <div className="text-xs">
                              <p className="text-slate-400 font-medium leading-none">Duração</p>
                              <p className="text-slate-700 font-bold mt-0.5">{programa.detalhes.duracao}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2.5">
                            <Calendar className="w-4 h-4 text-red-500 shrink-0" />
                            <div className="text-xs">
                              <p className="text-slate-400 font-medium leading-none">Frequência</p>
                              <p className="text-slate-700 font-bold mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis">{programa.detalhes.frequencia}</p>
                            </div>
                          </div>
                        </div>

                        {/* BENEFÍCIOS */}
                        <div className="space-y-2.5">
                          <h3 className="font-extrabold text-slate-900 text-sm tracking-wide uppercase">
                            Benefícios Principais:
                          </h3>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {programa.detalhes.beneficios.map((beneficio, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-red-600 rounded-full shrink-0" />
                                <span className="text-xs sm:text-sm text-slate-600 font-medium">
                                  {beneficio}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION PREMIUM */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-red-950 text-white py-24 border-t border-red-950">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 invert pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <span className="uppercase tracking-widest text-red-200 text-xs font-extrabold block">
              Faça uma aula experimental
            </span>

            <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
              Interessado em algum programa?
            </h2>

            <p className="text-base sm:text-xl text-red-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
              Entre em contato conosco para verificar a grade de horários completa, valores e agendar sua visita ao CEEC Benaias.
            </p>

            <div className="pt-4 max-w-xs mx-auto">
              <a
                target="_blank"
                href="https://wa.me/5512996466259?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20os%20programas%20do%20CEEC%20Benaias!"
                className="block w-full"
              >
                <Button className="w-full bg-white text-red-800 hover:bg-red-50 active:scale-[0.98] px-8 h-14 text-base rounded-xl font-bold transition-all shadow-xl shadow-black/10 gap-2 cursor-pointer">
                  <MessageSquare className="w-4 h-4 fill-current" />
                  Fale conosco
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}