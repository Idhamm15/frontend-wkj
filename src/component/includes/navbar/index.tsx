import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import menuData from './menu.json';
import { Service, MenuData } from './types';

// Type assertion for imported JSON
const typedMenuData = menuData as MenuData;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderServiceItem = (service: Service) => (
    <a
      key={service.id}
      href={`/layanan/${service.href}`}
      className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
    >
      <span className="text-2xl mr-4">{service.icon}</span>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-800 mb-1">
          {service.title}
        </h4>
        <p className="text-xs text-gray-600">{service.description}</p>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-400 self-center" />
    </a>
  );

  const renderMenuItem = (item: string) => {
    if (item === 'Layanan') {
      return (
        <div className="relative">
          <button
            className="flex items-center text-grey font-bold text-sm group"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            {item}
            <ChevronDown className="ml-1 w-4 h-4" />
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </button>

          {/* Desktop Services Dropdown */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white rounded-lg shadow-xl py-6 px-4 transition-all duration-200 ${
              servicesMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <div className="grid grid-cols-2 gap-4">
              {typedMenuData.services.map(renderServiceItem)}
            </div>
          </div>
        </div>
      );
    }

    return (
      <a
        href={item === 'Beranda' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
        className="relative overflow-hidden group"
      >
        {item}
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
      </a>
    );
  };

  return (
    <div className="relative flex flex-col">
      <nav
        className={`fixed top-0 left-0 w-full py-2 px-4 md:px-8 lg:px-12 z-40 transition-all duration-300 ease-in-out shadow-sm ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="flex-shrink-0">
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
              {typedMenuData.menuItems.map((item) => (
                <li key={item} className="relative group">
                  {renderMenuItem(item)}
                </li>
              ))}
            </ul>
          </div>

          {/* Dashboard Menu Item */}
          <div className="hidden lg:flex">
            <a
              href="/dashboard"
              className="ml-6 text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors duration-300"
            >
              Dashboard
            </a>
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
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 bg-white z-10 transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen bg-opacity-95' : 'max-h-0 opacity-0'
        }`}
        style={{
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <div className="container mx-auto flex flex-col justify-start items-center min-h-[calc(100vh-70px)] pt-20">
          <ul className="flex flex-col items-center gap-4 text-center w-full">
            {typedMenuData.menuItems.map((item) => (
              <li key={item} className="w-full">
                {item === 'Layanan' ? (
                  <div className="w-full">
                    <button
                      onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
                      className="w-full flex items-center justify-center py-2 text-grey font-bold text-xl hover:text-blue-700 transition-colors duration-300"
                    >
                      {item}
                      <ChevronDown
                        className={`ml-1 w-5 h-5 transform transition-transform duration-300 ${
                          servicesMenuOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {/* Mobile Services Menu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        servicesMenuOpen ? 'max-h-screen' : 'max-h-0'
                      }`}
                    >
                      <div className="px-4 py-2 space-y-2">
                        {typedMenuData.services.map(renderServiceItem)}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item === 'Beranda' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="block py-2 text-grey font-bold text-xl hover:text-blue-700 transition-colors duration-300"
                  >
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <button className="mt-6 bg-blue-700 text-white py-2 px-8 rounded-full hover:bg-blue-800 transition duration-300 ease-in-out">
            Jelajahi Sekarang
          </button>

          {/* Dashboard in Mobile Menu */}
          <a
            href="/dashboard"
            className="mt-4 block text-xl font-bold text-blue-700 hover:text-blue-900"
          >
            Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
