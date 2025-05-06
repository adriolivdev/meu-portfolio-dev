// src/App.jsx
import React, { useEffect, useState, useCallback } from 'react';
import VantaBackground from './components/VantaBackground';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import Trajetoria from './components/Trajetoria';
import Projetos from './components/Projetos';
import Cursos from './components/Cursos';
import Tecnologias from './components/Tecnologias';
import Idiomas from './components/Idiomas';
import GitHubContributions from './components/GitHubContributions';
import Contato from './components/Contato';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastSparkleTime, setLastSparkleTime] = useState(0);

  // Efeito sparkle otimizado (limita para no máximo 1 sparkle a cada 100ms)
  const handleMouseMove = useCallback((e) => {
    const now = Date.now();
    if (now - lastSparkleTime < 100) return;
    setLastSparkleTime(now);

    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle fixed z-50 w-2.5 h-2.5 bg-pink-500 rounded-full pointer-events-none';
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 600); // duração menor para aliviar o DOM
  }, [lastSparkleTime]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Animações de entrada otimizadas com `once: true` e `unobserve` após entrada
  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-section');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-x-0');
            entry.target.classList.remove('opacity-0', '-translate-x-5');
            obs.unobserve(entry.target); // Desativa após animação
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => {
      section.classList.add('opacity-0', '-translate-x-5', 'transition', 'duration-700', 'ease-out');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <VantaBackground />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="pt-24 max-w-6xl mx-auto">
        <HomeSection />
        <Trajetoria />
        <Projetos />
        <Cursos />
        <Tecnologias />
        <GitHubContributions />
        <Idiomas />
        <Contato />
      </main>
      <footer className="bg-black text-white text-center p-4">
        <p>&copy; 2025 Adriane Oliveira. Todos os direitos reservados.</p>
      </footer>
      <WhatsAppButton />
    </div>
  );
}

export default App;
