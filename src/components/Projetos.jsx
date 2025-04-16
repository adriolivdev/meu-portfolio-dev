// src/components/Projetos.jsx
import React from 'react';
import {
  FaBullseye,
  FaTools,
  FaProjectDiagram,
  FaCheckCircle,
  FaHourglassHalf,
} from 'react-icons/fa';

function getStatusIcon(status) {
  if (status === "Finalizado") {
    return <FaCheckCircle className="text-green-500 inline-block mr-1" />;
  } else if (status === "Em desenvolvimento") {
    return <FaHourglassHalf className="text-yellow-400 inline-block mr-1" />;
  }
  return null;
}

function Projetos() {
  const projetos = [
    {
      nome: "Study Flow",
      descricao:
        "Aplicação Web Pomodoro com sessões personalizadas, animações motivacionais, e design responsivo. Feito com React, Vite, TypeScript, Tailwind e Vanta.js. Usa arquitetura MVC (Model-View-Controller) e localStorage para salvar o progresso.",
      imagem: "/imagens/study-flow.png",
      link: "https://studyflow-blond.vercel.app/welcome",
      status: "Em desenvolvimento",
      objetivo: "Auxiliar no foco de estudos através do método Pomodoro.",
      stacks: ["React", "Vite", "TypeScript", "Tailwind CSS", "Vanta.js"],
      arquitetura: "MVC (Model-View-Controller)",
    },
    {
      nome: "OrganizaDocs",
      descricao:
        "Esse projeto foi desenvolvido com Python para organizar automaticamente os arquivos de uma pasta local, separando por tipo (PDFs, imagens, vídeos, códigos etc.), e gerando relatórios completos com a data de modificação de cada item.",
      imagem: "/imagens/organizaDocs2.png",
      link: "https://github.com/adriolivdev/OrganizaDocs/tree/main/dist",
      status: "Finalizado",
      objetivo: "Manter pastas locais organizadas de forma automatizada.",
      stacks: ["Python"],
      arquitetura: "Scripts e módulos internos",
    },
    {
      nome: "Kaizen-Landing page",
      descricao:
        "Landing page para a Kaizen Code Digital, agência que oferece soluções criativas e tecnológicas para microempreendedores e pequenas empresas. Implementa arquitetura modular, menu mobile animado, botão flutuante do WhatsApp, robô mascote interativo, React.js com Vite, Tailwind CSS, React Icons e Vanta.js. Deploy via Vercel.",
      imagem: "/imagens/kaizen-project.png",
      link: "https://kaizencode-landing.vercel.app/",
      status: "Em desenvolvimento",
      objetivo:
        "Apresentar os serviços da Kaizen Code Digital de forma clara e moderna.",
      stacks: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      arquitetura: "Componentização + Hooks",
    },
  ];

  return (
    <section id="projetos" className="scroll-section p-8 bg-black text-white text-center">
      <h2 className="text-3xl mb-6 font-bold">Projetos Recentes</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="relative flex flex-col h-full min-h-[550px] p-6 rounded-lg border-2 border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] transition-all transform hover:-translate-y-2 bg-gray-800"
          >
            {/* Título */}
            <h3 className="text-2xl mb-3 font-bold text-pink-400">
              {projeto.nome}
            </h3>

            {/* Imagem com efeito de hover */}
            <div className="relative group overflow-hidden rounded-lg mb-4">
              <img
                src={projeto.imagem}
                alt={`Preview de ${projeto.nome}`}
                className="w-full sm:h-64 md:h-56 lg:h-72 object-cover transform group-hover:scale-110 transition duration-300"
              />
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300"
              >
                <span className="text-pink-500 font-bold tracking-wide">
                  Ver Projeto
                </span>
              </a>
            </div>

            {/* Descrição principal */}
            <p className="text-sm text-gray-300 leading-relaxed text-justify mb-4">
              {projeto.descricao}
            </p>

            {/* Ícones e informações extras com espaçamento aumentado */}
            <div className="text-left text-sm text-gray-300 space-y-4 mb-4">
              {/* Objetivo */}
              <div className="flex items-start">
                <FaBullseye className="text-pink-500 w-4 h-4 mr-2 mt-1" />
                <p>
                  <span className="font-bold text-white">Objetivo:</span>{" "}
                  {projeto.objetivo}
                </p>
              </div>
              {/* Stacks */}
              <div className="flex items-start">
                <FaTools className="text-pink-500 w-4 h-4 mr-2 mt-1" />
                <p>
                  <span className="font-bold text-white">Stacks:</span>{" "}
                  {projeto.stacks.join(", ")}
                </p>
              </div>
              {/* Arquitetura com margem adicional */}
              <div className="flex items-start mt-2">
                <FaProjectDiagram className="text-pink-500 w-4 h-4 mr-2 mt-1" />
                <p>
                  <span className="font-bold text-white">Arquitetura:</span>{" "}
                  {projeto.arquitetura}
                </p>
              </div>
            </div>

            {/* Área de botões alinhada na parte inferior */}
            <div className="mt-auto flex flex-col items-center justify-center space-y-2">
              {/* Botão de Status (não clicável) */}
              <button
                disabled
                className="cursor-not-allowed py-2 px-4 text-sm font-semibold text-white rounded-md bg-pink-600 flex items-center"
              >
                {getStatusIcon(projeto.status)}
                <span className="ml-1">{projeto.status}</span>
              </button>
              {/* Botão "Ver Projeto" */}
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 text-sm font-semibold text-white rounded-md bg-pink-500 border-2 border-transparent transition-all duration-300 transform hover:bg-black hover:border-pink-500 hover:scale-105"
              >
                Ver Projeto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
