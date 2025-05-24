import React from 'react';
import { Calendar } from 'lucide-react';
import gambar1 from '../assets/pantaiteluk.svg';
import gambar2 from '../assets/pantaikedongan.svg';

interface EventCardProps {
  image: string;
  location: string;
  title: string;
  date: string;
}

const EventCard: React.FC<EventCardProps> = ({ image, location, title, date }) => {
  return (
    <div className="group">
      <div className="h-60 w-90 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="bg-[#EBFCFF] w-90 p-4 mt-3 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
        <h4 className="font-bold text-[#2A5159] text-2xl text-center mb-1">{title}</h4>
        <div className="flex justify-center text-black">
          <span className="font-semibold text-sm mb-5">{location}</span>
        </div>
        <div className="flex justify-center text-black">
          <Calendar className="text-red-600 w-4 h-4 mr-2" />
          <span className="font-semibold text-sm">{date}</span>
        </div>
      </div>
    </div>
    
  );
};

export const VolunteerAgenda: React.FC = () => {
  const events = [
    {
      image: gambar1,
      location: "Pandeglang, Banten",
      title: "Pantai Teluk Labuan",
      date: "Minggu, 14 September 2025"
    },
    {
      image: gambar2,
      location: "Badung, Bali",
      title: "Pantai Kedongan",
      date: "Minggu, 7 Desember 2025"
    }
  ];

  return (
    <section id="agenda" className="py-16 bg-gradient-to-b from-[#D2BDA2] to-[#AA9B87]">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">
          Agenda Relawan
        </h2>
        
        <div className="hidden md:flex items-start justify-center gap-6 relative">
          <EventCard {...events[0]} />

          <div className="w-px h-40 bg-white h-auto mx-4" />

          <EventCard {...events[1]} />
        </div>

        <div className="md:hidden grid grid-cols-1 gap-6">
          {events.map((event, index) => (
            <EventCard 
              key={index}
              image={event.image}
              location={event.location}
              title={event.title}
              date={event.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};