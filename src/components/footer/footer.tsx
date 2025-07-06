import imgInsta from '@/assets/images/instagram.png'
import imgFace from '@/assets/images/facebook.png'
import imgWpp from '@/assets/images/whatsapp.png'
import imgYoutube from '@/assets/images/youtube.png'
import imgTik from '@/assets/images/tik-tok.png'
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Logo from '../ui/logo'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
    <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div>
                  <Logo />
                </div>
                <span className="text-lg font-bold">CEEC Benaias</span>
              </div>
              <p className="text-gray-400 text-sm">
                Centro de Esporte, Educação e Cultura
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <a href="https://maps.app.goo.gl/qh5ZcjDQCdsuqPeH7" target="_blank" rel="noopener noreferrer">
                  <span>Av. Barbacena, 282, Sala 1, Vila Industrial</span>
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(12) 99646-6259</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>ceecbenaias@gmail.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Links Rápidos</h3>
              <div className="space-y-2 text-sm">
                <Link
                  href="/sobre"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Sobre
                </Link>
                <Link
                  href="/professor"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Professor
                </Link>
                <Link
                  href="/programas"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Programas
                </Link>
                <Link
                  href="/lutas"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Lutas
                </Link>
                <Link
                  href="/academia"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Academia
                </Link>
                
                <Link
                  href="/loja"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Loja
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Redes Sociais</h3>
              <div className="flex justify-center md:justify-start space-x-4 ">
                <a
                className="hover:scale-110"
                target="blank"
                href="https://wa.me/5512996466259?text=Olá,%20vi%20o%20seu%20site%20e%20quero%20mais%20informações"
              >
                <Image
                  className="w-9 h-9"
                  alt="whatsapp icon"
                  loading="lazy"
                  decoding="async"
                  data-nimg="1"
                  src={imgWpp}
                />
              </a>

              <a
                className="hover:scale-110"
                target="_blank"
                href="https://www.instagram.com/centrotreinamentobenaias?igsh=MXE4cXVocmJ5czZjaQ== "
              >
                <Image
                  className="w-9 h-9"
                  alt="linkdin icon"
                  loading="lazy"
                  decoding="async"
                  data-nimg="1"
                  src={imgInsta}
                />
              </a>

              <a
                className="hover:scale-110"
                target="_blank"
                href="https://www.facebook.com/centrotreinamentobenaias"
              >
                <Image
                  className="w-9 h-9"
                  alt="instagram icon"
                  loading="lazy"
                  decoding="async"
                  data-nimg="1"
                  src={imgFace}
                />
              </a>

              <a
                className="hover:scale-110"
                target="_blank"
                href="https://www.tiktok.com/@ceecbenaias?_t=ZM-8t5dVMPOziQ&_r=1"
              >
                <Image
                  className="w-9 h-9"
                  alt="twitter icon"
                  loading="lazy"
                  decoding="async"
                  data-nimg="1"
                  src={imgTik}
                />
              </a>
              <a
                className="hover:scale-110"
                target="_blank"
                href="https://www.youtube.com/@rafaelreis1227"
              >
                <Image
                  className="w-9 h-9"
                  alt="youtube icon"
                  loading="lazy"
                  decoding="async"
                  data-nimg="1"
                  src={imgYoutube}
                />
              </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 CEEC Benaias. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
  
  )
}