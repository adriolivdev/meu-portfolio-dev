// src/components/Trajetoria.jsx
import React from 'react';

function Trajetoria() {
  return (
    <section id="trajetoria" className="scroll-section p-8 bg-black text-white text-center md:text-left">
      <h2 className="text-3xl mb-6">Minha Trajetória Profissional</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="md:w-1/2 text-center">
          <img src="/trajetoria_V1.png" alt="Trajetória Profissional" className="rounded-lg shadow-lg max-w-full" />
        </div>
        <div className="md:w-1/2">
          <p className="text-justify">
            Comecei na indústria, mas logo descobri minha paixão pela tecnologia
            e pelo mundo digital. Ao longo dos anos, adquiri experiência em
            design, social media, análise de dados e tráfego pago, o que me
            permite encarar desafios de forma integrada. Essas vivências me
            ajudam a transformar ideias em soluções práticas e inovadoras. Estou
            sempre aprendendo algo novo e me atualizando com as últimas
            tendências e ferramentas para oferecer resultados que realmente
            façam a diferença. Hoje, uni essa experiência com competências em
            programação para desenvolver soluções inovadoras como dev full-stack
            e futuramente engenheira de software.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Trajetoria;
