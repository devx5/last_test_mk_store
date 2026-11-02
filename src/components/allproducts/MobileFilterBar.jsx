import React from 'react';
import { Filter } from 'lucide-react';

export default function MobileFilterBar({ productCount, onOpenDrawer }) {
  return (
    <div>
       {/* زر فتح الفلترة للموبايل والتابلت */}
          <div className="lg:hidden mb-6 flex justify-between items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm" style={{ marginBottom: '2rem' }}>
            <span className="text-sm font-bold text-gray-700">
              المنتجات المتاحة ({productCount})
            </span>
            <button
              onClick={onOpenDrawer}
              className="px-4 py-2.5 bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition shadow-sm active:scale-95"
            >
              <Filter className="w-4 h-4" />
              تصفية المنتجات
            </button>
          </div>
          </div>
  );
}