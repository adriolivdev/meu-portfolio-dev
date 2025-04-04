// src/components/Tecnologias.jsx
import React from 'react';

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
    "Figma", 
    "Metodologias Ágeis", 
    "Pacote Office"
  ];

  return (
    <section id="tecnologias" className="scroll-section p-8 bg-black text-white text-center">
      <h2 className="text-3xl mb-6">Tecnologias e Ferramentas</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {tecnologias.map((tech, i) => (
          <div key={i} className="bg-gray-900 p-4 rounded-lg border-2 border-pink-500 animate-float">
            <h3 className="text-xl">{tech}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tecnologias;
