import React from 'react';
import FilterSidebar from './FilterSidebar';

export default function FilterDrawer({ isOpen, onClose, filters, setFilters, onReset }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* خلفية معتمة عند الفتح */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* القائمة المنزلقة */}
      <div className="relative w-4/5 max-w-xs bg-white h-full shadow-2xl p-4 overflow-y-auto z-10 mr-auto text-right">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <span className="font-extrabold text-slate-800 text-sm">تصفية المنتجات</span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center text-sm hover:bg-slate-200 transition"
          >
            ✕
          </button>
        </div>

        <FilterSidebar filters={filters} setFilters={setFilters} onReset={onReset} />
      </div>
    </div>
  );
}