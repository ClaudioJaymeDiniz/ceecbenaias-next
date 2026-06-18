"use client";

import { useState } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TeacherSection from "@/components/home/TeacherSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import VideoModal from "@/components/home/VideoModal";

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection onWatchVideo={() => setIsVideoModalOpen(true)} />
        <FeaturesSection />
        <AboutSection />
        <TeacherSection />
        <PartnersSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </div>
  );
}