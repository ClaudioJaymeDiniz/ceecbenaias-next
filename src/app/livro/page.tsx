/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { Button } from "@/components/ui/button";

import Footer from "@/components/footer/footer";
import capalivro from "@/assets/images/capalivro.png";
import Header from "@/components/header/header";

export default function LivroPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

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
              <a
                target="_blank"
                href="https://wa.me/5512996466259?text=Ol%C3%A1%2C%20gostaria%20de%20adiquirir%20uma%20cópia%20do%20livro!"
              >
                <Button className="bg-white text-red-600 hover:bg-gray-100">
                  Adiquira o seu livro
                </Button>
              </a>
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
                Rafael Reis conheceu a dor cedo: rejeitado pela mãe, entregue à
                adoção, mergulhou nas drogas e no crime ainda jovem. Quando tudo
                parecia perdido, o amor de Cristo o alcançou.
              </p>

              <p>Esse rencontro mudou tudo.</p>

              <p>
                Hoje, através do Ministério Resgate e do esporte, Rafael dedica
                sua vida a cuidar de quem um dia também foi esquecido - e já
                impactou milhares de vidas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Filosofia de Trabalho
            </h2> */}

            <blockquote className="text-2xl text-gray-700 italic mb-8 leading-relaxed">
              "Que este livro seja mais do que apenas uma leitura, mas sim uma
              experiência que toque o seu coração e o leve a descobrir o
              extraordinário poder da fé e do amor de Deus." - Rafael Reis.
            </blockquote>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
