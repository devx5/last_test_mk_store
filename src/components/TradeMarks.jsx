import React, { useRef } from 'react';

const brands = [
  { id: 1, name: 'ESSENCE' },
  { id: 2, name: 'MAYBELLINE' },
  { id: 3, name: 'L\'OREAL' },
  { id: 4, name: 'MAC' },
  { id: 5, name: 'THE BODY SHOP' },
  { id: 6, name: 'CERAVE' },
];

export default function TradeMarks() {
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-10 bg-slate-50 border-y border-slate-200 overflow-hidden " style={{ marginTop: '2rem', marginBottom: '2rem' }}>
  

      {/* الشريط المتحرك */}
      <div className="relative w-full overflow-hidden py-2">
        <div
          ref={containerRef}
          className="flex gap-4 sm:gap-6 w-max marquee-track"
        >
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="w-36 sm:w-48 h-20 sm:h-24 bg-white rounded-2xl border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-sm sm:text-base shadow-sm hover:shadow-md active:shadow-md hover:border-pink-500 active:border-pink-500 hover:text-pink-600 active:text-pink-600 transition cursor-pointer shrink-0 select-none transform hover:-translate-y-1"
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>

      {/* تنسيق الحركة والتوقف عند الهوفر بـ CSS بسيط ومباشر */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 20s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}