// src/components/Cursos.jsx
import React from 'react';

function Cursos() {
  const cursos = [
    {
      title: "Dev Full-Stack",
      certs: [
        { name: "Lógica de programação.", link: "https://link-para-certificado-frontend1.com" },
        { name: " Programming Básic.", link: "https://link-para-certificado-frontend2.com" },
        { name: "DB Developer.", link: "https://link-para-certificado-frontend3.com" },
        { name: "Object-Oriented Developer.", link: "https://link-para-certificado-frontend4.com" },
        { name: "Bootcamp Python AI Backend Developer.", link: "https://link-para-certificado-frontend5.com" },
        { name: "Git e Versionamento", link: "https://link-para-certificado-frontend6.com" },
        { name: "", link: "https://link-para-certificado-frontend7.com" },
        { name: "Figma para Devs", link: "https://link-para-certificado-frontend8.com" },
      ]
    },
    {
      title: "Análise de Dados",
      certs: [
        { name: "Excel avançado", link: "https://link-para-certificado-backend1.com" },
        { name: "Dashboards em Excel", link: "https://link-para-certificado-backend2.com" },
        { name: "SQL para Análise de Dados", link: "https://link-para-certificado-backend3.com" },
        { name: "Python para Análise de Dados", link: "https://link-para-certificado-backend4.com" },
        { name: "Power BI para análise de dados", link: "https://link-para-certificado-backend5.com" },
        { name: "Machine Learning com Python", link: "https://link-para-certificado-backend6.com" },

      ]
    },
    {
      title: "Gestão de Projetos",
      certs: [
        { name: " Lean Six Sigma Yellow Belt", link: "https://link-para-certificado-dados1.com" },
        { name: "Scrum Fundamentals Certified (SFC)", link: "https://link-para-certificado-dados2.com" },
        { name: "Management Projects-Google", link: "https://link-para-certificado-dados3.com" },

      ]
    },
    {
      title: "Soft skills",
      certs: [
        { name: "Gestão de Pessoas", link: "https://link-para-certificado-projetos1.com" },
        { name: "Gestão de Equipes", link: "https://link-para-certificado-projetos2.com" },
        { name: "Gestão de Conflitos", link: "https://link-para-certificado-projetos3.com" },
        { name: "Gestão de Tempo", link: "https://link-para-certificado-projetos4.com" },
        { name: "Rotinas Adminstrativas", link: "https://link-para-certificado-projetos5.com" },
      ]
    }
  ];

  return (
    <section id="cursos" className="scroll-section p-8 bg-black text-white text-center">
      <h2 className="text-3xl mb-6">Cursos e Certificações</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cursos.map((item, idx) => (
          <div key={idx} className="bg-gray-900 p-4 rounded-lg border-2 border-pink-500">
            <h3 className="text-xl mb-2">{item.title}</h3>
            <ul className="mt-2 text-justify">
              {item.certs.map((cert, i) => (
                <li key={i}>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-white">
                    {cert.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cursos;
