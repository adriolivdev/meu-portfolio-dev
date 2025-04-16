import React, { useEffect, useRef, useState } from "react";

function HomeSection() {
  const [typewriterText, setTypewriterText] = useState("");
  const vantaRef = useRef(null); // Referência para aplicar o efeito Vanta

  // Efeito de digitação do texto com saudação personalizada por horário
  useEffect(() => {
    const currentHour = new Date().getHours();
    let greetingMessage = "";
    if (currentHour < 12) {
      greetingMessage =
        '<strong>Bom dia! Eu sou Adriane Oliveira <span class="text-pink-500">&lt;Dev Full-Stack&gt;</span></strong>';
    } else if (currentHour < 18) {
      greetingMessage =
        '<strong>Boa tarde! Eu sou Adriane Oliveira <span class="text-pink-500">&lt;Dev Full-Stack&gt;</span></strong>';
    } else {
      greetingMessage =
        '<strong>Boa noite! Eu sou Adriane Oliveira <span class="text-pink-500">&lt;Dev Full-Stack&gt;</span></strong>';
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
        setTimeout(type, 30);
      }
    }
    type();
  }, []);

  // Aplica o efeito de fundo animado Vanta.NET
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
        color: 0xe32b6e,           // Rosa vibrante
        backgroundColor: 0x30007,  // Roxo escuro
      });
    }
  }, []);

  return (
    <section
      ref={vantaRef}
      id="sobre"
      className="scroll-section p-8 text-white text-center md:text-left relative overflow-hidden"
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Texto com efeito de quadro espelhado */}
        <div className="md:w-1/2 bg-black/40 border border-pink-500 shadow-[0_0_30px_5px_rgba(255,0,128,0.3)] backdrop-blur-md p-6 rounded-xl">
          <h2
            id="greeting"
            className="text-3xl mb-4"
            dangerouslySetInnerHTML={{ __html: typewriterText }}
          ></h2>
          <p className="text-justify">
           Desenvolvedora Full-Stack com experiência em tecnologias como HTML, CSS, JavaScript, React, Node.js, Python, SQL e, atualmente, iniciando em Java. Desde o início da minha carreira, sempre busquei aprender novas ferramentas e métodos que me permitissem criar soluções inteligentes e escaláveis. Acredito que cada projeto é uma oportunidade de evoluir e, por isso, estou constantemente experimentando novas linguagens e frameworks. Meu objetivo é unir criatividade com eficiência técnica, contribuindo para projetos inovadores e desafiadores.
          </p>
        </div>

        {/* Imagem dev com sombra neon */}
        <div className="md:w-1/2 flex justify-end">
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
