import React, { useState } from 'react'
import { Menu } from 'lucide-react';

interface NavbarProps {
    showBackground: string;
}

export default function Navbar({

}) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className='relative flex flex-col 
      before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 
      before:opacity-25 before:z-0'>
      <nav className={`fixed top-0 left-0 w-full py-2 px-4 md:px-8 lg:px-12 z-40 transition-all duration-300 ease-in-out
        ${isMobile ? 'bg-white' : 'bg-transparent shadow-md'}`}>
        <div className="container mx-auto z-30">
          <div className="flex items-center justify-between">
            {/* Logo - visible on both desktop and mobile */}
            <a href='' className="flex-shrink-0">
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
                <li data-aos="zoom-in" className="text-grey font-bold text-sm">
                  <a href=''>Beranda</a>
                </li>
                <li data-aos="zoom-in" className="text-grey font-bold text-sm">
                  <a href=''>Profil</a>
                </li>
                <li data-aos="zoom-in" className="text-grey font-bold text-sm">
                  <a href=''>Artikel</a>
                </li>
                <li data-aos="zoom-in" className="text-grey font-bold text-sm">
                  <a href=''>Tentang</a>
                </li>
                <li data-aos="zoom-in" className="text-grey font-bold text-sm">
                  <a href=''>Kontak</a>
                </li>
              </ul>
            </div>

            {/* Account Menu */}
            <div className="lg:flex hidden items-center text-center gap-2">
                <button className="text-center inline-block bg-blue-700 text-white py-1 px-8 rounded-full transition transform hover:scale-105 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 w-full sm:w-auto">
                  Jelajahi Sekarang
                </button>
            </div>

      

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex justify-end w-full bg-white">
              <div className="flex items-center">
                <button
                  className="p-2"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <Menu className="w-6 h-6 text-grey" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>


      <div
        className={`lg:hidden fixed inset-x-0 top-[70px] bg-white z-40 transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
        }}
      >
        <div className="container mx-auto px-4 py-2 flex justify-center items-center min-h-[calc(100vh-70px)] bg-white">
          <ul className="flex flex-col items-center gap-4 text-center">
            <li>
              <a href='' className="block py-2 text-grey font-bold text-xl">
                Beranda
              </a>
            </li>
            <li>
              <a href='' className="block py-2 text-grey font-bold text-xl">
                Profil
              </a>
            </li>
            <li>
              <a href='' className="block py-2 text-grey font-bold text-xl">
                Artikel
              </a>
            </li>
            <li>
              <a href='' className="block py-2 text-grey font-bold text-xl">
                Tentang
              </a>
            </li>
            <li>
              <a href='' className="block py-2 text-grey font-bold text-xl">
                Kontak
              </a>
            </li>
            </ul>
        </div>
      </div>

    </div>
  )
}
