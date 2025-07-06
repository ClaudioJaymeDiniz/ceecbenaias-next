import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Footer from "@/components/footer/footer"
import Logo from "@/components/ui/logo"

const lutas = [
  {
    id: 1,
    nome: "Capoeira Angola",
    descricao: "Estilo tradicional da capoeira, mais próximo ao chão, com movimentos lentos e ritualizados.",
    imagem: "/cap-4.jpeg?height=300&width=400",
    caracteristicas: ["Movimentos lentos", "Jogo próximo ao chão", "Tradição ancestral"],
  },
  {
    id: 2,
    nome: "Capoeira Regional",
    descricao: "Estilo criado por Mestre Bimba, com movimentos mais rápidos e acrobáticos.",
    imagem: "/cap-4.jpeg?height=300&width=400",
    caracteristicas: ["Movimentos rápidos", "Acrobacias", "Sequências de ensino"],
  },
  {
    id: 3,
    nome: "Capoeira Contemporânea",
    descricao: "Fusão dos estilos Angola e Regional, adaptada para os tempos modernos.",
    imagem: "/cap-4.jpeg?height=300&width=400",
    caracteristicas: ["Versatilidade", "Adaptação moderna", "Inclusão de todos"],
  },
  {
    id: 4,
    nome: "Maculelê",
    descricao: "Dança folclórica brasileira que simula uma luta com bastões.",
    imagem: "/cap-4.jpeg?height=300&width=400",
    caracteristicas: ["Uso de bastões", "Dança folclórica", "Ritmo intenso"],
  },
]

export default function LutasPage() {
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Modalidades de Luta</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Conheça os diferentes estilos e modalidades que ensinamos no CEEC Benaias.
          </p>
        </div>
      </section>

      {/* Lutas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-6xl mx-auto">
            {lutas.map((luta, index) => (
              <Card key={luta.id} className="overflow-hidden border-2 border-gray-100">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`relative h-64 lg:h-full ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={luta.imagem || "/placeholder.svg"}
                      alt={luta.nome}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent
                    className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{luta.nome}</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">{luta.descricao}</p>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3">Características:</h3>
                      <ul className="space-y-2">
                        {luta.caracteristicas.map((caracteristica, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                            <span className="text-gray-700">{caracteristica}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Interessado em aprender?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Venha conhecer nossas aulas e descobrir qual modalidade combina mais com você.
          </p>
          <Link href="/" className="inline-block">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
              Agende uma aula experimental
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}
