import React from 'react';
import { PackageX, ShieldCheck, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ProductTypesPolicy() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* المنتجات المستوردة */}
      <div className="bg-rose-50/50 border border-rose-200 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-rose-500 text-white p-2 rounded-xl">
            <PackageX className="w-6 h-6" />
          </span>
          <h2 className="text-xl font-bold text-gray-800">أولاً: المنتجات المستوردة</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
          جميع المنتجات المستوردة (مثل: <span className="font-semibold text-rose-700">روز ريري، آرت سكين، أولي بولا، 3Q، كاريت، كيس بيوتي</span> وغيرها) <span className="font-bold underline text-rose-600">لا تخضع للاستبدال أو الاسترجاع</span> طالما تم تسليمها للعميل بحالة سليمة وخالية من أي تلف أو عيوب ظاهرة.
        </p>
        <div className="flex items-start gap-2 bg-rose-100/70 p-3 rounded-xl border border-rose-300 text-rose-800 text-sm">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>لذلك نرجو التأكد من الأصناف والكميات وحالة المنتجات عند الاستلام مباشرة.</span>
        </div>
      </div>

      {/* منتجات الشركات المصرية */}
      <div className="bg-blue-50/50 border border-blue-200 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-600 text-white p-2 rounded-xl">
            <ShieldCheck className="w-6 h-6" />
          </span>
          <h2 className="text-xl font-bold text-gray-800">ثانياً: منتجات الشركات المصرية</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
          بالنسبة لمنتجات الشركات المصرية (مثل: <span className="font-semibold text-blue-800">مايت سينما، ساندرا، جولد بيوتي، روز جولد</span> وغيرها)، يتم قبول المرتجع <span className="font-bold text-blue-700">فقط في حالة وجود عيب تصنيع فعلي</span>.
        </p>
        <div className="space-y-2 bg-white p-4 rounded-xl border border-blue-100 text-sm">
          <p className="font-semibold text-gray-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            عند اكتشاف عيب تصنيع يرجى:
          </p>
          <ul className="space-y-1 text-gray-600 pr-6 list-disc">
            <li>تصوير المنتج بوضوح.</li>
            <li>إرسال الصور أو الفيديو إلينا مع توضيح العيب.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}