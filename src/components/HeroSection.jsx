import React, { useState, useEffect } from 'react';
import herophoto from '../assets/img/herophoto.jpeg';
import herophoto2 from '../assets/img/herophoto2.jpeg';

import test from '../assets/img/test.jpeg';
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
     image: test,
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
    <div style={{ width: '100%', padding: '24px 0', display: 'flex', justifyContent: 'center' }}>
      {/* الحاوية الرئيسية للهيرو سيكشن */}
      <div style={{ position: 'relative', width: '95%', height: '450px', borderRadius: '16px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
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
          style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.4)', color: '#fff', border: 'none', padding: '12px', cursor: 'pointer', zIndex: 10, borderRadius: '50%' }}
        >
          ❯
        </button>
        <button 
          onClick={nextSlide} 
          style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.4)', color: '#fff', border: 'none', padding: '12px', cursor: 'pointer', zIndex: 10, borderRadius: '50%' }}
        >
         ❮ 
        </button>

      </div>
    </div>
  );
}