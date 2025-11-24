// src/components/SponsorLogos/SponsorLogos.tsx
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import bf from "@/assets/images/parceiros/bf.jpg";
import ievp from "@/assets/images/parceiros/ievp.jpg";
import pincelmagico from "@/assets/images/parceiros/pincelmagico.jpg";
import klebao from "@/assets/images/parceiros/klebao.jpg";
import cnascimento from "@/assets/images/parceiros/colegionascimento.jpg";
import creferencia from "@/assets/images/parceiros/colegioreferencia.jpg";

// 1. Definindo o tipo (interface) para um Patrocinador
interface Sponsor {
  name: string;
  src: StaticImageData; // Caminho da imagem (ex: /logos/empresa-x.png)
  link?: string; // URL opcional
}

// 2. O Array de Patrocinadores (Você deve preencher com seus dados reais)
const sponsors: Sponsor[] = [
  // Exemplo de logos - Lembre-se de colocar as imagens na pasta 'public/logos/'
  {
    name: "BF Gestão",
    src: bf,
    link: "https://bfgestao.com",
  },
  { name: "IEVP", src: ievp },
  { name: "IEVP", src: pincelmagico },
  {
    name: "Klebão Loko",
    src: klebao,
  },
  { name: "Colégio Nascimento", src: cnascimento },
  { name: "Colégio Referência", src: creferencia },
];

export default function SponsorLogos() {
  return (
    // Grid responsivo, com margem vertical para separar das outras seções
    <div className="py-10">
      <h3 className="text-xl font-bold text-center text-white mb-8">
        Nossos Patrocinadores e Apoios
      </h3>

      {/* Container flexível e responsivo para os logos */}
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 max-w-6xl mx-auto px-4">
        {sponsors.map((sponsor) => {
          const logoContent = (
            // Contêiner pequeno e fixo para cada logo
            <div className="w-32 h-32 relative flex items-center justify-center p-1 opacity-75 hover:opacity-100 transition-opacity duration-300 transform hover:scale-105">
              <Image
                src={sponsor.src}
                alt={`${sponsor.name} Logo`}
                // Tamanhos pequenos para otimização e exibição de logo
                width={128}
                height={128}
                // object-contain é crucial para evitar cortes no logo
                className="w-full h-full object-contain rounded"
              />
            </div>
          );

          if (sponsor.link) {
            return (
              <Link
                key={sponsor.name}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {logoContent}
              </Link>
            );
          }

          return <div key={sponsor.name}>{logoContent}</div>;
        })}
      </div>
    </div>
  );
}
