"use client";

import { motion } from "framer-motion";

export function ProfessorBiography() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-red-600 font-extrabold uppercase tracking-widest text-xs block">
            Trajetória
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-3 mb-12 tracking-tight">
            Do esporte à missão de transformar vidas.
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-x-12 gap-y-6 text-slate-600 text-base sm:text-lg leading-relaxed font-normal"
        >
          <p>
            Rafael é educador físico, escritor e idealizador de projetos
            voltados ao desenvolvimento humano. Sua caminhada une esporte,
            inclusão, disciplina e cuidado com pessoas.
          </p>

          <p>
            Como criador do método <strong className="font-bold text-slate-900">Capo&Vida</strong>, desenvolve
            ações que utilizam a capoeira como ferramenta de movimento,
            cultura, saúde e transformação social.
          </p>

          <p>
            Sua história pessoal também deu origem ao livro{" "}
            <strong className="font-bold text-slate-900">O Resgatado</strong>, uma obra marcada por superação, fé
            e reconstrução.
          </p>

          <p>
            Hoje, através do CEEC Benaias e do Ministério Resgate, Rafael
            dedica sua vida a alcançar pessoas que precisam de uma nova
            oportunidade.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}