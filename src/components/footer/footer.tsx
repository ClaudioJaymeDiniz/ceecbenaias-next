import imgInsta from "@/assets/images/instagram.png";
import imgFace from "@/assets/images/facebook.png";
import imgWpp from "@/assets/images/whatsapp.png";
import imgYoutube from "@/assets/images/youtube.png";
import imgTik from "@/assets/images/tik-tok.png";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "../ui/logo";

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-red-950/40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          
          {/* COLUNA 1: LOGO E DESCRIÇÃO */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="shrink-0">
                <Logo />
              </div>
              <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                CEEC Benaias
              </span>
            </div>
            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs">
              Centro de Esporte, Educação e Cultura. Transformando vidas através do movimento.
            </p>
          </div>

          {/* COLUNA 2: CONTATO */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-slate-200 uppercase mb-5">
              Contato
            </h3>
            <div className="space-y-3.5 text-sm text-slate-400 font-medium">
              <div className="flex items-start space-x-2.5 group">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5 group-hover:text-red-400 transition-colors" />
                <a
                  href="https://maps.app.goo.gl/qh5ZcjDQCdsuqPeH7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-200 transition-colors leading-relaxed"
                >
                  Av. Barbacena, 282, Sala 1<br />Vila Industrial
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span className="hover:text-slate-200 transition-colors">(12) 99646-6259</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a 
                  href="mailto:ceecbenaias@gmail.com" 
                  className="hover:text-slate-200 transition-colors break-all"
                >
                  ceecbenaias@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* COLUNA 3: LINKS RÁPIDOS */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-slate-200 uppercase mb-5">
              Links Rápidos
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm font-medium">
              <Link href="/sobre" className="text-slate-400 hover:text-white transition-colors duration-200">
                Sobre
              </Link>
              <Link href="/professor" className="text-slate-400 hover:text-white transition-colors duration-200">
                Professor
              </Link>
              <Link href="/programas" className="text-slate-400 hover:text-white transition-colors duration-200">
                Programas
              </Link>
              <Link href="/capoeira" className="text-slate-400 hover:text-white transition-colors duration-200">
                Capoeira
              </Link>
              <Link href="/loja" className="text-slate-400 hover:text-white transition-colors duration-200">
                Loja
              </Link>
              <Link href="/galeria" className="text-slate-400 hover:text-white transition-colors duration-200">
                Galeria
              </Link>
            </div>
          </div>

          {/* COLUNA 4: REDES SOCIAIS */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-slate-200 uppercase mb-5 text-center md:text-left">
              Redes Sociais
            </h3>
            <div className="flex justify-center md:justify-start items-center gap-3.5">
              <a
                className="transition-all duration-300 hover:-translate-y-1 hover:brightness-110 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/5512996466259?text=Olá,%20vi%20o%20seu%20site%20e%20quero%20mais%20informações"
              >
                <Image className="w-8 h-8 object-contain" alt="WhatsApp" src={imgWpp} placeholder="blur" />
              </a>

              <a
                className="transition-all duration-300 hover:-translate-y-1 hover:brightness-110 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/centrotreinamentobenaias?igsh=MXE4cXVocmJ5czZjaQ=="
              >
                <Image className="w-8 h-8 object-contain" alt="Instagram" src={imgInsta} placeholder="blur" />
              </a>

              <a
                className="transition-all duration-300 hover:-translate-y-1 hover:brightness-110 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/centrotreinamentobenaias"
              >
                <Image className="w-8 h-8 object-contain" alt="Facebook" src={imgFace} placeholder="blur" />
              </a>

              <a
                className="transition-all duration-300 hover:-translate-y-1 hover:brightness-110 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@ceecbenaias?_t=ZM-8t5dVMPOziQ&_r=1"
              >
                <Image className="w-8 h-8 object-contain" alt="TikTok" src={imgTik} placeholder="blur" />
              </a>

              <a
                className="transition-all duration-300 hover:-translate-y-1 hover:brightness-110 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@rafaelreis1227"
              >
                <Image className="w-8 h-8 object-contain" alt="YouTube" src={imgYoutube} placeholder="blur" />
              </a>
            </div>
          </div>
        </div>

        {/* DIREITOS RESERVADOS */}
        <div className="border-t border-slate-900 mt-12 pt-8 text-center text-xs text-slate-500 font-medium tracking-wide">
          <p suppressHydrationWarning>&copy; {anoAtual} CEEC Benaias. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}