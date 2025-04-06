// src/components/Idiomas.jsx
import React from 'react';

function Idiomas() {
  const idiomas = [
    { nome: "Português", nivel: "Nativo" },
    { nome: "Inglês", nivel: "Avançado" },
    { nome: "Espanhol", nivel: "Intermediário" }
  ];

  return (
    <section id="idiomas" className="scroll-section p-8 bg-black text-white">
      <h2 className="text-3xl mb-6 text-center">Idiomas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {idiomas.map((item, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg border-2 border-pink-500 hover:-translate-y-2 transition transform">
            <h3 className="text-xl mb-2 text-center">{item.nome}</h3>
            <p className="text-center">{item.nivel}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Idiomas;
