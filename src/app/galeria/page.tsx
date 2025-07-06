import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Camera } from "lucide-react"
import Logo from "@/components/ui/logo"
import Footer from "@/components/footer/footer"

const fotos = [
  {
    id: 1,
    titulo: "Roda de Capoeira",
    categoria: "Capoeira",
    imagem: "/img23.jpg?height=300&width=400",
  },
  {
    id: 2,
    titulo: "Aula de Musicalização",
    categoria: "Música",
    imagem: "/img23.jpg?height=300&width=400",
  },
  {
    id: 3,
    titulo: "Treino na Academia",
    categoria: "Musculação",
    imagem: "/img23.jpg?height=300&width=400",
  },
  {
    id: 4,
    titulo: "Programa Capo&Vida",
    categoria: "Inclusão",
    imagem: "/img23.jpg?height=300&width=400",
  },
  {
    id: 5,
    titulo: "Apresentação Cultural",
    categoria: "Eventos",
    imagem: "/img23.jpg?height=300&width=400",
  },
  {
    id: 6,
    titulo: "Atendimento Especializado",
    categoria: "Inclusão",
    imagem: "/img23.jpg?height=300&width=400",
  },
  {
    id: 7,
    titulo: "Instrumentos Tradicionais",
    categoria: "Música",
    imagem: "/img23.jpg?height=300&width=400",
  },
  {
    id: 8,
    titulo: "Evento Comunitário",
    categoria: "Eventos",
    imagem: "/img23.jpg?height=300&width=400",
  },
  {
    id: 9,
    titulo: "Aula de Maculelê",
    categoria: "Capoeira",
    imagem: "/img23.jpg?height=300&width=400",
  },
]

export default function GaleriaPage() {
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
          <Camera className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Galeria de Fotos</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Momentos especiais e atividades do CEEC Benaias capturados em imagens.
          </p>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {fotos.map((foto) => (
              <div
                key={foto.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                <Image
                  src={foto.imagem || "/placeholder.svg"}
                  alt={foto.titulo}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-1">{foto.titulo}</h3>
                    <span className="text-sm bg-red-600 px-2 py-1 rounded">{foto.categoria}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nossas Atividades</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">C</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Capoeira</h3>
              <p className="text-sm text-gray-600">Arte marcial brasileira</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">M</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Música</h3>
              <p className="text-sm text-gray-600">Musicalização e cultura</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">I</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Inclusão</h3>
              <p className="text-sm text-gray-600">Programas especializados</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">E</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Eventos</h3>
              <p className="text-sm text-gray-600">Apresentações e encontros</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Faça parte da nossa história</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Venha participar das nossas atividades e criar momentos especiais conosco.
          </p>
          <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors">
            Participe das nossas atividades
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
