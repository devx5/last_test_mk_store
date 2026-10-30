import React, { useRef, useState, useEffect } from 'react'
import lcar from '../assets/img/best_seler_img/lcar.jpeg'
import creem from '../assets/img/best_seler_img/creem.jpeg'
import frute from '../assets/img/best_seler_img/frute.jpeg'
import shia from '../assets/img/best_seler_img/shia.jpeg'
import { Link } from 'react-router-dom'

function PestSeler() {
  const scrollRef = useRef(null);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(true);

  const products = [
    {
      id: 1,
      category: 'العناية بالبشرة',
      title: 'سيروم الهيالورونيك اسيد المرطب',
      image: lcar,
      alt: 'Lcar',
      ratingCount: '(48)',
      price: '250 ج.م',
      oldPrice: '320 ج.م',
      badge: 'الأكثر مبيعاً'
    },
    {
      id: 1,
      category: 'العناية بالبشرة',
      title: 'سيروم الهيالورونيك اسيد المرطب',
      image: lcar,
      alt: 'Lcar',
      ratingCount: '(48)',
      price: '250 ج.م',
      oldPrice: '320 ج.م',
      badge: 'الأكثر مبيعاً'
    },
    {
      id: 1,
      category: 'العناية بالبشرة',
      title: 'سيروم الهيالورونيك اسيد المرطب',
      image: lcar,
      alt: 'Lcar',
      ratingCount: '(48)',
      price: '250 ج.م',
      oldPrice: '320 ج.م',
      badge: 'الأكثر مبيعاً'
    },
    {
      id: 2,
      category: 'المكياج',
      title: 'أحمر شفاه مات طويل الثبات',
      image: creem,
      alt: 'Creem',
      ratingCount: '(64)',
      price: '180 ج.م',
      oldPrice: null,
      badge: 'الأكثر مبيعاً'
    },
    {
      id: 3,
      category: 'العناية بالشعر',
      title: 'ماسك الشعر المغذي بزيت الأرجان',
      image: frute,
      alt: 'Frute',
      ratingCount: '(35)',
      price: '310 ج.م',
      oldPrice: '390 ج.م',
      badge: 'الأكثر مبيعاً'
    },
    {
      id: 4,
      category: 'العناية بالجسم',
      title: 'مقشر الجسم الطبيعي بالقهوة',
      image: shia,
      alt: 'Shia',
      ratingCount: '(52)',
      price: '220 ج.م',
      oldPrice: null,
      badge: 'الأكثر مبيعاً'
    },
    {
      id: 5,
      category: 'العناية بالبشرة',
      title: 'غسول وجه إضافي للتجربة',
      image: lcar,
      alt: 'Lcar',
      ratingCount: '(12)',
      price: '200 ج.م',
      oldPrice: null,
      badge: 'الأكثر مبيعاً'
    }
  ];

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollRight(scrollLeft > 10);
      setCanScrollLeft(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      checkScrollPosition();
      container.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('div')?.offsetWidth || 300;
      // الاتجاه المباشر والسليم للـ scroll
      const scrollAmount = direction === 'right' ? -cardWidth - 23 : cardWidth + 23;
      
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <section className="py-12 bg-white" style={{ marginTop: '20px' }}>
        <div className="container mx-auto px-4">
          
         <div className="flex flex-row justify-between items-center mb-8 gap-4 w-full">
            
            {/* زر عرض كل المنتجات (هيروح على الشمال في الشاشات الصغيرة والكبيرة) */}
            <Link to="/all-products" className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 active:text-pink-700 font-semibold text-sm transition-colors group flex-shrink-0">
              <span>عرض كل المنتجات</span>
              <span className="group-hover:-translate-x-1 group-active:-translate-x-1 transition-transform">←</span>
            </Link>

            {/* العنوان والبرجراف (هيروحوا على اليمين تماماً) */}
            <div className="text-right">
              <div className="flex items-center justify-end gap-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                  الأكثر طلباً ومبيعاً
                </h2>
                <span className="text-xl sm:text-2xl">🔥</span>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">المنتجات الأكثر ثقة وطلباً من عملائنا المميزين</p>
            </div>
            
          </div>
          
          <div className="relative px-8 md:px-12">
            
            {/* سهم اليمين */}
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-all ${
                canScrollRight ? 'bg-white text-gray-700 hover:bg-pink-600 active:bg-pink-600 hover:text-white active:text-white cursor-pointer' : 'bg-gray-100 text-gray-300 cursor-not-allowed'
              }`}
            >
              ❯
            </button>

            {/* سهم اليسار */}
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-all ${
                canScrollLeft ? 'bg-white text-gray-700 hover:bg-pink-600 active:bg-pink-600 active:text-white hover:text-white cursor-pointer' : 'bg-gray-100 text-gray-300 cursor-not-allowed'
              }`}
            >
              ❮
            </button>

            {/* الحاوية: أضفنا dir="ltr" هنا لضبط اتجاه السكرول برمجياً وتجنب مشاكل المتصفحات */}
            <div 
              ref={scrollRef}
              dir="ltr"
              className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth py-2 px-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {products.map((product) => (
                <div 
                  key={product.id} 
                  dir="rtl"
                  className="w-[calc(50%-8px)] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] flex-shrink-0 bg-white rounded-2xl border border-gray-100 hover:border-pink-200 active:border-pink-200 shadow-sm  hover:shadow-lg  active:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group text-right"
                >
                  <div className="relative bg-gray-50 h-48 md:h-60 overflow-hidden flex items-center justify-center">
                    <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm z-10">
                      {product.badge}
                    </span>
                    <img className="w-full h-full object-cover transition-transform duration-300  hover:scale-105 active:scale-105" src={product.image} alt={product.alt} />
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <span className="text-xs text-gray-400 mb-1">{product.category}</span>
                    <h3 className="font-bold text-gray-800 text-sm md:text-base line-clamp-1 group-hover:text-pink-600 group-active:text-pink-600 transition-colors">
                      {product.title}
                    </h3>

                    <div className="flex items-center gap-1 my-2">
                      <span className="text-yellow-400 text-xs">★★★★★</span>
                      <span className="text-gray-400 text-xs">{product.ratingCount}</span>
                    </div>

                    <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                      <div>
                        <span className="text-pink-600 font-bold text-base md:text-lg">{product.price}</span>
                        {product.oldPrice && <span className="text-gray-400 text-xs line-through mr-2">{product.oldPrice}</span>}
                      </div>
                      <button className="bg-pink-50 hover:bg-pink-600 active:bg-pink-600 text-pink-600 hover:text-white active:text-white p-2.5 rounded-xl transition-colors duration-300" title="إضافة للسلة">
                        <span className="text-lg">🛒</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default PestSeler