"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Camera } from "lucide-react";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
// Importa o componente Modal e a tipagem
import ImageModal, { Foto } from "@/components/imagens/imageModals";

// Importações das imagens
import img1 from "@/assets/images/galeria/img1.jpg";
import img2 from "@/assets/images/galeria/img2.jpg";
import img3 from "@/assets/images/galeria/img3.jpg";
import img4 from "@/assets/images/galeria/img4.jpg";
import img5 from "@/assets/images/galeria/img5.jpg";
import img6 from "@/assets/images/galeria/img6.jpg";
import img7 from "@/assets/images/galeria/img7.jpg";
import img8 from "@/assets/images/galeria/img8.jpg";
import img9 from "@/assets/images/galeria/img9.jpg";
import img10 from "@/assets/images/galeria/img10.jpg";
import img11 from "@/assets/images/galeria/img11.jpg";
import img12 from "@/assets/images/galeria/img12.jpg";
import img13 from "@/assets/images/galeria/img13.jpg";
import img14 from "@/assets/images/galeria/img14.jpg";
import img15 from "@/assets/images/galeria/img15.jpg";
import img16 from "@/assets/images/galeria/img16.jpg";
import img17 from "@/assets/images/galeria/img17.jpg";
import img18 from "@/assets/images/galeria/img18.jpg";
import img19 from "@/assets/images/galeria/img19.jpg";
import img20 from "@/assets/images/galeria/img20.jpg";
import img21 from "@/assets/images/galeria/img21.jpg";
import img22 from "@/assets/images/galeria/img22.jpg";
import img23 from "@/assets/images/galeria/img23.jpg";
import img24 from "@/assets/images/galeria/img24.jpg";
import img25 from "@/assets/images/galeria/img25.jpg";
import img26 from "@/assets/images/galeria/img26.jpg";
import img27 from "@/assets/images/galeria/img27.jpg";
import img28 from "@/assets/images/galeria/img28.jpg";
import img29 from "@/assets/images/galeria/img29.jpg";
import img30 from "@/assets/images/galeria/img30.png";

// Array de fotos tipado
const fotos: Foto[] = [
  { id: 1, imagem: img1 },
  { id: 2, imagem: img2 },
  { id: 3, imagem: img3 },
  { id: 4, imagem: img4 },
  { id: 5, imagem: img5 },
  { id: 6, imagem: img6 },
  { id: 7, imagem: img7 },
  { id: 8, imagem: img8 },
  { id: 9, imagem: img9 },
  { id: 10, imagem: img10 },
  { id: 11, imagem: img11 },
  { id: 12, imagem: img12 },
  { id: 13, imagem: img13 },
  { id: 14, imagem: img14 },
  { id: 15, imagem: img15 },
  { id: 16, imagem: img16 },
  { id: 17, imagem: img17 },
  { id: 18, imagem: img18 },
  { id: 19, imagem: img19 },
  { id: 20, imagem: img20 },
  { id: 21, imagem: img21 },
  { id: 22, imagem: img22 },
  { id: 23, imagem: img23 },
  { id: 24, imagem: img24 },
  { id: 25, imagem: img25 },
  { id: 26, imagem: img26 },
  { id: 27, imagem: img27 },
  { id: 28, imagem: img28 },
  { id: 29, imagem: img29 },
  { id: 30, imagem: img30 },
];

export default function GaleriaPage() {
  // Estado tipado para a imagem selecionada (Foto ou null)
  const [selectedImage, setSelectedImage] = useState<Foto | null>(null);

  // 2. **Função para abrir a imagem**
  // Tipada para receber um objeto Foto
  const openModal = (image: Foto) => {
    setSelectedImage(image);
  };

  // 3. **Função para fechar o modal**
  const closeModal = () => {
    setSelectedImage(null);
  };

  // 4. **Funções de navegação**
  const navigate = (direction: "prev" | "next") => {
    if (!selectedImage) return;

    const currentIndex = fotos.findIndex(
      (foto) => foto.id === selectedImage.id
    );

    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % fotos.length
        : (currentIndex - 1 + fotos.length) % fotos.length;

    setSelectedImage(fotos[newIndex]);
  };

  // Determinar se é a primeira ou última foto para desabilitar botões
  const currentImageIndex = selectedImage
    ? fotos.findIndex((f) => f.id === selectedImage.id)
    : -1;
  const isFirst = currentImageIndex === 0;
  const isLast = currentImageIndex === fotos.length - 1;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <Camera className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Galeria de Fotos
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Momentos especiais e atividades do CEEC Benaias capturados em
            imagens.
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
                className="group relative h-80 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                // 5. **Adicionar o evento de clique para abrir o modal**
                onClick={() => openModal(foto)}
              >
                <Image
                  src={foto.imagem}
                  alt={foto.titulo || `Foto ${foto.id}`}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias (mantidas como cards informativos) */}
      <section className="py-16 bg-gray-50">
        {/* ... (Conteúdo das Categorias) ... */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nossas Atividades
          </h2>

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
          <h2 className="text-3xl font-bold mb-6">
            Faça parte da nossa história
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Venha participar das nossas atividades e criar momentos especiais
            conosco.
          </p>
          <a
            target="_blank"
            href="https://wa.me/5512996466259?text=Ol%C3%A1%2C%20gostaria%20de%20participar%20das%20atividades%20do%20CEEC%20Benaias!"
          >
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors">
              Participe das nossas atividades
            </button>
          </a>
        </div>
      </section>
      <Footer />

      {/* 7. **ADICIONAR O MODAL CONDICIONALMENTE** */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          closeModal={closeModal}
          navigate={navigate}
          isFirst={isFirst}
          isLast={isLast}
        />
      )}
    </div>
  );
}

{
  /* Galeria */
}
{
  /* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {fotos.map((foto) => (
              <div
                key={foto.id}
                // *** CORREÇÃO APLICADA AQUI: 'relative' e 'h-80' sem formatação extra ***
                className="group relative h-80 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                <Image
                  src={foto.imagem}
                  alt={foto.titulo}
                  fill={true} // Otimização e responsividade
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  placeholder="blur" // Sugestão para carregamento mais suave
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-1">{foto.titulo}</h3>
                    <span className="text-sm bg-red-600 px-2 py-1 rounded">
                      {foto.categoria}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */
}
