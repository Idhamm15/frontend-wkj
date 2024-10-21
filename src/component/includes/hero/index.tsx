// components/HeroSection2.js
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const slides = [
    {
      title: "Pameran Pendidikan dan Produk Muslim Terbesar Termegah Berskala Internasional Kini Hadir DiSolo",
      image: "assets/carousel-1.jpg",
      subtitle: "International Islamic Edu Fair (IIEF)",
    },
    {
      title: "Sed Ut Perspiciatis Unde Omnis",
      image: "assets/carousel-2.jpeg",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Sed sit amet facilisis urna.",
    },
    {
      title: "Nemo Enim Ipsam Voluptatem",
      image: "assets/carousel-2.jpeg",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Sed sit amet facilisis urna.",
    }
  ];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('right');
  
    // Inisialisasi AOS
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  
    // Otomatis scroll setiap 2 detik
    useEffect(() => {
      const interval = setInterval(() => {
        setDirection('right');
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);
  
    const handlePrev = () => {
      setDirection('left');
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setDirection('right');
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    };
    return (
        <div className="lg:mt-1 mt-10 container mx-auto px-4 relative">
    <div className="relative pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20">
        <div className="relative flex items-center">
            {/* Bagian Gambar Kanan */}
            <div className="relative w-full overflow-hidden">
                <div
                    className="w-full flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="min-w-full">
                            <img
                                alt={slide.title}
                                className="w-full h-[60vh] object-cover rounded-3xl border bg-slate-200"
                                src={slide.image}
                                data-aos="fade-up"
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Bagian Teks Kiri */}
            <div className="absolute lg:mt-56 mt-72 inset-y-0 left-0 lg:w-1/2 px-8 flex items-center z-20">
                <div className="p-4 sm:p-8 lg:py-14 md:px-10 bg-gray-600/60 dark:bg-neutral-900/60 backdrop-filter shadow-lg dark:shadow-2xl rounded-3xl space-y-3 sm:space-y-5">
                    <h2 className="text-sm sm:text-lg lg:text-xl font-semibold">
                        <a
                            className="line-clamp-2"
                            title={slides[currentIndex].title}
                            href="#"
                        >
                            {slides[currentIndex].title}
                        </a>
                    </h2>
                    <span className="block mt-4 text-primary-700 dark:text-neutral-400">
                        {slides[currentIndex].subtitle}
                    </span>
                    <div className="flex mt-8 space-x-4">
                        <button
                            className="w-11 h-11 text-xl border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                            title="Prev"
                            onClick={handlePrev}
                        >
                            <FaArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            className="w-11 h-11 text-xl border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center border-2 transition duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                            title="Next"
                            onClick={handleNext}
                        >
                            <FaArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    );
};

export default HeroSection;
