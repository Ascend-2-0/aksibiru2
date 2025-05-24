import React from 'react';
import { HelpCircle } from 'lucide-react';
import gambar from '../assets/sampah.svg';

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-16  bg-[#EBFCFF]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="md:w-1/2">
            <div className="flex justify-end mb-0">
              <h2 className="text-3xl font-extrabold text-teal-800 ">APAKAH</h2>
              <HelpCircle className="w-10 h-10 text-teal-700 ml-2 mr-7" />
            </div>
            <h3 className="text-xl font-bold text-teal-800 text-right mr-26 mb-6">bisa diatasi</h3>
            <p className="text-gray-700 text-right mr-6 text-justify text-left md:text-justify leading-relaxed">
              Tentu saja bisa. Masalah sampah dapat diatasi melalui upaya pencegahan dan pengelolaan yang tepat. Meski sering dianggap sebagai hal kecil, jika dilakukan secara konsisten, tindakan sederhana ini akan memberikan dampak besar bagi kelestarian lingkungan. Karena itu, dibutuhkan kesadaran dari setiap individu untuk lebih peduli terhadap alam dan bersama-sama menjaga kebersihan lingkungan sekitar.
            </p>
          </div>
          <div className="md:w-1/2 ml-6">
            <img 
              src={gambar} 
              alt="People cleaning beach from trash" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};