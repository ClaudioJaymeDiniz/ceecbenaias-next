// src/components/SponsorLogos/SponsorLogos.tsx
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import bf from "@/assets/images/parceiros/bf.jpg";
import ievp from "@/assets/images/parceiros/ievp.jpg";
import pincelmagico from "@/assets/images/parceiros/pincelmagico.jpg";
import klebao from "@/assets/images/parceiros/klebao.jpg";
import cnascimento from "@/assets/images/parceiros/colegionascimento.jpg";
import lumnare from "@/assets/images/parceiros/lumnare.jpeg";
import bjj from "@/assets/images/parceiros/bjj.jpeg";

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
    // link: "https://bfgestao.com",
  },
  { name: "IEVP", src: ievp },
  { name: "Pincel Mágico", src: pincelmagico },
  { name: "Klebão Loko", src: klebao},
  { name: "Colégio Nascimento", src: cnascimento },
  { name: "Lumare", src: lumnare },
  { name: "BJJ", src: bjj }
];

export default function SponsorLogos() {
  return (
    // Grid responsivo, com margem vertical para separar das outras seções
    <div className="py-10">
      <h3 className="text-xl font-bold text-center text-white mb-8">
        Nossos Patrocinadores e Apoios
      </h3>

      {/* Container flexível e responsivo para os logos */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto px-4 place-items-center">
  {sponsors.map((sponsor) => {
    const logoContent = (
      <div className="w-32 h-32 relative flex items-center justify-center p-1">
        <Image
          src={sponsor.src}
          alt={`${sponsor.name} Logo`}
          width={128}
          height={128}
          className="w-full h-full object-contain rounded"
        />
      </div>
    );

    return sponsor.link ? (
      <Link
        key={sponsor.name}
        href={sponsor.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex justify-center"
      >
        {logoContent}
      </Link>
    ) : (
      <div key={sponsor.name} className="w-full flex justify-center">
        {logoContent}
      </div>
    );
  })}
</div>
    </div>
  );
}
