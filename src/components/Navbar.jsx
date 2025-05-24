import React, { useState, useEffect } from 'react';
import { Menu, X} from 'lucide-react';
import logo from '../assets/logo.svg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#2A5159] backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-white flex items-center">
            <img src={logo} alt="logo"></img>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="font-bold text-white hover:text-yellow-300 transition-colors">Beranda</a>
          <a href="#guide" className="font-bold text-white hover:text-yellow-300 transition-colors">Panduan</a>
          <a href="#report" className="font-bold text-white hover:text-yellow-300 transition-colors">Laporan</a>
          <a href="#agenda" className="font-bold text-white hover:text-yellow-300 transition-colors">Agenda</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-teal-800 shadow-lg">
          <div className="flex flex-col px-4 pt-2 pb-4 space-y-3">
            <a 
              href="#" 
              className="text-white hover:bg-teal-700 px-3 py-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </a>
            <a 
              href="#guide" 
              className="text-white hover:bg-teal-700 px-3 py-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              Panduan
            </a>
            <a 
              href="#report" 
              className="text-white hover:bg-teal-700 px-3 py-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              Laporan
            </a>
            <a 
              href="#agenda" 
              className="text-white hover:bg-teal-700 px-3 py-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              Agenda
            </a>
          </div>
        </div>
      )}
    </header>
  );
};