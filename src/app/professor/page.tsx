import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import { ProfessorHero } from "@/components/professor/professor-hero";
import { ProfessorBiography } from "@/components/professor/professor-biography";
import { ProfessorAchievements } from "@/components/professor/professor-achievements";
import { ProfessorBook } from "@/components/professor/professor-book";
import { ProfessorQuote } from "@/components/professor/professor-quote";
import { ProfessorCTA } from "@/components/professor/professor-cta";

export default function ProfessorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <ProfessorHero />
      <ProfessorBiography />
      <ProfessorAchievements />
      <ProfessorBook />
      <ProfessorQuote />
      <ProfessorCTA />

      <Footer />
    </div>
  );
}