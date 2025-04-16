// src/components/GitHubContributions.jsx
import React, { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';

export default function GitHubContributions({ darkMode = true }) {
  // Estados para controlar o tamanho e a margem dos blocos conforme a tela
  const [blockSize, setBlockSize] = useState(15);
  const [blockMargin, setBlockMargin] = useState(5);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width < 400) {
        // Telas extra pequenas (até ~400px)
        setBlockSize(8);
        setBlockMargin(1);
      } else if (width < 640) {
        // Celulares comuns (até ~640px)
        setBlockSize(10);
        setBlockMargin(2);
      } else if (width < 1024) {
        // Tablets (até ~1024px)
        setBlockSize(12);
        setBlockMargin(3);
      } else {
        // Desktops (acima de 1024px)
        setBlockSize(15);
        setBlockMargin(5);
      }
    }

    handleResize(); // Ajusta ao montar
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Tema para modo escuro e modo claro (necessário para react-github-calendar)
  const theme = darkMode
    ? {
        text: "#ffffff",
        dark: [
          "#161B22", // 0 contribuições
          "#ffb6c1", // nível 1
          "#ff85c1", // nível 2
          "#ff69b4", // nível 3
          "#ff1493", // nível 4 (máximo)
        ],
      }
    : {
        text: "#000000",
        light: [
          "#ebedf0", // 0 contribuições
          "#c6e48b", // nível 1
          "#7bc96f", // nível 2
          "#239a3b", // nível 3
          "#196127", // nível 4 (máximo)
        ],
      };

  // Ajuste de classes para a seção
  const sectionClass = darkMode
    ? "p-4 md:p-6 bg-gray-900 text-white scroll-section"
    : "p-4 md:p-6 bg-white text-black scroll-section";

  return (
    <section className={`${sectionClass} max-w-6xl mx-auto`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        Minhas Contribuições no GitHub
      </h2>
      {/* Removi overflow-x-auto para evitar rolagem horizontal e, em vez disso,
          confiamos 100% em blocos menores nos breakpoints menores */}
      <GitHubCalendar
        username="adriolivdev"
        blockSize={blockSize}
        blockMargin={blockMargin}
        theme={theme}
        fontSize={14}
        showWeekdayLabels
      />
    </section>
  );
}
