import React from 'react';
import news1 from '../assets/berita1.svg';
import news2 from '../assets/berita2.svg';
import news3 from '../assets/berita3.svg';

const NewsCard = ({ image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-100 overflow-hidden">
        <img 
          src={image} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
    </div>
  );
};

export const NewsSection = () => {
  const newsItems = [
    {
      image: news1,
    },
    {
      image: news2,
    },
    {
      image: news3,
    }
  ];

  return (
    <section id="news" className="bg-gradient-to-b from-[#0C272D] to-[#EBFCFF]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <NewsCard 
              key={index}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};