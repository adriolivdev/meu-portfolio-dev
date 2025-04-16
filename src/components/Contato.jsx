// src/components/Contato.jsx
import React from "react";

function Contato() {
  return (
    <section
      id="contato"
      className="scroll-section p-8 bg-black text-white text-center"
    >
      <h2 className="text-3xl mb-6 font-bold">Meus Contatos</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="md:w-1/2 text-left">
          <h3 className="text-xl mb-2">Entre em Contato Comigo</h3>
          <p className="text-justify">
            <i className="fas fa-envelope"></i>
            <a
              href="mailto:oadriaoliv@gmail.com"
              className="text-pink-500 hover:text-white ml-1"
            >
              oadriaoliv@gmail.com
            </a>
          </p>
          <p className="text-justify">
            <i className="fab fa-github"></i>
            <a
              href="https://github.com/adriolivdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-white ml-1"
            >
              Meu GitHub
            </a>
          </p>
          <p className="text-justify">
            <i className="fab fa-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/adriane-oliveira-369841247/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-white ml-1"
            >
              Meu LinkedIn
            </a>
          </p>
          <p className="text-justify">
            <i className="fab fa-instagram"></i>
            <a
              href="https://www.instagram.com/adriolivdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-white ml-1"
            >
              Meu Instagram
            </a>
          </p>
          <p className="mt-2 text-justify">
            <a
              href="/Adriane-Oliveira-Curriculo.pdf"
              download
              className="btn-download inline-block bg-pink-500 text-black py-2 px-4 rounded hover:bg-pink-600"
            >
              <i className="fas fa-file-download"></i> Baixe meu curriculo aqui✨
            </a>
          </p>
        </div>
        <div className="md:w-1/2 text-center">
          <img
            src="/imagens/redes_sociais.png"
            alt="Imagem de Contato"
            className="rounded-lg shadow-lg max-w-full w-3/4 mx-auto"
          />
        </div>
        
      </div>
    </section>
  );
}

export default Contato;
