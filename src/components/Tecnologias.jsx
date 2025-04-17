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

  const techIcons = {
    "HTML5": <SiHtml5 className="text-3xl text-orange-500" />,
    "CSS3": <SiCss3 className="text-3xl text-blue-500" />,
    "JavaScript": <SiJavascript className="text-3xl text-yellow-300" />,
    "React": <SiReact className="text-3xl text-cyan-400" />,
    "Next.js": <SiNextdotjs className="text-3xl text-white" />,
    "Node.js": <SiNodedotjs className="text-3xl text-green-400" />,
    "TypeScript": <SiTypescript className="text-3xl text-blue-400" />,
    "Tailwind CSS": <SiTailwindcss className="text-3xl text-sky-300" />,
    "Python": <SiPython className="text-3xl text-yellow-200" />,
    "FastAPI": <SiFastapi className="text-3xl text-teal-400" />,
    "SQL": <FaDatabase className="text-3xl text-purple-400" />,
    "Git & GitHub": <FaGitAlt className="text-3xl text-orange-400" />,
    "MySQL": <SiMysql className="text-3xl text-blue-300" />,
    "PostgreSQL": <SiPostgresql className="text-3xl text-blue-500" />,
    "Metodologias Ágeis": <FaTasks className="text-3xl text-pink-400" />,
    "Pacote Office": <FaMicrosoft className="text-3xl text-indigo-300" />,
    "Power BI": <FaMicrosoft className="text-3xl text-yellow-500" />,
    "Github": <FaGitAlt className="text-3xl text-purple-500" />,
  };

  return (
    <section id="tecnologias" className="scroll-section p-8 bg-black text-white text-center">
      <h2 className="text-3xl mb-6 font-bold">Tecnologias e Ferramentas</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center">
        {tecnologias.map((tech, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center w-24 h-24 bg-gray-800 rounded-full shadow-md hover:scale-105 transition-transform"
          >
            <div className="mb-1">
              {techIcons[tech] || <span className="text-sm">{tech}</span>}
            </div>
            <p className="text-xs text-gray-200 text-center px-1 leading-tight">{tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tecnologias;
