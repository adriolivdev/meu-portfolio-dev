// src/components/Trajetoria.jsx
import React from "react";

function Trajetoria() {
  // Função para abrir a imagem em uma nova aba responsiva com botão "Voltar para o Portfólio"
  const openImageInNewTab = () => {
    // Caminho absoluto da imagem (para imagens na pasta public, use "/imagens/...")
    const imageUrl = "/imagens/trajetoria_V1.png";
    // Abre uma nova aba em branco
    const newWindow = window.open("", "_blank");

    if (newWindow) {
      // Define o conteúdo HTML da nova aba com meta viewport e estilos responsivos
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="pt">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Trajetória Profissional - Zoom</title>
            <style>
              body {
                margin: 0;
                padding: 20px;
                background: #000;
                color: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                font-family: Arial, sans-serif;
              }
              img {
                max-width: 100%;
                max-height: 90vh;
                object-fit: contain;
                border-radius: 8px;
                box-shadow: 0 0 20px rgba(0,0,0,0.8);
              }
              .button-container {
                margin-top: 20px;
              }
              button {
                background: #ff1493;
                border: none;
                color: #fff;
                padding: 10px 20px;
                font-size: 16px;
                border-radius: 5px;
                cursor: pointer;
                transition: background 0.3s ease;
              }
              button:hover {
                background: #ff69b4;
              }
              /* Ajuste para dispositivos pequenos */
              @media (max-width: 600px) {
                body {
                  padding: 10px;
                }
                button {
                  padding: 8px 16px;
                  font-size: 14px;
                }
              }
            </style>
          </head>
          <body>
            <img src="${imageUrl}" alt="Trajetória Profissional em Zoom" />
            <div class="button-container">
              <button onclick="window.close()">Voltar para o Portfólio</button>
            </div>
          </body>
        </html>
      `);
      newWindow.document.close(); // Finaliza a escrita e renderiza a nova aba
    } else {
      alert(
        "Não foi possível abrir a nova aba. Por favor, desative o bloqueador de pop-ups."
      );
    }
  };

  return (
    <section
      id="trajetoria"
      className="scroll-section p-8 bg-black text-white text-center md:text-left"
    >
      <h2 className="text-3xl mb-6">Minha Trajetória Profissional</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Imagem com clique para abrir a nova aba */}
        <div className="md:w-1/2 text-center font-bold">
          <img
            src="/imagens/trajetoria_V1.png"
            alt="Trajetória Profissional"
            className="rounded-lg shadow-lg w-full cursor-pointer hover:opacity-90 transition-opacity duration-300"
            onClick={openImageInNewTab}
          />
        </div>
        {/* Descrição */}
        <div className="md:w-1/2">
          <p className="text-justify">
          Comecei na indústria em 2020, adquirindo uma base sólida e experiências valiosas em ambientes corporativos, mas logo descobri minha paixão pela tecnologia e pelo mundo digital. Ao longo dos anos, desenvolvi habilidades em design, social media, análise de dados e tráfego pago, o que me permite encarar desafios de forma integrada e transformar ideias em soluções práticas e inovadoras. Em 2022, mergulhei intensamente no universo do desenvolvimento e, desde então, tenho evoluído como desenvolvedora full-stack, sempre me atualizando com as últimas tendências e ferramentas. Atualmente, curso Engenharia de Software, unindo minha experiência anterior com novas competências em programação. Meu objetivo é atuar como engenheira de software, contribuindo com soluções inovadoras e impactantes para o mercado.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Trajetoria;
