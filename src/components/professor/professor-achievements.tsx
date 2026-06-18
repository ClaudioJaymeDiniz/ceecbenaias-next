"use client";

import { Card, CardContent } from "@/components/ui/card";
import { professorAchievements } from "@/lib/professor";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export function ProfessorAchievements() {
  return (
    <section className="py-24 bg-slate-50/70 border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-extrabold uppercase tracking-widest text-xs block">
            Reconhecimento
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Uma caminhada construída com propósito.
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {professorAchievements.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div key={item.title} variants={cardVariants}>
                <Card className="border border-slate-100 rounded-3xl shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white group h-full">
                  <CardContent className="p-8 text-center flex flex-col h-full justify-between">
                    <div>
                      <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                        <Icon className="w-7 h-7" />
                      </div>

                      <h3 className="font-extrabold text-slate-900 text-lg mb-2 tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}