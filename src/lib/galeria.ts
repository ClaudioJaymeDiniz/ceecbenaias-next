import { StaticImageData } from "next/image";

import img1 from "@/assets/images/galeria/img1.jpeg";
import img2 from "@/assets/images/galeria/img2.jpg";

import inclusao1 from "@/assets/images/galeria/inclusao/inclusao1.jpeg";
import inclusao2 from "@/assets/images/galeria/inclusao/inclusao2.jpeg";
import inclusao3 from "@/assets/images/galeria/inclusao/inclusao3.jpeg";
import inclusao4 from "@/assets/images/galeria/inclusao/inclusao4.jpeg";
import inclusao5 from "@/assets/images/galeria/inclusao/inclusao5.jpeg";
import inclusao6 from "@/assets/images/galeria/inclusao/inclusao6.jpeg";
import inclusao7 from "@/assets/images/galeria/inclusao/inclusao7.jpeg";
import inclusao9 from "@/assets/images/galeria/inclusao/inclusao9.jpeg";
import inclusao10 from "@/assets/images/galeria/inclusao/inclusao10.jpeg";

import programa1 from "@/assets/images/galeria/programas/prog1.jpeg";
import programa2 from "@/assets/images/galeria/programas/prog2.jpeg";
import programa3 from "@/assets/images/galeria/programas/prog3.jpeg";
import programa4 from "@/assets/images/galeria/programas/prog4.jpeg";
import programa5 from "@/assets/images/galeria/programas/prog5.jpeg";
import programa6 from "@/assets/images/galeria/programas/prog6.jpeg";
import programa7 from "@/assets/images/galeria/programas/prog7.jpg";
import programa8 from "@/assets/images/galeria/programas/prog8.jpeg";
import programa9 from "@/assets/images/galeria/programas/prog9.jpeg";
import programa10 from "@/assets/images/galeria/programas/prog10.jpg";
import programa11 from "@/assets/images/galeria/programas/prog11.jpg";
import programa12 from "@/assets/images/galeria/programas/prog12.jpeg";

import evento1 from "@/assets/images/galeria/eventos/event1.jpeg";
import evento2 from "@/assets/images/galeria/eventos/event2.jpeg";
import evento3 from "@/assets/images/galeria/eventos/event3.jpeg";
import evento4 from "@/assets/images/galeria/eventos/event4.jpeg";
import evento5 from "@/assets/images/galeria/eventos/event5.jpeg";
import evento6 from "@/assets/images/galeria/eventos/event6.jpeg";
import evento7 from "@/assets/images/galeria/eventos/event7.jpeg";
import evento8 from "@/assets/images/galeria/eventos/event8.jpeg";
import evento9 from "@/assets/images/galeria/eventos/event9.jpeg";

import capoeira1 from "@/assets/images/galeria/capoeira/capo1.jpeg";
import capoeira2 from "@/assets/images/galeria/capoeira/capo2.jpeg";
import capoeira3 from "@/assets/images/galeria/capoeira/capo3.jpeg";

export interface GalleryItem {
  id: number;
  src: StaticImageData | string;
  alt: string;
  category: string;
}

export interface Category {
  id: string;
  label: string;
}

export const CATEGORIES: Category[] = [
  { id: "todos", label: "Todos" },
  { id: "capoeira", label: "Capoeira" },
  { id: "programas", label: "Programas" },
  { id: "inclusao", label: "Inclusão" },
  { id: "eventos", label: "Eventos" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  
  {
    id: 1,
    src: inclusao1,
    alt: "Evento de luta",
    category: "inclusao",
  },
  {
    id: 2,
    src: inclusao9,
    alt: "Evento de inclusão",
    category: "inclusao",
  },
  {
    id: 3,
    src: inclusao2,
    alt: "Evento de inclusão",
    category: "inclusao",
  },
  {
    id: 4,
    src: inclusao3,
    alt: "Evento de inclusão",
    category: "inclusao",
  },
  {
    id: 5,
    src: inclusao4,
    alt: "Evento de inclusão",
    category: "inclusao",
  },
  {
    id: 6,
    src: inclusao5,
    alt: "Evento de inclusão",
    category: "inclusao",
  },
  {
    id: 7,
    src: inclusao6,
    alt: "Evento de inclusão",
    category: "inclusao",
  },
  {
    id: 8,
    src: inclusao7,
    alt: "Evento de inclusão",
    category: "inclusao",
  },
 
  {
    id: 9,
    src: inclusao10,
    alt: "Evento de inclusão",
    category: "inclusao",
  },
  {
    id: 10,
    src: programa1,
    alt: "Jiu-jitsu",
    category: "programas",
  },
  {
    id: 11,
    src: programa2,
    alt: "Jiu-jitsu",
    category: "programas",
  },
  {
    id: 12,
    src: programa3,
    alt: "Jiu-jitsu",
    category: "programas",
  },
  {
    id: 13,
    src: programa4,
    alt: "Jiu-jitsu",
    category: "programas",
  },
  {
    id: 14,
    src: programa5,
    alt: "Jiu-jitsu",
    category: "programas",
  },
  {
    id: 15,
    src: programa6,
    alt: "Jiu-jitsu",
    category: "programas",
  },
  {
    id: 16,
    src: programa7,
    alt: "Jiu-jitsu",
    category: "programas",
  },
  {
    id: 17,
    src: programa8,
    alt: "Jiu-jitsu",
    category: "programas",
  },
  {
    id: 18,
    src: programa9,
    alt: "Jiu-jitsu",
    category: "programas",
  },
  {
    id: 19,
    src: programa10,
    alt: "Funcional",
    category: "programas",
  },
  {
    id: 20,
    src: programa11,
    alt: "Funcional",
    category: "programas",
  },
  {
    id: 21,
    src: programa12,
    alt: "Funcional",
    category: "programas",
  },
    // Eventos
   {
    id: 22,
    src: evento1,
    alt: "Evento de capoeira",
    category: "eventos",
  },
  {
    id: 23,
    src: evento2,
    alt: "Evento de capoeira",
    category: "eventos",
  },
  {
    id: 24,
    src: evento3,
    alt: "Evento de capoeira",
    category: "eventos",
  },
  {
    id: 25,
    src: evento4,
    alt: "Evento de capoeira",
    category: "eventos",
  },
  {
    id: 26,
    src: evento5,
    alt: "Evento de capoeira",
    category: "eventos",
  },
  {
    id: 27,
    src: evento6,
    alt: "Evento de capoeira",
    category: "eventos",
  },
  {
    id: 28,
    src: evento7,
    alt: "Evento de capoeira",
    category: "eventos",
  },
  {
    id: 29,
    src: evento8,
    alt: "Evento de capoeira",
    category: "eventos",
  },
  {
    id: 30,
    src: evento9,
    alt: "Evento de capoeira",
    category: "eventos",
  },
  // capoeira
  {
    id: 31,
    src: capoeira1,
    alt: "Capoeira",
    category: "capoeira",
  },
  {
    id: 32,
    src: capoeira2,
    alt: "Capoeira",
    category: "capoeira",
  },
  {
    id: 33,
    src: capoeira3,
    alt: "Capoeira",
    category: "capoeira",
  },

]
