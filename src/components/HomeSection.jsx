// src/components/HomeSection.jsx
import React, { useEffect, useRef, useState } from "react";

function HomeSection() {
  const [typewriterText, setTypewriterText] = useState("");
  const vantaRef = useRef(null);

  // Efeito de digitação com saudação personalizada
  useEffect(() => {
    const currentHour = new Date().getHours();
    let greetingMessage = "";
    if (currentHour < 12) {
      greetingMessage = `
        <strong>Bom dia!<br/>
        Eu sou Adriane Oliveira<br/>
        <span class="text-pink-500">&lt;Dev Full-Stack&gt;</span></strong>
      `;
    } else if (currentHour < 18) {
      greetingMessage = `
        <strong>Boa tarde!<br/>
        Eu sou Adriane Oliveira<br/>
        <span class="text-pink-500">&lt;Dev Full-Stack&gt;</span></strong>
      `;
    } else {
      greetingMessage = `
        <strong>Boa noite!<br/>
        Eu sou Adriane Oliveira<br/>
        <span class="text-pink-500">&lt;Dev Full-Stack&gt;</span></strong>
      `;
    }

    let i = 0;
    let result = "";
    let tag = "";
    let writingTag = false;

    function type() {
      if (i < greetingMessage.length) {
        const currentChar = greetingMessage[i];
        if (currentChar === "<") writingTag = true;
        if (writingTag) {
          tag += currentChar;
        } else {
          result += currentChar;
        }
        if (currentChar === ">") {
          writingTag = false;
          result += tag;
          tag = "";
        }
        setTypewriterText(result);
        i++;
        setTimeout(type, 20);
      }
    }
    type();
  }, []);

  // Aplica o efeito de fundo animado Vanta.NET com linhas mais abertas
  useEffect(() => {
    if (window.VANTA && window.THREE) {
      window.VANTA.NET({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xe32b6e,            // Rosa vibrante
        backgroundColor:  0x000000,   // Roxo escuro
        points: 10.0,                // mais pontos na rede
        maxDistance: 30.0,          // distância maior para traçar as linhas
        spacing: 25.0,              // aumenta o espaçamento da grid
      });
    }
  }, []);

  return (
    <section
      ref={vantaRef}
      id="sobre"
      className="scroll-section p-8 text-white text-left relative overflow-hidden"
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        {/* Texto */}
        <div className="w-full md:w-1/2 bg-black/40 border border-pink-500 shadow-[0_0_30px_5px_rgba(255,0,128,0.3)] backdrop-blur-md p-6 rounded-xl">
          <h2
            id="greeting"
            className="text-3xl mb-4 tracking-tighter md:tracking-tight"
            dangerouslySetInnerHTML={{ __html: typewriterText }}
          />
          <p
            className="leading-relaxed text-left"
            style={{ wordSpacing: "-0.1em" }}
          >
            Desenvolvedora Full-Stack com experiência em HTML, CSS, JavaScript,
            React, Node.js, Python, SQL e, atualmente, iniciando em Java. Desde o
            início da minha carreira, sempre busquei aprender novas ferramentas e métodos
            para criar soluções inteligentes e escaláveis. Acredito que cada projeto é uma
            oportunidade de evoluir, por isso estou constantemente experimentando novas linguagens
            e frameworks para unir criatividade com eficiência técnica, contribuindo para projetos
            inovadores e desafiadores.
          </p>
        </div>

        {/* Imagem: mobile centralizada, desktop à direita */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/imagens/v2_imagemprofile.jpg"
            alt="Adriane Oliveira"
            className="rounded-full shadow-lg w-48 md:w-64 animate-float"
            style={{ boxShadow: "0 0 15px #ff3f81" }}
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
