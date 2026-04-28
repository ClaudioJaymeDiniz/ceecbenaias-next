"use client"

import { useState, useCallback, useMemo } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { GalleryItem, Category } from "@/lib/galeria"

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
              // Se usar String de URL, remova o placeholder="blur"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Simples */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <Button 
            variant="ghost" 
            className="absolute top-5 right-5 text-white" 
            onClick={closeLightbox}
          >
            <X size={32} />
          </Button>
          
          <Button 
            variant="ghost" 
            className="absolute left-5 text-white" 
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={48} />
          </Button>

          <div className="relative w-full max-w-4xl h-[70vh]">
             <Image
                src={filteredItems[currentIndex].src}
                alt={filteredItems[currentIndex].alt}
                fill
                className="object-contain"
                priority
             />
          </div>

          <Button 
            variant="ghost" 
            className="absolute right-5 text-white" 
            onClick={() => navigate(1)}
          >
            <ChevronRight size={48} />
          </Button>
        </div>
      )}
    </>
  )
}