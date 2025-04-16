// src/components/WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5592986097514?text=Olá%20Adriane,%20gostaria%20de%20mais%20informações%sobre20%seus20%trabalhos!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-pink-500 hover:bg-pink-600 transition-colors rounded-full p-4 z-50 animate-bounce hover:animate-pulse hover:shadow-[0_0_30px_rgba(255,20,147,0.9)]"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </a>
  );
}
