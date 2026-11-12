import React, { useState, useEffect } from 'react';
import herophoto from '../assets/img/herophoto.jpeg';
import herophoto2 from '../assets/img/herophoto2.jpeg';
import selfcare from '../assets/img/icon/selfcare.jpg'
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
    <div style={{ width: '100%', padding: '0', display: 'flex', justifyContent: 'center' }}>
      {/* الحاوية الرئيسية للهيرو سيكشن */}
      <div style={{ position: 'relative', width: '100%', height: '88vh', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        {slides[currentIndex].image ? (
          // لو السلايد عبارة عن صورة (الإعلان الاحترافي)
          <>
            <img 
              src={slides[currentIndex].image} 
              alt="إعلان المجموعة الملكية" 
              style={{ width: '100%', height: '100%', position: 'center' , background: 'cover', display: 'block' }} 
            />
            
          </>
        ) : (
          // لو السلايد عبارة عن نص عادي (باقي السلايدات)
          <div style={{ width: '100%', height: '100%', backgroundColor: '#3b82f6', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '20px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px', color: '#fff' }}>
              {slides[currentIndex].title}
            </h1>
            <p style={{ fontSize: '18px', marginBottom: '24px', color: '#fff' }}>
              {slides[currentIndex].subtitle}
            </p>
            <button style={{ backgroundColor: '#fff', color: '#1f2937', fontWeight: 'bold', padding: '10px 24px', borderRadius: '30px', border: 'none', cursor: 'pointer' }}>
              تسوق الآن
            </button>
          </div>
        )}

        {/* أزرار التنقل بالأسهم (يمين ويسار) */}
          <button 
  onClick={prevSlide}
  style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
  className="w-11 h-11 rounded-full bg-white/80 hover:bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:text-pink-600 transition-all duration-300 cursor-pointer font-bold text-lg"
  title="السابق"
>
  &larr;
</button>
 <button 
  onClick={nextSlide}
  style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
  className="w-11 h-11 rounded-full bg-white/80 hover:bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:text-pink-600 transition-all duration-300 cursor-pointer font-bold text-lg"
  title="التالي"
>
  &rarr;
</button>
  

      </div>
    </div>
  );
}