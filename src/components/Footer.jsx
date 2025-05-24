import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import logo from '../assets/logo.svg';

export const Footer = () => {
  return (
    <footer className="bg-[#2A5159] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-start mb-8">
          <div className="flex flex-col items-center">
            <img src={logo}></img>
          </div>
        </div>
        
        <div className="flex justify-start space-x-6 mb-4">
          <span className="w-13 h-13 rounded-full bg-white shadow-md flex items-center justify-center mb-4 group-hover:bg-teal-50 group-hover:shadow-lg transition-all duration-300">
            <a href="#" className="text-[#2A5159] hover:text-yellow-300 transition-colors">
            <Instagram size={24} />
          </a>
          </span>
          <span className="w-13 h-13 rounded-full bg-white shadow-md flex items-center justify-center mb-4 group-hover:bg-teal-50 group-hover:shadow-lg transition-all duration-300">
            <a href="#" className="text-[#2A5159] hover:text-yellow-300 transition-colors">
            <Twitter size={24} />
          </a>
          </span>
          <span className="w-13 h-13 rounded-full bg-white shadow-md flex items-center justify-center mb-4 group-hover:bg-teal-50 group-hover:shadow-lg transition-all duration-300">
            <a href="#" className="hover:text-yellow-300 transition-colors">
            <Facebook size={24} className="text-[#2A5159]" />
          </a>
          </span>
        </div>

        <hr className="border-t border-gray-300 my-4" />
        
        <div className="text-start border-t border-teal-800 pt-4">
          <div className="flex justify-start space-x-6 mb-4 text-sm">
            <a href="#home" className="font-bold hover:text-yellow-300 transition-colors">Beranda</a>
            <a href="#guide" className="font-bold hover:text-yellow-300 transition-colors">Panduan</a>
            <a href="#news" className="font-bold hover:text-yellow-300 transition-colors">Literasi</a>
            <a href="#agenda" className="font-bold hover:text-yellow-300 transition-colors">Agenda</a>
          </div>
          <p className="text-sm text-white">&copy; {new Date().getFullYear()} Kelompok 12</p>
        </div>
      </div>
    </footer>
  );
};