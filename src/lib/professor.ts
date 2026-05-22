import { Award, BookOpen, Heart, Users } from "lucide-react";
import { Achievement } from "@/types/professor";

export const professorAchievements: Achievement[] = [
  {
    title: "Criador do Método",
    description: "Capo&Vida",
    icon: Award,
  },
  {
    title: "Autor do Livro",
    description: "O Resgatado",
    icon: BookOpen,
  },
  {
    title: "Referência Regional",
    description: "Vale do Paraíba",
    icon: Users,
  },
  {
    title: "Especialista em",
    description: "Inclusão Social",
    icon: Heart,
  },
];

export const professorWhatsapp =
  "https://wa.me/5512996466259?text=Ol%C3%A1%2C%20Professor%20Rafael%20do%20CEEC%20Benaias!";

export const bookWhatsapp =
  "https://wa.me/5512996466259?text=Ol%C3%A1%2C%20gostaria%20de%20adquirir%20uma%20c%C3%B3pia%20do%20livro!";

export const contactWhatsapp =
  "https://wa.me/5512996466259?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Professor%20Rafael%20e%20o%20livro%20O%20Resgatado!";