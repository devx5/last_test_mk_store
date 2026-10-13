import React from 'react';
import { XCircle } from 'lucide-react';

const cases = [
  { icon: '🚫', text: 'سوء الاستخدام أو التداول أو التخزين' },
  { icon: '💥', text: 'تعرض المنتج للتلف بعد استلامه' },
  { icon: '📦', text: 'المنتجات التي تم فتحها أو تجربتها' },
  { icon: '🏪', text: 'المنتجات المعروضة على عملاء التجربة' },
  { icon: '❓', text: 'أي حالة لا تثبت وجود عيب تصنيع' },
];

export default function RejectedCases() {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-6 text-red-600">
        <XCircle className="w-7 h-7" />
        <h2 className="text-xl font-bold">حالات لا يتم فيها قبول المرتجعات تماماً</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
        {cases.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center">
            <span className="text-2xl mb-2">{item.icon}</span>
            <p className="text-xs md:text-sm font-medium text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}