// src/components/Header.jsx
import React from 'react';
import MobileMenu from './MobileMenu'; // Certifique-se de que este componente existe

export default function Header() {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center p-6 border-b border-pink-500 bg-black z-[60]">
      {/* Área com logo e nome do portfólio */}
      <div className="flex items-center gap-3">
        <img 
          src="/imagens/logo-adrio.jpg" 
          alt="Logo do Portfólio" 
          className="h-10" 
        />
        <h1 className="text-2xl font-bold text-pink-500">
          adriolivdev
        </h1>
      </div>

      {/* Menu desktop – visível apenas em telas médias ou maiores */}
      <nav className="hidden md:flex gap-6 items-center text-sm font-semibold">
        <a href="#sobre" className="text-pink-500 hover:text-white transition">
          Sobre
        </a>
        <a href="#trajetoria" className="text-pink-500 hover:text-white transition">
          Trajetória
        </a>
        <a href="#projetos" className="text-pink-500 hover:text-white transition">
          Projetos
        </a>
        <a href="#cursos" className="text-pink-500 hover:text-white transition">
          Cursos & Certificações
        </a>
        <a href="#tecnologias" className="text-pink-500 hover:text-white transition">
          Tecnologias
        </a>
        <a
          href="#contato"
          className="bg-pink-500 px-4 py-2 rounded-md text-white hover:bg-pink-600 transition"
        >
          Contatos
        </a>
      </nav>

      {/* Menu mobile (hambúrguer) – visível apenas em telas menores */}
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
}
