// src/components/Projetos.jsx
import React from 'react';

function Projetos() {
  const projetos = [
    {
      nome: "Study Flow",
      descricao:
        "Aplicação Web Pomodoro com sessões personalizadas, animações motivacionais, e design responsivo. Feito com React, Vite, TypeScript, Tailwind e Vanta.js. Usa arquitetura MVS (Model-View-State) e localStorage para salvar o progresso.",
      imagem: "/imagens/study-flow.png",
      link: "https://studyflow-blond.vercel.app/welcome",
    },
    {
      nome: "OrganizaDocs",
      descricao: "Esse projeto foi desenvolvido com Python para organizar automaticamente os arquivos de uma pasta local, separando os arquivos por tipo (PDFs, imagens, Videos, Códigos e Etc) em subspastas, e gerando relatórios completo com a data da modificação de cada item",
      imagem: "/imagens/organizaDocs2.png",
      link: "https://github.com/adriolivdev/OrganizaDocs/tree/main/dist",
    },
    {
      nome: "Projeto 3",
      descricao: "Resumo do Projeto 3 com funcionalidades e tecnologias.",
      imagem: "/images/projeto3-preview.png",
      link: "#",
    },
  ];

  return (
    <section id="projetos" className="scroll-section p-8 bg-black text-white text-center">
      <h2 className="text-3xl mb-6 font-bold">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded-lg border-2 border-pink-500 hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <h3 className="text-xl mb-2">{projeto.nome}</h3>

            {/* Preview em imagem com hover animado */}
            <div className="relative group overflow-hidden rounded mb-4">
              <img
                src={projeto.imagem}
                alt={`Preview de ${projeto.nome}`}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300"
              >
                <span className="text-pink-500 font-bold">Ver Projeto</span>
              </a>
            </div>

            <p className="text-justify text-sm">{projeto.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
