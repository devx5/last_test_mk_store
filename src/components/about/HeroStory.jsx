import React from 'react';
import mekkah from '../../assets/img/mekkah.png'
export default function HeroStory() {
  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* النص والقصة */}
          <div className="text-right space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-bold">
              قصتنا وبدايتنا 🌸
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 leading-tight">
              نؤمن أن الجمال الحقيقي يبدأ من العناية الصحيحة
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              بدأت رحلتنا من شغف بسيط: تقديم منتجات عناية بالبشرة والشعر تكون أصلية 100% وآمنة تماماً. لاحظنا انتشار المنتجات المقلدة والمكونات الضارة، فقررنا إنشاء منصة موثوقة تجمع أفضل العلامات التجارية العالمية والمحلية في مكان واحد.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              اليوم، نفخر بتقديم استشارات مخصصة ومنتجات مختارة بعناية فائقة على يد خبراء لمساعدتكِ في الوصول للروتين المثالي لبشرتك.
            </p>
          </div>

          {/* الصورة أو البانر التوضيحي */}
          <div className="relative">
            <div className="aspect-4/3 rounded-3xl bg-gradient-to-tr from-pink-200 via-rose-100 to-amber-100 flex items-center justify-center text-6xl shadow-xl border border-white p-8">
             <img className='w-full h-full' src={mekkah} alt="" />
            </div>
            <div className="animate-bounce absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hidden sm:block">
              <p className="text-2xl font-black text-pink-600">100%</p>
              <p className="text-xs text-slate-500 font-bold">منتجات أصلية ومضمونة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}