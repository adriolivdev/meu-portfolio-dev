import React from 'react';

function Cursos() {
  const cursos = [
    {
      title: "Dev Full-Stack",
      certs: [
        { name: "Lógica de programação." },
        { name: "Programming Básic." },
        { name: "DB Developer." },
        { name: "Object-Oriented Developer." },
        { name: "Bootcamp Python AI Backend Developer." },
        { name: "Git e Versionamento" },
        { name: "" },
        { name: "Figma para Devs" },
      ]
    },
    {
      title: "Análise de Dados",
      certs: [
        { name: "Excel avançado" },
        { name: "Dashboards em Excel" },
        { name: "SQL para Análise de Dados" },
        { name: "Python para Análise de Dados" },
        { name: "Power BI para análise de dados" },
        { name: "Machine Learning com Python" },
      ]
    },
    {
      title: "Gestão de Projetos",
      certs: [
        { name: "Lean Six Sigma Yellow Belt" },
        { name: "Scrum Fundamentals Certified (SFC)" },
        { name: "Management Projects-Google" },
      ]
    },
    {
      title: "Soft skills",
      certs: [
        { name: "Gestão de Pessoas" },
        { name: "Gestão de Equipes" },
        { name: "Gestão de Conflitos" },
        { name: "Gestão de Tempo" },
        { name: "Rotinas Administrativas" },
      ]
    }
  ];

  return (
    <section id="cursos" className="scroll-section p-8 bg-black text-white text-center">
      <h2 className="text-3xl mb-6">Cursos e Certificações</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cursos.map((item, idx) => (
          <div key={idx} className="bg-gray-900 p-4 rounded-lg border-2 border-pink-500 text-left">
            <h3 className="text-xl mb-2 text-center">{item.title}</h3>
            <ul className="mt-2 space-y-1">
              {item.certs.map((cert, i) => (
                cert.name && (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-pink-400">-</span>
                    <span>{cert.name}</span>
                  </li>
                )
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cursos;
