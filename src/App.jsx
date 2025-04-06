// src/App.jsx
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import Trajetoria from './components/Trajetoria';
import Projetos from './components/Projetos';
import Cursos from './components/Cursos';
import Tecnologias from './components/Tecnologias';
import Idiomas from './components/Idiomas';
import Contato from './components/Contato';
import HolographicBackground from './components/HolographicBackground';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Estado para o modo escuro

  // Efeito Sparkle Global: o brilho segue o cursor em toda a página
  useEffect(() => {
    const handleMouseMove = (e) => {
      const sparkle = document.createElement('div');
      // A classe 'fixed' com z-index alto garante que o brilho fique sempre visível
      sparkle.className = 'sparkle fixed z-50 w-2.5 h-2.5 bg-pink-500 rounded-full';
      // Posiciona o brilho na posição do cursor
      sparkle.style.left = `${e.clientX}px`;
      sparkle.style.top = `${e.clientY}px`;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 800);
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Efeito Scroll Reveal Global: anima as seções quando entram na viewport
  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-section');
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-x-0');
          entry.target.classList.remove('opacity-0', '-translate-x-5');
        } else {
          entry.target.classList.remove('opacity-100', 'translate-x-0');
          entry.target.classList.add('opacity-0', '-translate-x-5');
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      section.classList.add('opacity-0', '-translate-x-5', 'transition', 'duration-800', 'ease-out');
      observer.observe(section);
    });
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <HolographicBackground />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="max-w-6xl mx-auto">
        <HomeSection />
        <Trajetoria />
        <Projetos />
        <Cursos />
        <Tecnologias />
        <Idiomas />
        <Contato />
      </main>
      <footer className="bg-black text-white text-center p-4">
        <p>&copy; 2025 Adriane Oliveira. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
