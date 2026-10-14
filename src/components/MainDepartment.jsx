import React, { useRef , useEffect , useState} from 'react'

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
}
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
      const scrollAmount = 300; // مسافة التحريك عند الضغط
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const categories = [
    { id: 1, name: 'العناية بالبشرة', icon: '✨' },
    { id: 2, name: 'العناية بالشعر', icon: '💇‍♀️' },
    { id: 3, name: 'المكياج', icon: '💄' },
    { id: 4, name: 'العناية بالجسم', icon: '🧴' },
    { id: 5, name: 'العناية الشخصية', icon: '🧼' },
    { id: 6, name: 'الإكسسوارات', icon: '💍' },
    { id: 7, name: 'العناية بالأطفال', icon: '👶' },
    { id: 8, name: 'المستلزمات', icon: '🛍️' },
    { id: 9, name: 'المكملات', icon: '💊' },
  ];

  return (
    <div>
      {/* قسم التصنيفات الرئيسية */}
      <section className="py-12 bg-gray-50" style={{ marginBottom: '20px', marginTop: '20px' }}>
        <div className="container mx-auto px-4">
          
          {/* عنوان القسم والوصف */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">تسوق حسب الأقسام الرئيسية</h2>
            <p className="text-gray-500 text-sm mt-2">اختر القسم المناسب لاحتياجاتك واستكشف أفضل المنتجات الأصلية</p>
          </div>

          {/* الحاوية الرئيسية: تجمع الأزرار خارج مساحة العناصر */}
          <div className="flex items-center gap-2 sm:gap-4">

            {/* زر السهم الأيمن (خارج نطاق الكروت) */}
            <button 
              onClick={() => handleScroll('left')}
              className={`w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300 shrink-0 z-10 ${isAtStart ? 'opacity-50 grayscale cursor-not-allowed text-gray-800' : ''}`} disabled={isAtStart}
              title="السابق"
            >
               ←
            </button>

            {/* مساحة الكروت المتحركة (محصورة تماماً بين الزرارين) */}
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
                    className="min-w-[140px] md:min-w-[170px] group flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-pink-300 shrink-0 select-none"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-50 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-2xl md:text-3xl">{item.icon}</span>
                    </div>
                    <span className="font-semibold text-gray-800 text-sm md:text-base text-center group-hover:text-pink-600 transition-colors">
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* زر السهم الأيسر (خارج نطاق الكروت) */}
            <button 
              onClick={() => handleScroll('right')}
              className={`w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300 shrink-0 z-10 ${isAtEnd ? 'opacity-50 grayscale cursor-not-allowed text-gray-800' : ''}`} disabled={isAtEnd}
              title="التالي"
            >
                →
            </button>

          </div>

        </div>
      </section>
    </div>
  )
}

export default MainDepartment;