import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = ['Beranda', 'Artikel', 'Tentang', 'Detection AI'];

  return (
    <div className='relative flex flex-col'>
      <nav
        className={`fixed top-0 left-0 w-full py-2 px-4 md:px-8 lg:px-12 z-40 transition-all duration-300 ease-in-out shadow-sm
        ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo - Now visible on all screen sizes */}
            <a href='/' className="flex-shrink-0">
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
              <ul className="flex justify-center gap-16 items-center text-center">
                {menuItems.map((item) => (
                  <li key={item} className="text-grey font-bold text-sm">
                    <a
                      href={item === 'Beranda' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                      className="relative overflow-hidden group"
                    >
                      {item}
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                className="p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-grey" />
                ) : (
                  <Menu className="w-6 h-6 text-grey" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 bg-white z-10 transition-all duration-300 ease-in-out overflow-hidden
        ${mobileMenuOpen ? 'max-h-screen bg-opacity-95' : 'max-h-0 opacity-0'}`}
        style={{
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <div className="container mx-auto flex flex-col justify-center items-center min-h-[calc(100vh-70px)]">
          <ul className="flex flex-col items-center gap-4 text-center">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={item === 'Beranda' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="block py-2 text-grey font-bold text-xl hover:text-blue-700 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile "Jelajahi Sekarang" button */}
          <button className="mt-6 bg-blue-700 text-white py-2 px-8 rounded-full hover:bg-blue-800 transition duration-300 ease-in-out">
            Jelajahi Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}