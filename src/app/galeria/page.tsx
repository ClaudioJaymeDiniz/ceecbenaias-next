import { GalleryGrid } from "@/components/gallery/gallery-grid"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import { GALLERY_ITEMS, CATEGORIES } from "@/lib/galeria"
import { Camera } from "lucide-react"

export const metadata = {
  title: "Galeria de Fotos | CEEC Benaias",
  description: "Momentos especiais e atividades do CEEC Benaias capturados em imagens.",
}

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <Camera className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Nossa Galeria
          </h1>
          <p className="text-lg text-red-100 max-w-2xl mx-auto">
            Explore os momentos, sorrisos e a evolução dos nossos alunos.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <GalleryGrid items={GALLERY_ITEMS} categories={CATEGORIES} />
        </div>
      </section>

      <Footer />
    </main>
  )
}