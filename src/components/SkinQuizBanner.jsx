import React from 'react';

export default function SkinQuizBanner() {
  return (
    <section className="py-10 bg-gradient-to-b from-[#CFECF3] to-[#659287] ">
      <div className="container mx-auto px-4 bg-white/30 py-10 rounded-2xl shadow-lg">
        <div className="relative overflow-hidden rounded-3xl  p-8 sm:p-12 text-white shadow-xl bg-white/10">
          
          {/* دوائر خلفية جمالية */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full  blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full  blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            {/* الشارة العلوية */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs sm:text-sm font-semibold mb-4 border border-white/30 animate-bounce text-black" style={{marginBottom: "9px"}}>
              ✨ مستشار التجميل الذكي
            </span>

            {/* العنوان الرئيسي */}
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-tight text-black">
              مُحتارة في اختيار الروتين المناسب لبشرتك؟
            </h2>

            {/* الوصف */}
            <p className="text-black text-sm sm:text-base mb-8 leading-relaxed " style={{marginTop: "9px" , marginBottom:"9px"}}>
              أجيبي عن 4 أسئلة بسيطة خلال دقيقة واحدة، وسنقوم بتحليل احتياج بشرتك وترشيح المنتجات المثالية لكِ بدقة.
            </p>

            {/* زر البدء */}
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-pink-600 text-white font-bold rounded-2xl shadow-lg hover:bg-pink-50 hover:scale-105 transition-all duration-300 active:scale-95 text-sm sm:text-base cursor-pointer hover:text-black">
              <span>&#8592;</span>
              <span>ابدأي اختبار البشرة الآن</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}