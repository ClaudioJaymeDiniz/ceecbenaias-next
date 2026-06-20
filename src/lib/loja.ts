import { StaticImageData } from "next/image";

import camisaFrete from "@/assets/images/loja/funcional2.png";
import camisaCostas from "@/assets/images/loja/funcional1.png";
import camisaCalca from "@/assets/images/loja/camisa-calca.jpeg";
import conjunto from "@/assets/images/loja/conjunto.jpg";
import moletonPreto from "@/assets/images/loja/moleton-189.jpeg";
import canecas from "@/assets/images/loja/canecas.jpg";
import canecaBranca from "@/assets/images/loja/caneca-branca.jpg";
import rashFrente from "@/assets/images/loja/frente.png";
import rashLateral from "@/assets/images/loja/lateral.png";
import rashLaCostas from "@/assets/images/loja/costas.png";
import rashLaVerde from "@/assets/images/loja/verde.png";
import coquinho from "@/assets/images/loja/coquinho.jpg";
import pandeiro from "@/assets/images/loja/pandeiro.jpg";
import berimbau from "@/assets/images/loja/berimbau.jpg";
import polo from "@/assets/images/loja/polo.jpeg";
import calca from "@/assets/images/loja/calca.jpeg";

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagens: StaticImageData[];
  categoria: "vestuario" | "acessorios" | "instrumentos";
}

export const PRODUTOS: Produto[] = [
  {
    id: 1,
    nome: "Camiseta Funcional",
    descricao: "Camiseta oficial Capo&Vida em tecido leve e confortável.",
    preco: "R$ 89,90",
    imagens: [camisaFrete, camisaCostas],
    categoria: "vestuario",
  },
  {
    id: 2,
    nome: "Abadá de Capoeira",
    descricao: "Uniforme oficial e tradicional reforçado para treinos e rodas. Até tamanho G.",
    preco: "R$ 289,90",
    imagens: [camisaCalca],
    categoria: "vestuario",
  },
  {
    id: 3,
    nome: "Canecas Exclusivas",
    descricao: "Canecas de cerâmica de alta qualidade, disponíveis nas cores branca e preta.",
    preco: "R$ 54,90",
    imagens: [canecas, canecaBranca],
    categoria: "acessorios",
  },
  {
    id: 4,
    nome: "Camiseta Rash Guard",
    descricao: "Rash guard com estampa exclusiva no peito.",
    preco: "R$ 119,90",
    imagens: [rashFrente, rashLateral, rashLaCostas, rashLaVerde],
    categoria: "vestuario",
  },
  {
    id: 5,
    nome: "Conjunto Moletom Benaias",
    descricao: "Conjunto completo premium de blusa de moletom e calça BENAIAS.",
    preco: "R$ 199,90",
    imagens: [conjunto],
    categoria: "vestuario",
  },
  {
    id: 6,
    nome: "Moletom Benaias Casual",
    descricao: "Moletom quente com capuz e estampa nas costas. Disponível em Preto, Vermelho ou Branco.",
    preco: "R$ 219,90",
    imagens: [moletonPreto],
    categoria: "vestuario",
  },
  {
    id: 7,
    nome: "Agogô de Coquinho",
    descricao: "Agogô tradicional artesanal, excelente sonoridade para a bateria de capoeira.",
    preco: "R$ 150,00",
    imagens: [coquinho],
    categoria: "instrumentos",
  },
  {
    id: 8,
    nome: "Pandeiro de Couro",
    descricao: "Pandeiro profissional afinado, ideal para rodas de capoeira e musicalização.",
    preco: "R$ 180,90",
    imagens: [pandeiro],
    categoria: "instrumentos",
  },
  {
    id: 9,
    nome: "Berimbau Completo",
    descricao: "Berimbau com verga selecionada, cabaça tratada, arame, baqueta e caxixi.",
    preco: "R$ 200,00",
    imagens: [berimbau],
    categoria: "instrumentos",
  },
  {
    id: 10,
    nome: "Polo",
    descricao: "Polo oficial BENAIAS, ideal para uso diário e eventos.",
    preco: "R$ 89,90",
    imagens: [polo],
    categoria: "vestuario",
  },
  {
    id: 11,
    nome: "Calça de Capoeira",
    descricao: "Calça oficial BENAIAS, ideal para uso diário e eventos.",
    preco: "R$ 189,90",
    imagens: [calca],
    categoria: "vestuario",
  },
];