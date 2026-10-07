import React from 'react';

export default function FilterSidebar({ filters, setFilters, onReset }) {
  // الأقسام
  const categories = [
    { id: 'all', name: 'جميع الأقسام' },
    { id: 'skincare', name: 'العناية بالبشرة' },
    { id: 'makeup', name: 'المكياج والتجميل' },
    { id: 'haircare', name: 'العناية بالشعر' },
  ];

  // الماركات
  const brands = [
    { id: 'loreal', name: 'لوريال' },
    { id: 'cerave', name: 'سيرافي' },
    { id: 'maybelline', name: 'مايبيلين' },
    { id: 'ordinary', name: 'ذا اورديناري' },
    { id: 'laroche', name: 'لاروش بوزيه' },
  ];

  const handleBrandChange = (brandId) => {
    const updated = filters.brands.includes(brandId)
      ? filters.brands.filter((b) => b !== brandId)
      : [...filters.brands, brandId];
    setFilters({ ...filters, brands: updated });
  };

  return (
    <aside className="w-full lg:w-72 bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-6 text-right">
      {/* 1. هيدر الفلتر + إعادة الضبط */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <h3 className="font-extrabold text-slate-800 text-lg flex items-center gap-2">
          <span>⚙️</span> الفلترة الشاملة
        </h3>
        <button
          onClick={onReset}
          className="text-xs text-pink-600 hover:text-pink-700 font-bold underline cursor-pointer"
        >
          إعادة ضبط
        </button>
      </div>

      {/* 2. حقل البحث بالاسم */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
          بحث عن منتج
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث باسم المنتج..."
            value={filters.searchQuery}
            onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-pink-500 bg-slate-50"
          />
        </div>
      </div>

      <hr className="border-slate-100" />

      {/* 3. الفلترة بالأقسام */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          الأقسام
        </h4>
        <div className="space-y-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilters({ ...filters, category: cat.id })}
              className={`w-full text-right px-3 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
                filters.category === cat.id
                  ? 'bg-pink-50 text-pink-600 font-bold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <hr className="border-slate-100" />

      {/* 4. نطاق السعر (Price Range) */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-xs font-bold text-slate-700">
          <span>السعر الأقصى:</span>
          <span className="text-pink-600 text-sm font-black">{filters.maxPrice} ج.م</span>
        </div>
        <input
          type="range"
          min="100"
          max="1000"
          step="50"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
          className="w-full accent-pink-600 cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-slate-400 font-bold">
          <span>100 ج.م</span>
          <span>1,000 ج.م</span>
        </div>
      </div>

      <hr className="border-slate-100" />

      {/* 5. الماركات */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          العلامة التجارية
        </h4>
        <div className="space-y-2 pt-1">
          {brands.map((brand) => (
            <label
              key={brand.id}
              className="flex items-center gap-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900"
            >
              <input
                type="checkbox"
                checked={filters.brands.includes(brand.id)}
                onChange={() => handleBrandChange(brand.id)}
                className="w-4 h-4 rounded text-pink-600 focus:ring-pink-500 border-slate-300 accent-pink-600 cursor-pointer"
              />
              <span>{brand.name}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}