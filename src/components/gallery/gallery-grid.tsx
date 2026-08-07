"use client"

import { useState, useCallback, useMemo } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { GalleryItem, Category } from "@/lib/galeria"
import { motion, AnimatePresence } from "framer-motion"

interface GalleryGridProps {
  items: GalleryItem[]
  categories: Category[]
}

export function GalleryGrid({ items, categories }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("todos")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Memoizar itens filtrados para performance
  const filteredItems = useMemo(() => 
    activeCategory === "todos"
      ? items
      : items.filter((item) => item.category === activeCategory)
  , [activeCategory, items])

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.style.overflow = ""
  }, [])

  const navigate = useCallback((direction: 1 | -1) => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + direction;
      if (nextIndex < 0) return filteredItems.length - 1;
      if (nextIndex >= filteredItems.length) return 0;
      return nextIndex;
    });
  }, [filteredItems.length])

  // Trata o gesto de arrastar do dedo no mobile
  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50; // Sensibilidade do swipe
    if (info.offset.x < -threshold) {
      navigate(1); // Arrastou para a esquerda -> Próxima imagem
    } else if (info.offset.x > threshold) {
      navigate(-1); // Arrastou para a direita -> Imagem anterior
    }
  };

  return (
    <>
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={activeCategory === cat.id ? "default" : "outline"}
            onClick={() => {
                setActiveCategory(cat.id);
                setCurrentIndex(0); // Reseta o index ao filtrar
            }}
            className={cn(
              "transition-all rounded-full",
              activeCategory === cat.id ? "bg-red-600 hover:bg-red-700" : "hover:border-red-600"
            )}
          >
            {cat.label}
          </Button>
        ))}
      </div>

      {/* Grid de Imagens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-gray-100"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              placeholder="blur" 
            />
          </div>
        ))}
      </div>

      {/* Lightbox Premium com Suporte a Touch e Swipe */}
      <AnimatePresence>
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 touch-pan-y select-none">
            
            {/* Botão de Fechar */}
            <Button 
              variant="ghost" 
              className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-full w-12 h-12 p-0 z-50" 
              onClick={closeLightbox}
            >
              <X size={24} />
            </Button>
            
            {/* Seta Esquerda (Oculta ou menor no mobile, confortável no desktop) */}
            <Button 
              variant="ghost" 
              className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full w-12 h-12 p-0 hidden sm:flex items-center justify-center z-50 active:scale-90 transition-transform" 
              onClick={() => navigate(-1)}
            >
              <ChevronLeft size={32} />
            </Button>

            {/* Container da Imagem com Área Touch Inteligente */}
            <div className="relative w-full max-w-4xl h-[75vh] flex items-center justify-center">
               <motion.div
                 key={currentIndex}
                 initial={{ opacity: 0.6, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0.6, scale: 0.95 }}
                 transition={{ duration: 0.2, ease: "easeOut" }}
                 drag="x"
                 dragConstraints={{ left: 0, right: 0 }}
                 dragElastic={0.4}
                 onDragEnd={handleDragEnd}
                 className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
               >
                 <Image
                   src={filteredItems[currentIndex].src}
                   alt={filteredItems[currentIndex].alt}
                   fill
                   className="object-contain pointer-events-none"
                   priority
                 />
               </motion.div>
            </div>

            {/* Seta Direita (Oculta ou menor no mobile, confortável no desktop) */}
            <Button 
              variant="ghost" 
              className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full w-12 h-12 p-0 hidden sm:flex items-center justify-center z-50 active:scale-90 transition-transform" 
              onClick={() => navigate(1)}
            >
              <ChevronRight size={32} />
            </Button>

           
            <div className="absolute bottom-6 text-white/60 text-sm font-medium tracking-wider bg-white/5 px-4 py-1.5 rounded-full backdrop-blur-md">
              {currentIndex + 1} / {filteredItems.length}
            </div>

          </div>
        )}
      </AnimatePresence>
    </>
  )
}