import React from 'react'

function BeautyTipsBlog() {
  return (
    <div>
      {/* القسم الأخير: دليلك الجمالي والمدونة (القسم رقم 4) */}
<section className="py-14 bg-gray-50">
  <div className="container mx-auto px-4">
    
    {/* عنوان القسم */}
    <div className="text-center mb-10">
      <div className="inline-block bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
        دليلك الجمالي
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">نصائح ومقالات للعناية بجمالك</h2>
      <p className="text-gray-500 text-sm mt-2">اكتشفي أحدث أسرار العناية بالبشرة، الشعر، وروتينات المكياج اليومية</p>
    </div>

    {/* شبكة المقالات (متجاوبة مع الموبايل والتابلت والديسكتوب) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      
      {/* مقال 1 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 flex flex-col group">
        {/* صورة المقال أو التوضيح */}
        <div className="relative bg-pink-50 h-48 overflow-hidden flex items-center justify-center">
          <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-pink-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            العناية بالبشرة
          </span>
          <span className="text-5xl group-hover:scale-110 transition-transform duration-300">🌸</span>
        </div>

        {/* محتوى المقال */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="text-gray-400 text-xs mb-2">منذ يومين • 3 دقائق قراءة</div>
          <h3 className="font-bold text-gray-800 text-base md:text-lg mb-3 group-hover:text-pink-600 transition-colors line-clamp-2">
            الروتين المثالي للعناية بالبشرة المختلطة في أيام الصيف الحارة
          </h3>
          <p className="text-gray-500 text-sm mb-6 line-clamp-3">
            تعرفي على الخطوات البسيطة والمنتجات الأساسية للحفاظ على ترطيب ونقاء بشرتك وحمايتها من العوامل الخارجية طوال اليوم...
          </p>
          <div className="mt-auto pt-4 border-t border-gray-50">
            <a href="#" className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold text-sm transition-colors group">
              <span>اقرأ المقال كاملاً</span>
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
            </a>
          </div>
        </div>
      </div>

      {/* مقال 2 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 flex flex-col group">
        <div className="relative bg-pink-50 h-48 overflow-hidden flex items-center justify-center">
          <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-pink-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            العناية بالشعر
          </span>
          <span className="text-5xl group-hover:scale-110 transition-transform duration-300">🌿</span>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="text-gray-400 text-xs mb-2">منذ 4 أيام • 4 دقائق قراءة</div>
          <h3 className="font-bold text-gray-800 text-base md:text-lg mb-3 group-hover:text-pink-600 transition-colors line-clamp-2">
            أفضل الزيوت الطبيعية لعلاج تقصف الشعر وإعادة الحيوية إليه
          </h3>
          <p className="text-gray-500 text-sm mb-6 line-clamp-3">
            دليلك الشامل لاستخدام زيت الأرجان وجوز الهند بالطريقة الصحيحة للحصول على شعر لامع، صحي، وخالٍ من الهيشان...
          </p>
          <div className="mt-auto pt-4 border-t border-gray-50">
            <a href="#" className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold text-sm transition-colors group">
              <span>اقرأ المقال كاملاً</span>
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
            </a>
          </div>
        </div>
      </div>

      {/* مقال 3 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 flex flex-col group">
        <div className="relative bg-pink-50 h-48 overflow-hidden flex items-center justify-center">
          <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-pink-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            ص صيحات المكياج
          </span>
          <span className="text-5xl group-hover:scale-110 transition-transform duration-300">💄</span>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="text-gray-400 text-xs mb-2">منذ أسبوع • 5 دقائق قراءة</div>
          <h3 className="font-bold text-gray-800 text-base md:text-lg mb-3 group-hover:text-pink-600 transition-colors line-clamp-2">
            كيف تحصلين على إطلالة مكياج طبيعية وثابتة طوال ساعات العمل؟
          </h3>
          <p className="text-gray-500 text-sm mb-6 line-clamp-3">
            خطوات سريعة وبسيطة لعمل مكياج ناعم ويومي يناسب الخروجات الصباحية والعمل بدون مبالغة، مع أسرار تثبيت المكياج...
          </p>
          <div className="mt-auto pt-4 border-t border-gray-50">
            <a href="#" className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold text-sm transition-colors group">
              <span>اقرأ المقال كاملاً</span>
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
    </div>
  )
}

export default BeautyTipsBlog
