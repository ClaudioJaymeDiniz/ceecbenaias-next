// import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  // ArrowLeft,
  Users,
  Music,
  Dumbbell,
  Brain,
  Heart,
  Clock,
  MapPin,
} from "lucide-react";
// import Logo from "@/components/ui/logo";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const programas = [
  {
    id: 1,
    nome: "Capoeira para todas as idades",
    descricao:
      "Arte marcial brasileira que desenvolve corpo, mente e cultura através de movimentos, música e tradição. Infatil, juvenil e adulto.",
    icone: Users,
    detalhes: {
      idade: "A partir de 3 anos",
      duracao: "1h por aula",
      frequencia: "Planos 1,2 e 3x por semana",
      beneficios: [
        "Coordenação motora",
        "Disciplina",
        "Cultura brasileira",
        "Condicionamento físico",
      ],
    },
    imagem: "/cap-12.jpeg?height=300&width=400",
  },
  {
    id: 2,
    nome: "Jiu-Jitsu",
    descricao:
      "Arte marcial focada em técnicas de imobilização e defesa pessoal, promovendo disciplina, força e autocontrole. TEMOS TURMAS ESPECIAIS PARA COMPETIÇÃO.",
    icone: Users,
    detalhes: {
      idade: "A partir de 3 anos",
      duracao: "1h por aula",
      frequencia: "2x por semana",
      beneficios: [
        "Autodefesa",
        "Resistência física",
        "Disciplina",
        "Concentração",
      ],
    },
    imagem: "/jiulogo.png?height=300&width=400",
  },
  {
    id: 3,
    nome: "Boxe",
    descricao:
      "Treinamento técnico e físico com foco em golpes, defesa e estratégia. Indicado para todas as idades.",
    icone: Users,
    detalhes: {
      idade: "A partir de 7 anos",
      duracao: "1h por aula",
      frequencia: "Segunda à Sábado",
      beneficios: ["Força", "Reflexos", "Disciplina", "Saúde cardiovascular"],
    },
    imagem: "/boxe.jpeg?height=300&width=400",
  },
  {
    id: 4,
    nome: "Kickboxing",
    descricao:
      "Modalidade que combina técnicas de luta e condicionamento físico com foco em agilidade, força e resistência.",
    icone: Users,
    detalhes: {
      idade: "A partir de 7 anos",
      duracao: "1h por aula",
      frequencia: "Segunda à Sábado",
      beneficios: [
        "Condicionamento físico",
        "Coordenação motora",
        "Agilidade",
        "Alívio do estresse",
      ],
    },
    imagem: "/kick.jpeg?height=300&width=400",
  },
  {
    id: 5,
    nome: "Treinos personalizados de Musculação",
    descricao:
      "Programas personalizados de emagrecimento e hipertrofia com acompanhamento profissional.",
    icone: Dumbbell,
    detalhes: {
      idade: "A partir de 12 anos",
      duracao: "1h por treino",
      frequencia: "3-5x por semana",
      beneficios: [
        "Força muscular",
        "Emagrecimento",
        "Hipertrofia",
        "Saúde geral",
      ],
    },
    imagem: "/fun4.jpeg",
  },
  {
    id: 6,
    nome: "Libras",
    descricao:
      "Agora temos curso de LIBRAS e aulas de Capoeira para Surdos.Um espaço de inclusão, cultura e movimento para todos!",
    icone: Brain,
    detalhes: {
      idade: "Todas as idades",
      duracao: "45min por sessão",
      frequencia: "2-3x por semana",
      beneficios: [
        "Desenvolvimento motor",
        "Socialização",
        "Autonomia",
        "Bem-estar",
      ],
    },
    imagem: "/libras.jpg?height=300&width=400",
  },
  {
    id: 7,
    nome: "Musicalização e Cultura",
    descricao:
      "Desenvolvimento musical através de instrumentos tradicionais brasileiros e canto.",
    icone: Music,
    detalhes: {
      idade: "A partir de 6 anos",
      duracao: "1h por aula",
      frequencia: "1x por semana",
      beneficios: [
        "Coordenação",
        "Criatividade",
        "Expressão",
        "Cultura musical",
      ],
    },
    imagem: "/music.jpeg?height=300&width=400",
  },
  
  
  {
    id: 8,
    nome: "Capo&Vida",
    descricao:
      "Programa especial para mulheres e idosos focado em qualidade de vida e bem-estar. FUNCIONAL COM CIRCUITO",
    icone: Heart,
    detalhes: {
      idade: "Sem limite de idade",
      duracao: "1h por aula",
      frequencia: "4x por semana",
      beneficios: [
        "Flexibilidade",
        "Equilíbrio",
        "Socialização",
        "Qualidade de vida",
      ],
    },
    imagem: "/capoevida-logo.png?height=300&width=400",
  },
  
  
  
];

export default function ProgramasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      <Header />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Nossos Programas
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Conheça todos os programas e atividades que oferecemos para
            transformar vidas através do movimento, cultura e inclusão.
          </p>
        </div>
      </section>

      {/* Programas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {programas.map((programa, index) => {
              const IconeComponente = programa.icone;
              return (
                <Card
                  key={programa.id}
                  className="overflow-hidden border-2 border-gray-100"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-0 ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    <div
                      className={`relative h-64 lg:h-full ${
                        index % 2 === 1 ? "lg:col-start-2" : ""
                      }`}
                    >
                      <Image
                        src={programa.imagem || "/placeholder.svg"}
                        alt={programa.nome}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent
                      className={`p-8 flex flex-col justify-center ${
                        index % 2 === 1 ? "lg:col-start-1" : ""
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <IconeComponente className="w-8 h-8 text-red-600" />
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                          {programa.nome}
                        </h2>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {programa.descricao}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-red-600" />
                          <span className="text-sm text-gray-600">
                            {programa.detalhes.idade}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-red-600" />
                          <span className="text-sm text-gray-600">
                            {programa.detalhes.duracao}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-red-600" />
                          <span className="text-sm text-gray-600">
                            {programa.detalhes.frequencia}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900 mb-3">
                          Benefícios:
                        </h3>
                        <ul className="grid grid-cols-2 gap-2">
                          {programa.detalhes.beneficios.map(
                            (beneficio, idx) => (
                              <li
                                key={idx}
                                className="flex items-center space-x-2"
                              >
                                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                <span className="text-sm text-gray-700">
                                  {beneficio}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Interessado em algum programa?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para mais informações sobre horários,
            valores e como participar.
          </p>
          <a
            target="_blank"
            href="https://wa.me/5512996466259?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20os%20programas%20do%20CEEC%20Benaias!"
          >
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Fale conosco
            </Button>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
