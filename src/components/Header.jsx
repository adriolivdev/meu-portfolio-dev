// src/components/Header.jsx
import React from 'react';

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <header className="bg-black/95 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Portfólio de Adriane Oliveira</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-pink-500 text-2xl md:hidden">
          <i className="fas fa-bars"></i>
        </button>
        <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row gap-4">
            <li><a href="#sobre" className="text-pink-500 hover:text-white">Sobre</a></li>
            <li><a href="#trajetoria" className="text-pink-500 hover:text-white">Trajetória</a></li>
            <li><a href="#projetos" className="text-pink-500 hover:text-white">Projetos</a></li>
            <li><a href="#cursos" className="text-pink-500 hover:text-white">Cursos</a></li>
            <li><a href="#tecnologias" className="text-pink-500 hover:text-white">Tecnologias</a></li>
            <li><a href="#contato" className="text-pink-500 hover:text-white">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
