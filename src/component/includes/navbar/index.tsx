import React, { useState, useEffect } from 'react'
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background on scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='relative flex flex-col'>
      <nav
        className={`fixed top-0 left-0 w-full py-2 px-4 md:px-8 lg:px-12 z-40 transition-all duration-300 ease-in-out 
        ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href='/' className="flex-shrink-0 hidden sm:block">
              <img
                src="/assets/logo.png"
                className="rounded-2xl"
                alt="Logo"
                width={40}
                height={40}
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-grow justify-center items-center">
              <ul className="flex pl-36 justify-center gap-16 items-center text-center">
                <li className="text-grey font-bold text-sm">
                  <a href='/'>Beranda</a>
                </li>
                <li className="text-grey font-bold text-sm">
                  <a href='/profil'>Profil</a>  
                </li>
                <li className="text-grey font-bold text-sm">
                  <a href='/artikel'>Artikel</a>
                </li>
                <li className="text-grey font-bold text-sm">
                  <a href='/tentang'>Tentang</a>
                </li>
                <li className="text-grey font-bold text-sm">
                  <a href='/kontak'>Kontak</a>
                </li>
              </ul>
            </div>

            {/* Account Menu */}
            <div className="lg:flex hidden items-center gap-2">
              <button className="bg-blue-700 text-white py-1 px-8 rounded-full hover:scale-105 hover:bg-blue-800 transition">
                Jelajahi Sekarang
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                className="p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-6 h-6 text-grey" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[70px] bg-white z-40 transition-all duration-300 ease-in-out overflow-hidden 
          ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        style={{
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <div className="container mx-auto px-4 py-2 flex justify-center items-center min-h-[calc(100vh-70px)]">
          <ul className="flex flex-col items-center gap-4 text-center">
            <li>
              <a href='/' className="block py-2 text-grey font-bold text-xl">Beranda</a>
            </li>
            <li>
              <a href='/profil' className="block py-2 text-grey font-bold text-xl">Profil</a>
            </li>
            <li>
              <a href='/artikel' className="block py-2 text-grey font-bold text-xl">Artikel</a>
            </li>
            <li>
              <a href='/tentang' className="block py-2 text-grey font-bold text-xl">Tentang</a>
            </li>
            <li>
              <a href='/kontak' className="block py-2 text-grey font-bold text-xl">Kontak</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
