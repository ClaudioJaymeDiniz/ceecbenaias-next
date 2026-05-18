import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import { AboutHero } from "@/components/sobre/sections/about-hero";
import { HistorySection } from "@/components/sobre/sections/history-section";
import { ValuesSection } from "@/components/sobre/sections/values-section";
import { StructureSection } from "@/components/sobre/sections/structure-section";
import { DiferentialsSection } from "@/components/sobre/sections/diferentials-section";
import { CTASection } from "@/components/sobre/sections/cta-section";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <AboutHero />
      <HistorySection />
      <ValuesSection />
      <StructureSection />
      <DiferentialsSection />
      <CTASection />

      <Footer />
    </div>
  );
}