import React from 'react'

function SaleSection() {
  return (
    <div >
      <section className="my-8 px-4 max-w-7xl mx-auto" dir="rtl">
  {/* هيدر القسم مع عداد التنازلي */}
  <div className="bg-gradient-to-l from-emerald-800  to-emerald-600 rounded-2xl p-6 text-white flex flex-col md:flex-row justify-between items-center shadow-lg mb-6">
    <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start text-center md:text-right">
      <span className="bg-amber-400 text-emerald-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        عرض لفترة محدودة ⏳
      </span>
      <h2 className="text-2xl md:text-3xl font-bold mt-2">تخفيضات العناية الملكية</h2>
      <p className="text-emerald-100 text-sm mt-1">وفر حتى 40% على أفضل منتجات التجميل والعناية.</p>
    </div>
    
    {/* شكل العد التنازلي */}
    <div className="flex gap-2 text-center">
      <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg">
        <span className="block text-xl font-bold">08</span>
        <span className="text-xs text-emerald-200">ساعات</span>
      </div>
      <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg">
        <span className="block text-xl font-bold">45</span>
        <span className="text-xs text-emerald-200">دقيقة</span>
      </div>
      <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg">
        <span className="block text-xl font-bold">30</span>
        <span className="text-xs text-emerald-200">ثانية</span>
      </div>
    </div>
  </div>

 
</section>
    </div>
  )
}

export default SaleSection
