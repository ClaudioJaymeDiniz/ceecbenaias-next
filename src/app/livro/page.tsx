/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";


import Footer from "@/components/footer/footer";
import Logo from "@/components/ui/logo";
import capalivro from "@/assets/images/capalivro.png"

export default function LivroPage() {
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
                O RESGATADO
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Das drogas ao Esporte - Ministério Resgate
              </p>
              <Button className="bg-white text-red-600 hover:bg-gray-100">
                Adiquira o seu livro
              </Button>
            </div>
            <div className="relative">
              <Image
                src={capalivro}
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
              Ele foi rejeitado, caiu... mas foi resgatado pelo amor
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 text-justify">
              <p>
               Rafael Reis conheceu a dor cedo: rejeitado pela mãe, entregue à adoção, mergulhou nas drogas
               e no crime ainda jovem. Quando tudo parecia perdido, o amor de Cristo o alcançou.
              </p>

              <p>
                Esse rencontro mudou tudo.
              </p>

              <p>
                Hoje, através do Ministério Resgate e do esporte, Rafael dedica sua vida a cuidar de
                quem um dia também foi esquecido - e já impactou milhares de vidas.
              </p>

             
            </div>
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
          </div>
        </div>
      </section>

     
      <Footer />
    </div>
  );
}
