// src/components/Cursos.jsx
import React from 'react';

function Cursos() {
  const cursos = [
    {
      title: "Frontend",
      certs: [
        { name: "Certificado Frontend 1", link: "https://link-para-certificado-frontend1.com" },
        { name: "Certificado Frontend 2", link: "https://link-para-certificado-frontend2.com" }
      ]
    },
    {
      title: "Backend",
      certs: [
        { name: "Certificado Backend 1", link: "https://link-para-certificado-backend1.com" },
        { name: "Certificado Backend 2", link: "https://link-para-certificado-backend2.com" }
      ]
    },
    {
      title: "Dados",
      certs: [
        { name: "Certificado Dados 1", link: "https://link-para-certificado-dados1.com" },
        { name: "Certificado Dados 2", link: "https://link-para-certificado-dados2.com" }
      ]
    },
    {
      title: "Projetos",
      certs: [
        { name: "Certificado Projetos 1", link: "https://link-para-certificado-projetos1.com" },
        { name: "Certificado Projetos 2", link: "https://link-para-certificado-projetos2.com" }
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
