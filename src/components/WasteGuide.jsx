import React from 'react';
import pict1 from '../assets/pilahsampah.svg';
import pict2 from '../assets/plastik.svg';
import pict3 from '../assets/daurulang.svg';
import pict4 from '../assets/kompos.svg';
import pict5 from '../assets/volunteer.svg';
import pict6 from '../assets/edukasi.svg';

const GuideCard = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center transition-all duration-300 group">
      <div className="w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center mb-4 group-hover:bg-teal-50 group-hover:shadow-lg transition-all duration-300">
        <img
          src={image}
          alt={title}
          className="w-32 h-32 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-gray-800 text-center font-medium">{title}</h3>
    </div>
  );
};

export const WasteGuide = () => {
  const guideItems = [
    {
      image: pict1,
      title: "Pilah Sampah dari Sumbernya"
    },
    {
      image: pict2,
      title: "Kurangi Penggunaan Barang Sekali Pakai"
    },
    {
      image: pict3,
      title: "Daur Ulang dan Manfaatkan Kembali"
    },
    {
      image: pict4,
      title: "Olah Sampah Organik menjadi Kompos"
    },
    {
      image: pict5,
      title: "Ikuti Program Bersih Lingkungan"
    },
    {
      image: pict6,
      title: "Edukasi Diri dan Orang Lain"
    }
  ];

  return (
    <section id="guide" className="py-16 bg-gradient-to-b from-[#EBFCFF] to-[#3b7879d3]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-teal-800 mb-12 text-center">
          Panduan Pengelolaan Sampah
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-4">
          {guideItems.map((item, index) => (
            <GuideCard 
              key={index}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};