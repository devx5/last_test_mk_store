import React, { useRef, useEffect, useState } from 'react';
import hairlogo from '../assets/img/icon/hairlogo.jpg';
import skin from '../assets/img/icon/skin.webp';
import selfcare from '../assets/img/icon/selfcare.jpg';
import mekup from '../assets/img/icon/mekup.jpg';
import bodycare from '../assets/img/icon/bodycare.jpg';
import accessories from '../assets/img/icon/accessories.webp';
import babycare from '../assets/img/icon/babycare.webp';
import medical from '../assets/img/icon/medical.png';
import supp from '../assets/img/icon/supp.webp';

function MainDepartment() {
  const containerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const currentScroll = Math.abs(scrollLeft);
      const maxScroll = scrollWidth - clientWidth;
      setIsAtStart(currentScroll <= 5);
      setIsAtEnd(currentScroll >= maxScroll - 5);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      checkScrollPosition();
      container.addEventListener('scroll', checkScrollPosition);
    }
    return () => container?.removeEventListener('scroll', checkScrollPosition);
  }, []);

  // دالة التقليب بالأسهم بسلاسة
  const handleScroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const categories = [
    { id: 1, name: 'العناية بالبشرة', icon: skin },
    { id: 2, name: 'العناية بالشعر', icon: hairlogo },
    { id: 3, name: 'المكياج', icon: mekup },
    { id: 4, name: 'العناية بالجسم', icon: bodycare },
    { id: 5, name: 'العناية الشخصية', icon: selfcare },
    { id: 6, name: 'الإكسسوارات', icon: accessories },
    { id: 7, name: 'العناية بالأطفال', icon: babycare },
    { id: 8, name: 'المستلزمات', icon: medical },
    { id: 9, name: 'المكملات', icon: supp },
  ];

  return (
    <div>
      {/* قسم التصنيفات الرئيسية */}
      <section className="py-12 bg-gray-50" >
        <div className="container mx-auto px-4">
          
          {/* عنوان القسم والوصف */}
          <div className="text-center ">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 ">تسوق حسب الأقسام الرئيسية</h2>
            <p className="text-gray-500 text-sm py-3">اختر القسم المناسب لاحتياجاتك واستكشف أفضل المنتجات الأصلية</p>
          </div>

          {/* الحاوية الرئيسية: تجمع الأزرار خارج مساحة العناصر */}
          <div className="flex items-center gap-2 sm:gap-4">

            {/* زر السهم الأيمن */}
            <button 
              onClick={() => handleScroll('left')}
              className={`w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-pink-600 active:bg-pink-600 hover:text-white active:text-white hover:border-pink-600 active:border-pink-600 transition-all duration-300 shrink-0 z-10 ${isAtStart ? 'opacity-50 grayscale cursor-not-allowed text-gray-800' : ''}`} 
              disabled={isAtStart}
              title="السابق"
            >
                ←
            </button>

            {/* مساحة الكروت المتحركة */}
            <div className="flex-1 overflow-hidden py-2">
              <div
                ref={containerRef}
                className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-none py-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {categories.map((item) => (
                  <a 
                    key={item.id} 
                    href="#" 
                    className="min-w-[140px] md:min-w-[170px] h-[160px] md:h-[180px] group relative flex flex-col justify-end p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden shrink-0 select-none"
                  >
                    {/* الصورة كخلفية تملء الكارت بالكامل مع تأثير زووم عند الـ hover */}
                    <img 
                      src={item.icon} 
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-active:scale-110 transition-transform duration-500"
                    />

                    {/* طبقة تظليل (Gradient Overlay) فوق الصورة لضمان وضوح النص */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/80"></div>
                  
                    {/* اسم القسم */}
                    <span className="relative z-10 font-bold text-white text-sm md:text-base text-center group-hover:text-pink-200 transition-colors">
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* زر السهم الأيسر */}
            <button 
              onClick={() => handleScroll('right')}
              className={`w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-pink-600 active:bg-pink-600 hover:text-white active:text-white hover:border-pink-600 active:border-pink-600 transition-all duration-300 shrink-0 z-10 ${isAtEnd ? 'opacity-50 grayscale cursor-not-allowed text-gray-800' : ''}`} 
              disabled={isAtEnd}
              title="التالي"
            >
                →
            </button>

          </div>

        </div>
      </section>
    </div>
  );
}

export default MainDepartment;