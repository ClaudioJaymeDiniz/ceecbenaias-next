/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Music,
  Dumbbell,
  Brain,
  Heart,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import perfil from '@/assets/images/img9.jpg'
import hero from '@/assets/images/img2.jpg'
import Footer from "@/components/footer/footer";
import Logo from "@/components/ui/logo";


export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    
    <div className="min-h-screen bg-white">
      {/* Header */}
      
      <header className="bg-white shadow-sm border-b border-gray-100">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Logo />
            <span className="text-xl font-bold text-gray-900">
              CEEC Benaias
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/professor"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Professor
            </Link>
            <Link
              href="/programas"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Programas
            </Link>
            <Link
              href="/lutas"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Lutas
            </Link>
            
            <Link
              href="/academia"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Academia
            </Link>
            <Link
              href="/livro"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Livro
            </Link>
            <Link
              href="/loja"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Loja
            </Link>
            <Link
              href="/galeria"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Galeria
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="/"
                className="block text-gray-700 hover:text-red-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/sobre"
                className="block text-gray-700 hover:text-red-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/professor"
                className="block text-gray-700 hover:text-red-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Professor
              </Link>
              <Link
                href="/programas"
                className="block text-gray-700 hover:text-red-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Programas
              </Link>
              <Link
                href="/lutas"
                className="block text-gray-700 hover:text-red-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Lutas
              </Link>
              <Link
                href="/Academia"
                className="block text-gray-700 hover:text-red-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Academia
              </Link>
              <Link
                href="/livro"
                className="block text-gray-700 hover:text-red-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Livro
              </Link>
              
              <Link
                href="/loja"
                className="block text-gray-700 hover:text-red-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Loja
              </Link>
              <Link
                href="/galeria"
                className="block text-gray-700 hover:text-red-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Galeria
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-950 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Movimento que <span className="text-red-300">transforma</span>.
                <br />
                Inclusão que <span className="text-red-300">acolhe</span>.
              </h1>
              <p className="text-xl text-gray-200 max-w-lg">
                Promovemos desenvolvimento através do esporte, educação e
                cultura. Cada movimento é um passo para uma vida com mais
                autonomia e bem-estar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 px-0 md:px-8"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  Assista e descubra como o CEEC transforma vidas
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                >
                  Agende uma visita
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={hero}
                alt="Alunos praticando capoeira"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Sobre Nós
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Fundado em 2022, o CEEC Benaias promove inclusão e desenvolvimento
              por meio do esporte, da educação e da cultura. Aqui, cada
              movimento é um passo para uma vida com mais autonomia, saúde e
              bem-estar.
            </p>
            <Link href="/sobre">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Saiba mais sobre nossa história
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* O que oferecemos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            O que oferecemos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-100 hover:border-red-200 transition-colors">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Capoeira para todas as idades
                </h3>
                <p className="text-gray-600">
                  Arte marcial brasileira que desenvolve corpo, mente e cultura
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-red-200 transition-colors">
              <CardContent className="p-6 text-center">
                <Music className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Aulas de musicalização e cultura
                </h3>
                <p className="text-gray-600">
                  Desenvolvimento musical e cultural através da tradição
                  brasileira
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-red-200 transition-colors">
              <CardContent className="p-6 text-center">
                <Dumbbell className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Musculação
                </h3>
                <p className="text-gray-600">
                  Programas de emagrecimento e hipertrofia personalizados
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-red-200 transition-colors">
              <CardContent className="p-6 text-center">
                <Brain className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Atendimentos especializados
                </h3>
                <p className="text-gray-600">
                  Suporte para autismo e síndromes com metodologia inclusiva
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-red-200 transition-colors lg:col-span-2">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Capo&Vida
                </h3>
                <p className="text-gray-600">
                  Programa especial para mulheres e idosos focado em qualidade
                  de vida
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/programas">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Ver todos os programas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Destaque Professor Rafael */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={perfil}
                    alt="Professor Rafael"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Professor Rafael
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Rafael é educador físico, escritor e idealizador de projetos
                    que unem inclusão, esporte e desenvolvimento humano. Criador
                    do método Capo&Vida e do curso "Transformando Vidas", é
                    referência no Vale do Paraíba.
                  </p>
                  <Link href="/professor">
                    <Button className="bg-red-600 hover:bg-red-700 text-white w-fit">
                      Conheça o professor Rafael
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Depoimentos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-red-600">
              <CardContent className="p-6">
                <p className="text-gray-700 italic mb-4">
                  "O CEEC mudou a vida do meu filho. Hoje ele tem mais autonomia
                  e confiança."
                </p>
                <p className="text-sm text-gray-500">— Mãe de aluno</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-600">
              <CardContent className="p-6">
                <p className="text-gray-700 italic mb-4">
                  "As aulas de capoeira me trouxeram não só saúde física, mas
                  também paz mental."
                </p>
                <p className="text-sm text-gray-500">— Aluna do Capo&Vida</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-600">
              <CardContent className="p-6">
                <p className="text-gray-700 italic mb-4">
                  "Ambiente acolhedor e profissionais dedicados. Recomendo para
                  toda família."
                </p>
                <p className="text-sm text-gray-500">— Pai de aluno</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Pronto para transformar sua vida com movimento e cuidado?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100"
            >
              Agende uma aula experimental
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
            >
              Fale com a gente no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Rodapé */}
     <Footer />

      {/* Modal do Vídeo */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
            {/* Botão de Fechar */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-colors"
              aria-label="Fechar vídeo"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Container do Vídeo */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/bhOWEX44krg?si=vs8GrfTP9za7FJJE&autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
