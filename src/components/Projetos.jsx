// src/components/Projetos.jsx
import React from 'react';

function Projetos() {
  const projetos = ["Projeto 1", "Projeto 2", "Projeto 3"];
  return (
    <section id="projetos" className="scroll-section p-8 bg-black text-white text-center">
      <h2 className="text-3xl mb-6">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projetos.map((projeto, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg border-2 border-pink-500 hover:-translate-y-2 transition transform">
            <h3 className="text-xl mb-2">{projeto}</h3>
            <p className="text-justify">
              {projeto === "Projeto 1" && "Descrição breve do Projeto 1, destacando tecnologias e desafios superados."}
              {projeto === "Projeto 2" && "Descrição breve do Projeto 2, com informações sobre a implementação e resultados."}
              {projeto === "Projeto 3" && "Descrição breve do Projeto 3, ressaltando funcionalidades e diferenciais."}
            </p>
            <a href="#" className="text-pink-500 hover:text-white mt-2 inline-block">Ver Projeto</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
