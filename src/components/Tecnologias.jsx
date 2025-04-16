// src/components/Tecnologias.jsx
import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiMysql,
  SiPostgresql,
} from 'react-icons/si';
import { FaDatabase, FaGitAlt, FaTasks, FaMicrosoft } from 'react-icons/fa';

function Tecnologias() {
  const tecnologias = [
    "HTML5", 
    "CSS3", 
    "JavaScript", 
    "React", 
    "Next.js", 
    "Node.js", 
    "TypeScript", 
    "Tailwind CSS", 
    "Python", 
    "FastAPI", 
    "SQL", 
    "Git & GitHub", 
    "MySQL", 
    "PostgreSQL", 
    "Metodologias Ágeis", 
    "Pacote Office"
  ];

  // Mapeamento dos ícones correspondentes
  const techIcons = {
    "HTML5": <SiHtml5 className="text-4xl mx-auto" />,
    "CSS3": <SiCss3 className="text-4xl mx-auto" />,
    "JavaScript": <SiJavascript className="text-4xl mx-auto" />,
    "React": <SiReact className="text-4xl mx-auto" />,
    "Next.js": <SiNextdotjs className="text-4xl mx-auto" />,
    "Node.js": <SiNodedotjs className="text-4xl mx-auto" />,
    "TypeScript": <SiTypescript className="text-4xl mx-auto" />,
    "Tailwind CSS": <SiTailwindcss className="text-4xl mx-auto" />,
    "Python": <SiPython className="text-4xl mx-auto" />,
    "FastAPI": <SiFastapi className="text-4xl mx-auto" />,
    "SQL": <FaDatabase className="text-4xl mx-auto" />,
    "Git & GitHub": <FaGitAlt className="text-4xl mx-auto" />,
    "MySQL": <SiMysql className="text-4xl mx-auto" />,
    "PostgreSQL": <SiPostgresql className="text-4xl mx-auto" />,
    "Metodologias Ágeis": <FaTasks className="text-4xl mx-auto" />,
    "Pacote Office": <FaMicrosoft className="text-4xl mx-auto" />,
  };

  return (
    <section id="tecnologias" className="scroll-section p-8 bg-black text-white text-center">
      <h2 className="text-3xl mb-6 font-bold">Tecnologias e Ferramentas</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {tecnologias.map((tech, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center justify-center bg-gray-900 p-4 rounded-lg border-2 border-transparent animate-neon-border animate-float"
          >
            <div className="mb-2">
              {techIcons[tech] || <span>{tech}</span>}
            </div>
            <h3 className="text-xl">{tech}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tecnologias;
