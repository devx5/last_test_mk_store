import React, { useContext, useState, useMemo } from 'react';


import hairlogo from '../../assets/img/icon/hairlogo.jpg';
import skin from '../../assets/img/icon/skin.webp';
import selfcare from '../../assets/img/icon/selfcare.jpg';
import mekup from '../../assets/img/icon/mekup.jpg';
import bodycare from '../../assets/img/icon/bodycare.jpg';
import accessories from '../../assets/img/icon/accessories.webp';
import babycare from '../../assets/img/icon/babycare.webp';
import medical from '../../assets/img/icon/medical.png';
import supp from '../../assets/img/icon/supp.webp';

import CategorySection from './CategorySection.jsx';
import MobileFilterBar from './MobileFilterBar.jsx';
import ProductCard from './ProductCard.jsx';
import ProductsSkeleton from './ProductsSkeleton.jsx';

// استدعاء الكونتكست العام للمنتجات (عدل المسار حسب مكان الملف عندك)
import { ProductsContext } from '../../context/ProductContext.jsx'; 

// استدعاء مكونات الفلترة من مجلد sidebar
import FilterSidebar from '../sideBar/FilterSidebar.jsx';
import FilterDrawer from '../sideBar/FilterDrawer.jsx';


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
       return <ProductsSkeleton />;
       
    }


  return (
    <div className="max-w-7xl mx-auto px-4 py-8" dir="rtl">
   
     {/* 1. سيكشن الأقسام */}
      <CategorySection categories={categories} />
     
     {/* 2. شريط فلترة الموبايل */}
      <MobileFilterBar 
        productCount={filteredProducts.length} 
        onOpenDrawer={() => setIsDrawerOpen(true)} 
      />

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
               <ProductCard 
                  key={product.id}
                  product={product}
                  rating={ratings[product.id]}
                  isAdded={addedItems[product.id]}
                  onRate={handleRate}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

export default ALLProudcts;