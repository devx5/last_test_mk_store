import React from 'react';

export default function ContactHero() {
  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden text-center">
      <div className="container mx-auto px-4 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-bold mb-3">
          نحن هنا لمساعدتكِ 💬
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 leading-tight mb-4">
          تواصل معنا في أي وقت
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          لديكِ استفسار عن منتج، تتبع للطلب، أو تحتاجين استشارة تجميلية مجانية؟ فريق الدعم متواجد لخدمتكِ طوال الأسبوع.
        </p>
      </div>
    </section>
  );
}