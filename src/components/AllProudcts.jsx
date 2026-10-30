import React, { useContext, useState, useMemo } from 'react';
import { 
  Sparkles, 
  Star,
  ShoppingCart,
  Check,
  Filter
} from 'lucide-react';

import hairlogo from '../assets/img/icon/hairlogo.jpg';
import skin from '../assets/img/icon/skin.webp';
import selfcare from '../assets/img/icon/selfcare.jpg';
import mekup from '../assets/img/icon/mekup.jpg';
import bodycare from '../assets/img/icon/bodycare.jpg';
import accessories from '../assets/img/icon/accessories.webp';
import babycare from '../assets/img/icon/babycare.webp';
import medical from '../assets/img/icon/medical.png';
import supp from '../assets/img/icon/supp.webp';

// استدعاء الكونتكست العام للمنتجات (عدل المسار حسب مكان الملف عندك)
import { ProductsContext } from '../context/ProductContext.jsx'; 

// استدعاء مكونات الفلترة من مجلد sidebar
import FilterSidebar from './sideBar/FilterSidebar.jsx';
import FilterDrawer from './sideBar/FilterDrawer.jsx';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ALLProudcts = () => {
  //  جلبنا المنتجات وحالة التحميل من الكونتكست مباشرة 
  const { products, loading } = useContext(ProductsContext);

  const [ratings, setRatings] = useState({});
  const [addedItems, setAddedItems] = useState({});

  // حالة التحكم في دراور الموبايل
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // حالة الفلاتر
  const [filters, setFilters] = useState({
    searchQuery: '',
    category: 'all',
    maxPrice: 2000,
    brands: [],
  });

  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      category: 'all',
      maxPrice: 2000,
      brands: [],
    });
  };

  // بيانات الأقسام مع الصور الخاصة بها
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

  // (تم الاستغناء عن useEffect الـ axios هنا لأنه أصبح في الكونتكست العام بالخارج)

  // منطق تصفية وترتيب المنتجات الذكي
  const filteredProducts = useMemo(() => {
    const query = filters.searchQuery.trim().toLowerCase();

    // تصفية المنتجات (Filtering) باستخدام includes لتشمل البداية والنهاية والمنتصف
    let result = products.filter((product) => {
      if (query && !product.title.toLowerCase().includes(query)) {
        return false;
      }

      // فلترة بالقسم
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false;
      }

      // فلترة بالسعر الأقصى
      if (product.price > filters.maxPrice) {
        return false;
      }

      // فلترة بالماركة
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false;
      }

      return true;
    });

    // 2. ترتيب النتائج (Sorting): وضع المنتجات التي تبدأ بالحرف في المقدمة أولاً
    if (query) {
      result.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        const startsA = titleA.startsWith(query);
        const startsB = titleB.startsWith(query);

        if (startsA && !startsB) return -1; // اجعل A في المقدمة
        if (!startsA && startsB) return 1;  // اجعل B في المقدمة
        return 0; // اتركهما كما هما إذا تساويا
      });
    }

    return result;
  }, [products, filters]);

  // دالة لتحديث التقييم عند النقر على نجمة
  const handleRate = (productId, newRating) => {
    setRatings(prev => ({
      ...prev,
      [productId]: newRating
    }));
  };

  // دالة إضافة المنتج إلى السلة مع تفعيل أنيميشن مؤقت للزر
  const handleAddToCart = (product) => {
    setAddedItems(prev => ({ ...prev, [product.id]: true }));

    // إرجاع الزر لحالته الطبيعية بعد ثانيتين
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

    if (loading) {
       return (
         <div className="max-w-7xl mx-auto px-4 py-8" dir="rtl">
           {/* شيبه سيكشن الأقسام والـ Header عشان الصفحة متهتزش */}
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
             {[...Array(6)].map((_, index) => (
               <div 
                 key={index} 
                 className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col justify-between p-4"
               >
                 <div>
                   {/* مكان صورة الكارد */}
                   <div className="mb-4">
                     <Skeleton height={192} borderRadius={12} />
                   </div>
                   {/* مكان عنوان المنتج والسعر */}
                   <div className="mb-3">
                     <Skeleton height={20} width="80%" style={{ marginBottom: '8px' }} />
                     <Skeleton height={16} width="35%" />
                   </div>
                 </div>
    
                 <div className="pt-3 border-t border-gray-100 flex flex-col gap-3">
                   {/* مكان التقييم الحالي */}
                   <div className="flex items-center justify-between">
                     <Skeleton height={14} width="30%" />
                     <Skeleton height={14} width="20%" />
                   </div>
                   {/* مكان نجوم التقييم */}
                   <div className="flex justify-center gap-1 my-1">
                     {[...Array(5)].map((_, i) => (
                       <Skeleton key={i} circle width={20} height={20} />
                     ))}
                   </div>
                   {/* مكان زر أضف إلى السلة */}
                   <Skeleton height={40} borderRadius={12} />
                 </div>
               </div>
             ))}
           </div>
         </div>
       );
    }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8" dir="rtl">
      
      {/* سيكشن الأقسام العلوي */}
      <div className="mb-10 bg-white shadow-md rounded-2xl p-6 border border-gray-100" style={{ marginBottom: '3rem' }}>
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 " style={{ marginBottom: '1rem' }}>
          <Sparkles className="w-6 h-6 text-pink-600 animate-spin" style={{ animationDuration: '4s' }} />
          أقسام المنتجات
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-pink-50 active:bg-pink-100 rounded-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-pink-200 active:border-pink-300 group shadow-sm hover:-translate-y-1 active:translate-y-0"
            >
              <div className="w-20 h-20  bg-white rounded-full shadow-sm  group-hover:scale-110 group-active:scale-95 transition-transform duration-300 flex items-center justify-center overflow-hidden" style={{marginBottom: "10px"}}>
                <img 
                  src={cat.icon} 
                  alt={cat.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className=" text-xs sm:text-sm font-medium text-gray-700 text-center group-hover:text-pink-600 group-active:text-pink-700">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* زر فتح الفلترة للموبايل والتابلت */}
      <div className="lg:hidden mb-6 flex justify-between items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm" style={{ marginBottom: '2rem' }}>
        <span className="text-sm font-bold text-gray-700">
          المنتجات المتاحة ({filteredProducts.length})
        </span>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="px-4 py-2.5 bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition shadow-sm active:scale-95"
        >
          <Filter className="w-4 h-4" />
          تصفية المنتجات
        </button>
      </div>

      {/* دراور الموبايل والتابلت */}
      <FilterDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        filters={filters}
        setFilters={setFilters}
        onReset={handleResetFilters}
      />

      {/* 2. السيكشن الرئيسي: السايد بار + شبكة المنتجات المفلترة */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* السايد بار للشاشات الكبيرة */}
        <div className="hidden lg:block sticky top-6">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            onReset={handleResetFilters}
          />
        </div>

        {/* عرض المنتجات المفلترة */}
        <div className="flex-1 w-full">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">لا توجد منتجات تطابق الفلاتر</h3>
              <p className="text-xs text-gray-500">جرب تغيير خيارات البحث أو إزالة بعض الفلاتر لعرض نتائج أكثر.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col justify-between hover:shadow-xl active:shadow-md transition-all duration-300 hover:-translate-y-1.5 active:translate-y-0"
                >
                  <div>
                    <div className="overflow-hidden relative">
                      <img 
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        src={product.thumbnail} 
                        alt={product.title} 
                        className="w-full h-48 object-cover bg-gray-100 transition-transform duration-500 hover:scale-105 active:scale-95"
                      />
                    </div>
                    <div className="p-4 text-left">
                      <h3 className="font-bold text-gray-800 text-base mb-1 truncate">{product.title}</h3>
                      <p className="text-pink-600 font-semibold mb-3">${product.price}</p>
                    </div>
                  </div>

                  <div className="p-4 pt-0 border-t border-gray-100 mt-2 flex flex-col gap-3">
                    {/* عرض التقييم الحالي */}
                    <div className="flex items-center justify-between text-sm text-gray-600 pt-2">
                      <span>التقييم الحالي:</span>
                      <span className="font-bold text-amber-500 flex items-center gap-1">
                        {ratings[product.id] || 0} <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      </span>
                    </div>

                    {/* تفاعلية النجوم لتغيير التقييم */}
                    <div className="flex justify-center gap-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          onClick={() => handleRate(product.id, star)}
                          className="focus:outline-none transition-transform hover:scale-125 active:scale-90"
                        >
                          <Star 
                            className={`w-5 h-5 transition-colors duration-200 ${
                              star <= (ratings[product.id] || 0)
                                ? 'fill-amber-400 text-amber-400' 
                                : 'text-gray-300'
                            }`} 
                          />
                        </button>
                      ))}
                    </div>

                    {/* زر أضف إلى السلة */}
                    <button 
                    
                      onClick={() => handleAddToCart(product)}
                      className={`w-full mt-2 font-medium py-2.5 cursor-pointer px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm active:scale-95 ${
                        addedItems[product.id]
                          ? 'bg-green-600 hover:bg-green-700 active:bg-green-800 text-white scale-105 shadow-green-200'
                          : 'bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white shadow-pink-100 hover:shadow-md'
                      }`}
                    >
                      {addedItems[product.id] ? (
                        <>
                          <Check className="w-4 h-4 animate-bounce" />
                          تمت الإضافة بنجاح!
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4 transition-transform group-hover:rotate-12 group-active:rotate-12 " />
                          أضف إلى السلة
                        </>
                      )}
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

export default ALLProudcts;