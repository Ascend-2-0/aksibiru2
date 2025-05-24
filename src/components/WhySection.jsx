import React from 'react';
import { HelpCircle } from 'lucide-react';
import gambar from '../assets/kurakura.svg';

export const WhySection = () => {
  return (
    <section className="py-16 bg-[#EBFCFF]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="flex items-center mb-0 ml-6">
              <h2 className="text-3xl font-extrabold text-teal-800">KENAPA</h2>
              <HelpCircle className="w-10 h-10 text-teal-700 ml-2" />
            </div>
            <h3 className="text-xl font-bold text-teal-800 mb-6 ml-6">itu bisa terjadi</h3>
            <p className="text-gray-700 ml-6 text-justify text-left md:text-justify leading-relaxed">
              Pencemaran sampah di lautan bisa disebabkan oleh beberapa faktor, seperti kurangnya pengelolaan sampah di darat, kebiasaan masyarakat membuang sampah sembarangan, aktivitas industri yang mencemari perairan, minimnya fasilitas daur ulang, lemahnya penegakan aturan, serta arus sungai dan laut yang membawa sampah ke lautan.
            </p>
          </div>
          <div className="md:w-1/2 mr-6">
            <img 
              src= {gambar} 
              alt="Turtle swimming in ocean with plastic waste" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};