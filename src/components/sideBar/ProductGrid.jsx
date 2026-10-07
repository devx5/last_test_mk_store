import React from 'react';

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="flex-1 bg-white rounded-2xl border border-slate-100 p-12 text-center">
        <div className="text-5xl mb-4">🔍</div>
        <h3 className="text-lg font-bold text-slate-800 mb-2">لا توجد منتجات تطابق الفلاتر</h3>
        <p className="text-xs text-slate-500">جرب تغيير خيارات البحث أو إعادة ضبط الفلترة لعرض نتائج أكثر.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="w-full h-40 bg-slate-50 rounded-xl flex items-center justify-center text-5xl mb-4">
              {product.image}
            </div>
            <span className="text-[11px] font-bold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-md">
              {product.brandName}
            </span>
            <h4 className="font-bold text-slate-800 text-sm mt-2 line-clamp-2">
              {product.name}
            </h4>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 block">السعر</span>
              <span className="text-base font-extrabold text-slate-900">{product.price} ج.م</span>
            </div>
            <button className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-xl text-xs font-bold transition cursor-pointer">
              إضافة للسلة 🛒
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}