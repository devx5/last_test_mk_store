import React, { useState, useEffect } from 'react';
import herophoto from '../assets/img/herophoto.jpeg';
import herophoto2 from '../assets/img/herophoto2.jpeg';
import selfcare from '../assets/img/icon/selfcare.jpg';

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: herophoto,
    },
    {
      image: herophoto2,
    },
    {
      image: selfcare,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-full p-0 flex justify-center">
      {/* الحاوية الرئيسية للهيرو سيكشن */}
      <div className="relative w-full h-[88vh] overflow-hidden flex justify-center items-center">
        
        {slides[currentIndex].image ? (
          // لو السلايد عبارة عن صورة (الإعلان الاحترافي)
          <img 
            src={slides[currentIndex].image} 
            alt="إعلان المجموعة الملكية" 
            className="w-full h-full object-cover block object-center" 
          />
        ) : (
          // لو السلايد عبارة عن نص عادي (باقي السلايدات)
          <div className="w-full h-full bg-blue-500 flex flex-col justify-center items-center text-center p-5">
            <h1 className="text-[36px] font-bold mb-4 text-white">
              {slides[currentIndex].title}
            </h1>
            <p className="text-[18px] mb-6 text-white">
              {slides[currentIndex].subtitle}
            </p>
            <button className="bg-white text-gray-800 font-bold py-[10px] px-[24px] rounded-[30px] border-none cursor-pointer">
              تسوق الآن
            </button>
          </div>
        )}

        {/* أزرار التنقل بالأسهم (يمين ويسار) */}
        <button 
          onClick={prevSlide}
          className="absolute left-[15px] top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/80 hover:bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:text-pink-600 transition-all duration-300 cursor-pointer font-bold text-lg"
          title="السابق"
        >
          &larr;
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-[15px] top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/80 hover:bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:text-pink-600 transition-all duration-300 cursor-pointer font-bold text-lg"
          title="التالي"
        >
          &rarr;
        </button>

        {/* مؤشر النقاط التفاعلي أسفل الصورة */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index 
                  ? 'w-8 bg-pink-500' // النقطة الحالية تكون أطول بالعرض وبلون مميز
                  : 'w-2.5 bg-white/60 hover:bg-white' // النقط الباقية أصغر
              }`}
              title={`الانتقال للصورة ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}