import React from 'react'

function MainDepartment() {
  return (
    <div >
 {/* قسم التصنيفات الرئيسية */}
<section className="py-12 bg-gray-50" style={{ marginBottom: '20px' , marginTop: '20px' }}>
  <div className="container mx-auto px-4">
    {/* عنوان القسم */}
    <div className="text-center " style={{ marginBottom: '2rem' }}>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">تسوق حسب الأقسام الرئيسية</h2>
      <p className="text-gray-500 text-sm mt-2">اختر القسم المناسب لاحتياجاتك واستكشف أفضل المنتجات الأصلية</p>
    </div>

    {/* شبكة الأقسام (متجاوبة مع كل الشاشات) */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      
      {/* 1. العناية بالبشرة */}
      <a href="#" className="group flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-pink-300">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-50 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
          {/* أيقونة تعبيرية أو SVG */}
          <span className="text-2xl md:text-3xl">✨</span>
        </div>
        <span className="font-semibold text-gray-800 text-sm md:text-base text-center group-hover:text-pink-600 transition-colors">
          العناية بالبشرة
        </span>
      </a>

      {/* 2. العناية بالشعر */}
      <a href="#" className="group flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-pink-300">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-50 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
          <span className="text-2xl md:text-3xl">💇‍♀️</span>
        </div>
        <span className="font-semibold text-gray-800 text-sm md:text-base text-center group-hover:text-pink-600 transition-colors">
          العناية بالشعر
        </span>
      </a>

      {/* 3. المكياج */}
      <a href="#" className="group flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-pink-300">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-50 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
          <span className="text-2xl md:text-3xl">💄</span>
        </div>
        <span className="font-semibold text-gray-800 text-sm md:text-base text-center group-hover:text-pink-600 transition-colors">
          المكياج
        </span>
      </a>

      {/* 4. العناية بالجسم */}
      <a href="#" className="group flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-pink-300">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-50 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
          <span className="text-2xl md:text-3xl">🧴</span>
        </div>
        <span className="font-semibold text-gray-800 text-sm md:text-base text-center group-hover:text-pink-600 transition-colors">
          العناية بالجسم
        </span>
      </a>

      {/* 5. العناية الشخصية */}
      <a href="#" className="group flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-pink-300">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-50 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
          <span className="text-2xl md:text-3xl">🧼</span>
        </div>
        <span className="font-semibold text-gray-800 text-sm md:text-base text-center group-hover:text-pink-600 transition-colors">
          العناية الشخصية
        </span>
      </a>

      {/* 6. الإكسسوارات */}
      <a href="#" className="group flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-pink-300">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-50 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
          <span className="text-2xl md:text-3xl">💍</span>
        </div>
        <span className="font-semibold text-gray-800 text-sm md:text-base text-center group-hover:text-pink-600 transition-colors">
          الإكسسوارات
        </span>
      </a>

      {/* 7. العناية بالأطفال */}
      <a href="#" className="group flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-pink-300">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-50 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
          <span className="text-2xl md:text-3xl">👶</span>
        </div>
        <span className="font-semibold text-gray-800 text-sm md:text-base text-center group-hover:text-pink-600 transition-colors">
          العناية بالأطفال
        </span>
      </a>

      {/* 8. المستلزمات */}
      <a href="#" className="group flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-pink-300">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-50 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
          <span className="text-2xl md:text-3xl">🛍️</span>
        </div>
        <span className="font-semibold text-gray-800 text-sm md:text-base text-center group-hover:text-pink-600 transition-colors">
          المستلزمات
        </span>
      </a>

      {/* 9. المكملات */}
      <a href="#" className="group flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-pink-300 sm:col-span-3 md:col-span-1 lg:col-span-1">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-50 flex-center flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
          <span className="text-2xl md:text-3xl">💊</span>
        </div>
        <span className="font-semibold text-gray-800 text-sm md:text-base text-center group-hover:text-pink-600 transition-colors">
          المكملات
        </span>
      </a>

    </div>
  </div>
</section>
    </div>
  )
}

export default MainDepartment
