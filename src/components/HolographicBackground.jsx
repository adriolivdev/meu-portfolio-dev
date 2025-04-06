// src/components/HolographicBackground.jsx
import React, { useRef, useEffect } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const HolographicBackground = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const vantaEffect = NET({
      el: backgroundRef.current,
      THREE: THREE,
      color: 0xff69b4,          // Cor rosa para os pontos e linhas
      backgroundColor: 0xffffff, // Fundo branco para destacar o efeito
      points: 15.0,             // Número de pontos
      maxDistance: 20.0,        // Distância máxima para as conexões
      spacing: 15.0,            // Espaçamento entre os pontos
      showDots: true,           // Exibe os pontos
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={backgroundRef} style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default HolographicBackground;
