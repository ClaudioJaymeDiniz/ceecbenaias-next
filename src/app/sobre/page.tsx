import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Target, Heart, Users } from "lucide-react"

import sede from '@/assets/images/sede.jpg'
import Footer from "@/components/footer/footer"
import Logo from "@/components/ui/logo"

export default function SobrePage() {
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Nossa História</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Conheça a trajetória do CEEC Benaias e nossa missão de transformar vidas através do esporte, educação e
            cultura.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="text-justify">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Como tudo começou</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Fundado em 2022, o CEEC Benaias nasceu do sonho de criar um espaço onde o esporte, a educação e a
                  cultura se encontram para promover inclusão e desenvolvimento humano.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Nossa jornada começou com a visão de que cada pessoa, independentemente de suas limitações ou
                  desafios, merece ter acesso a oportunidades de crescimento e bem-estar.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Hoje, somos referência no Vale do Paraíba em programas inclusivos que transformam vidas através do
                  movimento e do cuidado humanizado.
                </p>
              </div>
              <div>
                <Image
                  src={sede}
                  alt="Fundação do CEEC"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Valores */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-2 border-gray-100">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Missão</h3>
                  <p className="text-gray-600">
                    Promover inclusão e desenvolvimento através do esporte, educação e cultura, transformando vidas com
                    movimento e cuidado.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-gray-100">
                <CardContent className="p-6">
                  <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Valores</h3>
                  <p className="text-gray-600">
                    Inclusão, respeito, dedicação e compromisso com o desenvolvimento integral de cada pessoa que passa
                    por aqui.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-gray-100">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Visão</h3>
                  <p className="text-gray-600">
                    Ser referência em programas inclusivos que promovem autonomia, saúde e bem-estar para toda a
                    comunidade.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Faça parte da nossa história</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Venha conhecer nossos programas e descobrir como podemos ajudar você ou sua família a alcançar uma vida mais
            plena e saudável.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white">Agende uma visita</Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
