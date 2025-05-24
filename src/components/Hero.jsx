import React from 'react';
import hero from '../assets/hero.svg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url(${hero})`,
          }}
        />
        <div className="absolute inset-0 bg-teal-900/10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-7xl md:text-8xl font-extrabold text-white mb-4 drop-shadow-lg"
            style={{WebkitTextStroke: '3px #2A5159',}}>
          350.000
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-white text-xl md:text-2xl font-medium"
            style={{textShadow: '1px 1px 4px rgba(0, 0, 0, 1)',}}>
          <span className="font-bold">RIBU TON</span>
          <span className="px-3 py-1 text-red-600 font-extrabold text-5xl">SAMPAH</span>
          <span className="font-bold">TERCEMAR</span>
          <span className="font-bold">DI</span>
          <span className="font-extrabold text-5xl"> LAUTAN</span>
          <span className="font-bold"> INDONESIA</span>
        </div>
      </div>
    </section>
  );
};