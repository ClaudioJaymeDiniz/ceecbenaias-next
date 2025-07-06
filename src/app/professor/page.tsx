/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Award, BookOpen, Users, Heart } from "lucide-react";

import perfil from '@/assets/images/img9.jpg'
import Footer from "@/components/footer/footer";
import Logo from "@/components/ui/logo";

export default function ProfessorPage() {
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
            <span className="text-xl font-bold text-gray-900">
              CEEC Benaias
            </span>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Professor Rafael
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Educador físico, escritor e idealizador de projetos que unem
                inclusão, esporte e desenvolvimento humano.
              </p>
              <Button className="bg-white text-red-600 hover:bg-gray-100">
                Entre em contato
              </Button>
            </div>
            <div className="relative">
              <Image
                src={perfil}
                alt="Professor Rafael"
                width={400}
                height={500}
                className="rounded-lg shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biografia */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Trajetória Profissional
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 text-justify">
              <p>
                Rafael é educador físico formado com especialização em atividade
                física adaptada e desenvolvimento humano. Sua paixão pela
                inclusão e pelo esporte o levou a criar metodologias inovadoras
                que transformam vidas através do movimento.
              </p>

              <p>
                Como escritor, Rafael é autor de diversos artigos sobre inclusão
                social através do esporte e criador do método <span className="font-bold">Capo&Vida</span>,
                programa especialmente desenvolvido para mulheres e idosos que
                busca promover qualidade de vida através da capoeira adaptada.
              </p>

              <p>
                Idealizador do curso <span className="font-bold">Transformando Vidas</span> , Rafael capacita
                outros profissionais da área para trabalhar com metodologias
                inclusivas, multiplicando o impacto positivo em comunidades por
                todo o Vale do Paraíba.
              </p>

              <p>
                Sua abordagem humanizada e científica faz dele uma referência na
                região, sendo constantemente convidado para palestras, workshops
                e consultorias em instituições que buscam implementar programas
                inclusivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conquistas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Principais Conquistas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-2 border-gray-100">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">
                  Criador do Método
                </h3>
                <p className="text-sm text-gray-600">Capo&Vida</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-100">
              <CardContent className="p-6">
                <BookOpen className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Autor do Curso</h3>
                <p className="text-sm text-gray-600">Transformando Vidas</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-100">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">
                  Referência Regional
                </h3>
                <p className="text-sm text-gray-600">Vale do Paraíba</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-100">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">
                  Especialista em
                </h3>
                <p className="text-sm text-gray-600">Inclusão Social</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Filosofia de Trabalho
            </h2>

            <blockquote className="text-2xl text-gray-700 italic mb-8 leading-relaxed">
              "Acredito que cada pessoa tem potencial único para crescer e se
              desenvolver. Meu papel é criar pontes entre limitações e
              possibilidades, transformando desafios em oportunidades de
              crescimento."
            </blockquote>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Individualidade
                </h3>
                <p className="text-gray-600">
                  Cada pessoa é única e merece atenção personalizada
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Inclusão</h3>
                <p className="text-gray-600">
                  Todos têm direito a oportunidades de desenvolvimento
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Transformação</h3>
                <p className="text-gray-600">
                  O movimento é capaz de transformar vidas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Quer conhecer mais sobre o trabalho do Professor Rafael?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato para saber mais sobre os programas, metodologias e
            como participar das atividades do CEEC Benaias.
          </p>
          <Button className="bg-white text-red-600 hover:bg-gray-100">
            Fale com o Professor Rafael
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
