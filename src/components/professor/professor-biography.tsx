export function ProfessorBiography() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <span className="text-red-600 font-semibold uppercase tracking-wider">
            Trajetória
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-4 mb-10">
            Do esporte à missão de transformar vidas.
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed">
            <p>
              Rafael é educador físico, escritor e idealizador de projetos
              voltados ao desenvolvimento humano. Sua caminhada une esporte,
              inclusão, disciplina e cuidado com pessoas.
            </p>

            <p>
              Como criador do método <strong>Capo&Vida</strong>, desenvolve
              ações que utilizam a capoeira como ferramenta de movimento,
              cultura, saúde e transformação social.
            </p>

            <p>
              Sua história pessoal também deu origem ao livro{" "}
              <strong>O Resgatado</strong>, uma obra marcada por superação, fé
              e reconstrução.
            </p>

            <p>
              Hoje, através do CEEC Benaias e do Ministério Resgate, Rafael
              dedica sua vida a alcançar pessoas que precisam de uma nova
              oportunidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}