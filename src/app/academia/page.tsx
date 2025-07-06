import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Dumbbell, Users, Clock, Award } from "lucide-react"
import Logo from "@/components/ui/logo"
import Footer from "@/components/footer/footer"

const equipamentos = [
  {
    nome: "Estação de Musculação",
    descricao: "Equipamento completo para treino de força",
    imagem: "/cap-8.png?height=250&width=350",
  },
  {
    nome: "Halteres e Anilhas",
    descricao: "Diversos pesos para treinos personalizados",
    imagem: "/cap-8.png?height=250&width=350",
  },
  {
    nome: "Esteiras e Bikes",
    descricao: "Equipamentos para exercícios cardiovasculares",
    imagem: "/cap-8.png?height=250&width=350",
  },
  {
    nome: "Área de Alongamento",
    descricao: "Espaço dedicado para aquecimento e relaxamento",
    imagem: "/cap-8.png?height=250&width=350",
  },
]

export default function AcademiaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">Voltar</span>
          </Link>

          <div className="flex items-center space-x-2">
            <Logo />
            <span className="text-xl font-bold text-gray-900">CEEC Benaias</span>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <Dumbbell className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Nossa Academia</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Equipamentos modernos e ambiente acolhedor para seu treino de musculação e condicionamento físico.
          </p>
        </div>
      </section>

      {/* Visão Geral */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ambiente Completo para seu Treino</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nossa academia oferece um ambiente moderno e acolhedor, com equipamentos de qualidade para atender desde
                iniciantes até atletas avançados.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Contamos com programas personalizados de emagrecimento e hipertrofia, sempre com acompanhamento
                profissional especializado.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="font-bold text-gray-900">Acompanhamento</p>
                  <p className="text-sm text-gray-600">Profissional</p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="font-bold text-gray-900">Horários</p>
                  <p className="text-sm text-gray-600">Flexíveis</p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/cap-12.jpeg?height=400&width=500"
                alt="Academia CEEC"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipamentos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nossos Equipamentos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {equipamentos.map((equipamento, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-gray-100 hover:border-red-200 transition-colors"
              >
                <div className="relative h-48">
                  <Image
                    src={equipamento.imagem || "/placeholder.svg"}
                    alt={equipamento.nome}
                    width={350}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{equipamento.nome}</h3>
                  <p className="text-sm text-gray-600">{equipamento.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Programas Disponíveis</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-gray-100">
              <CardContent className="p-8 text-center">
                <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Programa de Emagrecimento</h3>
                <p className="text-gray-700 mb-4">
                  Treinos personalizados focados na queima de gordura e melhoria do condicionamento físico.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Avaliação física completa</li>
                  <li>• Treino cardiovascular</li>
                  <li>• Orientação nutricional básica</li>
                  <li>• Acompanhamento semanal</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="p-8 text-center">
                <Dumbbell className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Programa de Hipertrofia</h3>
                <p className="text-gray-700 mb-4">
                  Treinos específicos para ganho de massa muscular e definição corporal.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Treino de força progressivo</li>
                  <li>• Periodização personalizada</li>
                  <li>• Técnicas avançadas</li>
                  <li>• Acompanhamento individual</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para começar seu treino?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Venha conhecer nossa academia e descobrir como podemos ajudar você a alcançar seus objetivos.
          </p>
          <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors">
            Agende uma visita
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
