import React from 'react'
import lcar from '../assets/img/best_seler_img/lcar.jpeg'
import creem from '../assets/img/best_seler_img/creem.jpeg'
import frute from '../assets/img/best_seler_img/frute.jpeg'
import shia from '../assets/img/best_seler_img/shia.jpeg'
import { Link } from 'react-router-dom'
function PestSeler() {
  return (
    <div>
{/* قسم المنتجات الأكثر مبيعاً (القسم رقم 2) */}
<section className="py-12 bg-white" style={{  marginTop: '20px' }}>
  <div className="container mx-auto px-4">
    
    {/* عنوان القسم والزر الجانبي */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">

  <a  href="#" className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 active:text-pink-700  font-semibold text-sm transition-colors group">
        <Link to="/all-products">عرض كل المنتجات</Link>
        <span className="group-hover:-translate-x-1 group-active:-translate-x-1 transition-transform">←</span>
      </a>


      <div>
        <div className="flex items-center gap-2 " >
          <span className="text-2xl " style={{marginBottom:'10px'}}>🔥</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 " style={{ marginBottom: '1rem' }}>
            الأكثر طلباً ومبيعاً
          </h2>
        </div>
        <p className="text-gray-500 text-sm mt-1" style={{ marginBottom: '0.5rem' }}>المنتجات الأكثر ثقة وطلباً من عملائنا المميزين</p>
      </div>
      
    
    </div>

    {/* شبكة المنتجات (متجاوبة مع الموبايل والتابلت والديسكتوب) */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      
      {/* منتج 1 */}
      <div className= "bg-white rounded-2xl border border-gray-100 hover:border-pink-200 active:border-pink-200 shadow-sm hover:shadow-lg active:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group">
        {/* صورة المنتج والشارة */}
        <div className="relative bg-gray-50 h-48 md:h-60 overflow-hidden flex items-center justify-center">
          <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm z-10">
            الأكثر مبيعاً
          </span>
           <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 active:scale-105" src={lcar} alt="Lcar" />
         
        </div>

        {/* تفاصيل المنتج */}
        <div className="p-4 flex flex-col flex-grow ">
          <span className="text-xs text-gray-400 mb-1">العناية بالبشرة</span>
          <h3 className="font-bold text-gray-800 text-sm md:text-base line-clamp-1 group-hover:text-pink-600 group-active:text-pink-600 transition-colors">
            سيروم الهيالورونيك اسيد المرطب
          </h3>

          {/* التقييم */}
          <div className="flex items-center gap-1 my-2">
            <span className="text-yellow-400 text-xs">★★★★★</span>
            <span className="text-gray-400 text-xs">(48)</span>
          </div>

          {/* السعر وزر الإضافة */}
          <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
            <div>
              <span className="text-pink-600 font-bold text-base md:text-lg">250 ج.م</span>
              <span className="text-gray-400 text-xs line-through mr-2">320 ج.م</span>
            </div>
            <button className="bg-pink-50 hover:bg-pink-600 text-pink-600 hover:text-white active:text-white p-2.5 rounded-xl transition-colors duration-300" title="إضافة للسلة">
              <span className="text-lg">🛒</span>
            </button>
          </div>
        </div>
      </div>

      {/* منتج 2 */}
      <div className="bg-white rounded-2xl border border-gray-100 hover:border-pink-200 active:border-pink-200 shadow-sm hover:shadow-lg active:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group">
        <div className="relative bg-gray-50 h-48 md:h-60 overflow-hidden flex items-center justify-center">
          <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm z-10">
            الأكثر مبيعاً
          </span>
          <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 active:scale-105" src={creem} alt="Creem" />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <span className="text-xs text-gray-400 mb-1">المكياج</span>
          <h3 className="font-bold text-gray-800 text-sm md:text-base line-clamp-1 group-hover:text-pink-600 group-active:text-pink-600 transition-colors">
            أحمر شفاه مات طويل الثبات
          </h3>
          <div className="flex items-center gap-1 my-2">
            <span className="text-yellow-400 text-xs">★★★★★</span>
            <span className="text-gray-400 text-xs">(64)</span>
          </div>
          <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
            <div>
              <span className="text-pink-600 font-bold text-base md:text-lg">180 ج.م</span>
            </div>
            <button className="bg-pink-50 hover:bg-pink-600 text-pink-600 hover:text-white active:text-white p-2.5 rounded-xl transition-colors duration-300" title="إضافة للسلة">
              <span className="text-lg">🛒</span>
            </button>
          </div>
        </div>
      </div>

      {/* منتج 3 */}
      <div className="bg-white rounded-2xl border border-gray-100 hover:border-pink-200 active:border-pink-200 shadow-sm hover:shadow-lg active:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group">
        <div className="relative bg-gray-50 h-48 md:h-60 overflow-hidden flex items-center justify-center">
          <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm z-10">
            الأكثر مبيعاً
          </span>
          <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 active:scale-105" src={frute} alt="Frute" />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <span className="text-xs text-gray-400 mb-1">العناية بالشعر</span>
          <h3 className="font-bold text-gray-800 text-sm md:text-base line-clamp-1 group-hover:text-pink-600 group-active:text-pink-600 transition-colors">
            ماسك الشعر المغذي بزيت الأرجان
          </h3>
          <div className="flex items-center gap-1 my-2">
            <span className="text-yellow-400 text-xs">★★★★★</span>
            <span className="text-gray-400 text-xs">(35)</span>
          </div>
          <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
            <div>
              <span className="text-pink-600 font-bold text-base md:text-lg">310 ج.م</span>
              <span className="text-gray-400 text-xs line-through mr-2">390 ج.م</span>
            </div>
            <button className="bg-pink-50 hover:bg-pink-600 text-pink-600 hover:text-white active:text-white p-2.5 rounded-xl transition-colors duration-300" title="إضافة للسلة">
              <span className="text-lg">🛒</span>
            </button>
          </div>
        </div>
      </div>

      {/* منتج 4 */}
      <div className="bg-white rounded-2xl border border-gray-100 hover:border-pink-200 active:border-pink-200 shadow-sm hover:shadow-lg active:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group">
        <div className="relative bg-gray-50 h-48 md:h-60 overflow-hidden flex items-center justify-center">
          <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm z-10">
            الأكثر مبيعاً
          </span>
          <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 active:scale-105" src={shia} alt="Shia" />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <span className="text-xs text-gray-400 mb-1">العناية بالجسم</span>
          <h3 className="font-bold text-gray-800 text-sm md:text-base line-clamp-1 group-hover:text-pink-600 group-active:text-pink-600 transition-colors">
            مقشر الجسم الطبيعي بالقهوة
          </h3>
          <div className="flex items-center gap-1 my-2">
            <span className="text-yellow-400 text-xs">★★★★★</span>
            <span className="text-gray-400 text-xs">(52)</span>
          </div>
          <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
            <div>
              <span className="text-pink-600 font-bold text-base md:text-lg">220 ج.م</span>
            </div>
            <button className="bg-pink-50 hover:bg-pink-600 text-pink-600 hover:text-white active:text-white p-2.5 rounded-xl transition-colors duration-300" title="إضافة للسلة">
              <span className="text-lg">🛒</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
    </div>
  )
}

export default PestSeler
