import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { 
  Sparkles, 
  Scissors, 
  Smile, 
  Heart, 
  UserCheck, 
  Palette, 
  Baby, 
  Pill, 
  Star,
  ShoppingCart,
  Check,
  Filter
} from 'lucide-react';

// استدعاء مكونات الفلترة من مجلد sidebar
import FilterSidebar from './sideBar/FilterSidebar.jsx';
import FilterDrawer from './sideBar/FilterDrawer.jsx';

const ALLProudcts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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

  // بيانات الأقسام مع الأيقونات الخاصة بها
  const categories = [
    { name: 'العناية بالشعر', icon: <Scissors className="w-6 h-6 text-pink-500" /> },
    { name: 'العناية بالبشرة', icon: <Smile className="w-6 h-6 text-pink-500" /> },
    { name: 'العناية بالجسم', icon: <Heart className="w-6 h-6 text-pink-500" /> },
    { name: 'العناية الشخصية', icon: <UserCheck className="w-6 h-6 text-pink-500" /> },
    { name: 'المكياج والاكسسوارات', icon: <Palette className="w-6 h-6 text-pink-500" /> },
    { name: 'العناية بالأطفال', icon: <Baby className="w-6 h-6 text-pink-500" /> },
    { name: 'المستلزمات والمكملات', icon: <Pill className="w-6 h-6 text-pink-500" /> },
  ];

  useEffect(() => {
    // جلب منتجات التجميل من DummyJSON
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
        
        // تعيين التقييمات الابتدائية القادمة من الـ API
        const initialRatings = {};
        response.data.products.forEach(prod => {
          initialRatings[prod.id] = Math.round(prod.rating || 0);
        });
        setRatings(initialRatings);
        
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // منطق تصفية المنتجات الحية بناءً على الفلاتر
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // 1. فلترة بالبحث بالنص
      if (
        filters.searchQuery &&
        !product.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
      ) {
        return false;
      }

      // 2. فلترة بالقسم
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false;
      }

      // 3. فلترة بالسعر الأقصى
      if (product.price > filters.maxPrice) {
        return false;
      }

      // 4. فلترة بالماركة
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false;
      }

      return true;
    });
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
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-lg font-medium text-gray-600 animate-pulse">جاري التحميل...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8" dir="rtl">
      
      {/* 1. سيكشن الأقسام العلوي مع أنيميشن خفيف عند التحويم */}
      <div className="mb-10 bg-white shadow-md rounded-2xl p-6 border border-gray-100" style={{ marginBottom: '3rem' }}>
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 " style={{ marginBottom: '1rem' }}>
          <Sparkles className="w-6 h-6 text-pink-600 animate-spin" style={{ animationDuration: '4s' }} />
          أقسام المنتجات
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-pink-50 active:bg-pink-100 rounded-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-pink-200 group shadow-sm hover:-translate-y-1"
            >
              <div className="p-3 bg-white rounded-full shadow-sm mb-3 group-hover:scale-110 group-active:scale-100 transition-transform duration-300">
                {cat.icon}
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 text-center group-hover:text-pink-600 group-active:text-pink-600">
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
          className="px-4 py-2.5 bg-pink-600 hover:bg-pink-700 active:bg-pink-700 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition shadow-sm"
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
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div>
                    <div className="overflow-hidden relative">
                      <img 
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        src={product.thumbnail} 
                        alt={product.title} 
                        className="w-full h-48 object-cover bg-gray-100 transition-transform duration-500 hover:scale-105 active:scale-105"
                      />
                    </div>
                    <div className="p-4">
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
                          className="focus:outline-none transition-transform hover:scale-125"
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

                    {/* زر أضف إلى السلة مع أنيميشن التفاعل */}
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className={`w-full mt-2 font-medium py-2.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm active:scale-95 ${
                        addedItems[product.id]
                          ? 'bg-green-600 hover:bg-green-700 text-white scale-105 shadow-green-200'
                          : 'bg-pink-600 hover:bg-pink-700 text-white shadow-pink-100 hover:shadow-md'
                      }`}
                    >
                      {addedItems[product.id] ? (
                        <>
                          <Check className="w-4 h-4 animate-bounce" />
                          تمت الإضافة بنجاح!
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4 transition-transform group-hover:rotate-12 group-active:rotate-12" />
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