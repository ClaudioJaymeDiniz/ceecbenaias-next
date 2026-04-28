import { StaticImageData } from "next/image";

import img1 from "@/assets/images/galeria/img1.jpeg";
import img2 from "@/assets/images/galeria/img2.jpg";
import img3 from "@/assets/images/galeria/img3.jpeg";
import img4 from "@/assets/images/galeria/img4.jpg";
import img5 from "@/assets/images/galeria/img5.jpg";
import img6 from "@/assets/images/galeria/img6.jpg";
import img7 from "@/assets/images/galeria/img7.jpg";
import img8 from "@/assets/images/galeria/img8.jpeg";
import img9 from "@/assets/images/galeria/img9.jpg";
import img10 from "@/assets/images/galeria/img10.jpeg";
import img11 from "@/assets/images/galeria/img11.jpeg";
import img12 from "@/assets/images/galeria/img12.jpeg";
import img13 from "@/assets/images/galeria/img13.jpeg";
import img14 from "@/assets/images/galeria/img14.jpeg";
import img15 from "@/assets/images/galeria/img15.jpeg";
import img20 from "@/assets/images/galeria/img20.jpg";
import img21 from "@/assets/images/capa-hero.jpeg";
import img22 from "@/assets/images/galeria/img22.jpg";
import img23 from "@/assets/images/galeria/img23.jpg";
import img24 from "@/assets/images/galeria/img24.jpeg";
import img25 from "@/assets/images/galeria/img25.jpeg";
import img26 from "@/assets/images/galeria/img26.jpeg";
import img27 from "@/assets/images/galeria/img27.jpeg";
import img28 from "@/assets/images/galeria/img28.jpeg";
import img29 from "@/assets/images/galeria/img29.jpeg";
import img30 from "@/assets/images/galeria/img30.jpeg";


export interface GalleryItem {
  id: number;
  src: StaticImageData | string;
  alt: string;
  category: string;
  title: string;
}

export interface Category {
  id: string;
  label: string;
}

export const CATEGORIES: Category[] = [
  { id: "todos", label: "Todos" },
  { id: "capoeira", label: "Capoeira" },
  { id: "luta", label: "Lutas" },
  { id: "inclusao", label: "Inclusão" },
  { id: "eventos", label: "Eventos" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: img1,
    alt: "Descrição da foto 1",
    category: "capoeira",
    title: "Aula de Capoeira",
  },
  {
    id: 2,
    src: img2,
    alt: "Evento de luta",
    category: "luta",
    title: "Campeonato de Lutas",
  },
  
];