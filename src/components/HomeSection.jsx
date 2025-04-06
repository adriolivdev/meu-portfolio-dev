// src/HomeSection.jsx
import React, { useEffect, useState } from "react";

function HomeSection() {
  const [typewriterText, setTypewriterText] = useState("");

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
        if (currentChar === "<") {
          writingTag = true;
        }
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

  return (
    <section
      id="sobre"
      className="scroll-section p-8 bg-black text-white text-center md:text-left"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="md:w-1/2">
          <h2
            id="greeting"
            className="text-3xl mb-4"
            dangerouslySetInnerHTML={{ __html: typewriterText }}
          ></h2>
          <p className="text-justify">
            Sou desenvolvedora Full-Stack com experiência em HTML, CSS, JavaScript, React, Node.js, Python, SQL e iniciando Java. Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades e contribuir para projetos inovadores. Hoje, estou desenvolvendo projetos próprios, explorando novas linguagens e ferramentas, e focada em construir um portfólio que reflita tudo o que posso oferecer.
            <br />
          </p>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <img
            src="/v2_imagemprofile.jpg"
            alt="Adriane Oliveira"
            className="rounded-full shadow-lg w-48 md:w-64 animate-float"
            style={{ boxShadow: "0 0 20px #ff3f81" }}
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
