import React from 'react';

export default function QualityPromise() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-pink-50 flex items-center justify-center text-3xl">
            📦
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
            وعد الجودة والسلامة في التخزين والشحن
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            نعلم أن مستحضرات التجميل والسيرومات حساسة جداً للحرارة والضوء. لذلك نضمن لكِ حفظ جميع المنتجات في مستودعات مجهزة بدرجات حرارة مثالية، ونغلفها بعناية فائقة لتصلكِ بأعلى جودة وكأنها خرجت من المصنع للتو.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-bold text-slate-700">
            <span className="px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-100">
              🌡️ تخزين مبرد ومُسيطر عليه
            </span>
            <span className="px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-100">
              🛡️ تغليف محكم ضد التلف
            </span>
            <span className="px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-100">
              🚚 توصيل سريع وآمن
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}