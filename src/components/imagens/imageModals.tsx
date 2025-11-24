import React from "react";
import Image, { StaticImageData } from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// --- TIPAGEM ---

// 1. Definição do Tipo para o objeto Foto (usado no array 'fotos' e no estado)
export interface Foto {
  id: number;
  // O título e categoria foram removidos do seu array, mas são mantidos como opcionais
  // caso você decida adicioná-los de volta para exibir no modal.
  titulo?: string;
  categoria?: string;
  imagem: StaticImageData; // Tipo do Next.js para imagens importadas
}

// 2. Definição da Interface para as Props do Componente Modal
interface ImageModalProps {
  image: Foto;
  closeModal: () => void;
  navigate: (direction: "prev" | "next") => void;
  isFirst: boolean;
  isLast: boolean;
}

// --- COMPONENTE ---

const ImageModal: React.FC<ImageModalProps> = ({
  image,
  closeModal,
  navigate,
  isFirst,
  isLast,
}) => {
  // Efeito para fechar com a tecla ESC e navegar com as setas do teclado
  React.useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight" && !isLast) navigate("next");
      if (e.key === "ArrowLeft" && !isFirst) navigate("prev");
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [closeModal, navigate, isFirst, isLast]);

  return (
    // Fundo escuro fixo em tela cheia (Modal/Lightbox)
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
      onClick={closeModal} // Permite fechar clicando no fundo escuro
    >
      {/* Container que previne o fechamento ao clicar na imagem */}
      <div
        className="relative w-full max-w-7xl h-full max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. Imagem Principal */}
        <Image
          src={image.imagem}
          alt={image.titulo || `Foto ${image.id}`}
          fill={true}
          // object-contain garante que a imagem inteira caiba na tela
          className="object-contain"
          sizes="100vw"
          priority
        />

        {/* 2. Botão de Fechar (X) */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white z-50 p-2 rounded-full bg-red-600 hover:bg-red-700 transition"
          aria-label="Fechar galeria"
        >
          <X className="w-8 h-8" />
        </button>

        {/* 3. Botão de Navegação: Anterior */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate("prev");
          }}
          className={`absolute left-4 p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-80 transition ${
            isFirst ? "opacity-30 cursor-not-allowed" : ""
          }`}
          disabled={isFirst}
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* 4. Botão de Navegação: Próxima */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate("next");
          }}
          className={`absolute right-4 p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-80 transition ${
            isLast ? "opacity-30 cursor-not-allowed" : ""
          }`}
          disabled={isLast}
          aria-label="Próxima imagem"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
