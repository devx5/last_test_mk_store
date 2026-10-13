import React from 'react';
import { Clock } from 'lucide-react';

export default function TimeFrames() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex items-center gap-4 bg-amber-50 border border-amber-200 p-4 rounded-2xl">
        <Clock className="w-10 h-10 text-amber-600 flex-shrink-0" />
        <div>
          <h3 className="font-bold text-gray-800 text-sm md:text-base">المدة المخصصة للفحص</h3>
          <p className="text-xs md:text-sm text-gray-600">مدة الـ 7 أيام هي المخصصة لفحص الطلب، لذا نرجو مراجعة الطلب فور استلامه.</p>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-purple-50 border border-purple-200 p-4 rounded-2xl">
        <Clock className="w-10 h-10 text-purple-600 flex-shrink-0" />
        <div>
          <h3 className="font-bold text-gray-800 text-sm md:text-base">بعد مرور 7 أيام</h3>
          <p className="text-xs md:text-sm text-gray-600">يعتبر الطلب مستلماً ومقبولاً بحالته، ولا يتم قبول أي طلب استبدال بعد انتهاء هذه المدة.</p>
        </div>
      </div>
    </div>
  );
}