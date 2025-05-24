import React from 'react';
import { Star } from 'lucide-react';
import logoijo from '../assets/logoijo.svg';

export const AboutSection = () => {
  return (
    <section className="py-16 bg-[#EBFCFF]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-[#478B99]/30 p-8 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <div className="flex items-center">
              <Star fill="#2A5159" className="w-6 h-6 text-[#2A5159] mr-2" />
              <img src={logoijo}></img>
              <Star fill="#2A5159" className="w-6 h-6 text-[#2A5159] ml-2" />
            </div>
          </div>
          <p className="text-black text-center leading-relaxed">
            Website Aksi Biru merupakan platform peduli lingkungan yang menyediakan berbagai informasi seputar pengelolaan sampah, serta dilengkapi dengan fitur pelaporan sampah. Melalui fitur ini, masyarakat dapat berpartisipasi langsung dengan melaporkan lokasi tumpukan sampah di lingkungan sekitar, sehingga dapat segera ditindaklanjuti oleh pihak terkait.
          </p>
        </div>
      </div>
    </section>
  );
};