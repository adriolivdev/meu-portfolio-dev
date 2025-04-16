// src/components/MobileMenu.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão para abrir o menu (hambúrguer) */}
      <button
        aria-label="Abrir Menu"
        onClick={() => setIsOpen(true)}
        className="text-pink-500 text-3xl hover:text-white transition-colors"
      >
        <FaBars />
      </button>

      {isOpen && (
        <div className="fixed top-0 right-0 h-screen w-2/3 sm:w-1/3 bg-black z-50 shadow-md">
          <div className="relative flex flex-col p-6 h-full">
            {/* Botão para fechar o menu */}
            <button
              aria-label="Fechar Menu"
              onClick={() => setIsOpen(false)}
              className="text-pink-500 text-3xl absolute top-4 right-4 hover:text-white transition-colors"
            >
              <FaTimes />
            </button>

            {/* Menu de navegação */}
            <nav className="mt-14 text-lg space-y-6">
              <a
                href="#sobre"
                className="block text-pink-500 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#trajetoria"
                className="block text-pink-500 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Trajetória
              </a>
              <a
                href="#projetos"
                className="block text-pink-500 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projetos
              </a>
              <a
                href="#cursos"
                className="block text-pink-500 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Cursos
              </a>
              <a
                href="#tecnologias"
                className="block text-pink-500 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tecnologias
              </a>
              <a
                href="#contato"
                className="block bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
