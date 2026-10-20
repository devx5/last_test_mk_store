import React from 'react';

// استيراد الصور من مجلد icon
import acneImg from '../assets/img/icon/acne.webp';
import droughtImg from '../assets/img/icon/drought.jpg';
import witImg from '../assets/img/icon/wit.webp';
import hairlessImg from '../assets/img/icon/hairless.webp';

const concerns = [
  {
    id: 1,
    title: 'حب الشباب والعيوب',
    description: 'تنقية وتنظيف عميق للبشرة',
    bgImage: acneImg,
  },
  {
    id: 2,
    title: 'الجفاف والترطيب',
    description: 'استعادة النضارة والنعومة',
    bgImage: droughtImg,
  },
  {
    id: 3,
    title: 'الهالات والتفتيح',
    description: 'توحيد لون البشرة والإشراق',
    bgImage: witImg,
  },
  {
    id: 4,
    title: 'تساقط وتقوية الشعر',
    description: 'تغذية البصيلات وتكثيف الشعر',
    bgImage: hairlessImg,
  },
];

export default function ShopByConcern() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-xl mx-auto" style={{ marginBottom: '2rem' }}>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">
            تسوقي حسب احتياج بشرتك وشعرك
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            اختاري المشكلة التي ترغبين في علاجها واكتشفي المنتجات المخصصة لها
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {concerns.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-center bg-cover bg-center overflow-hidden relative group aspect-square flex flex-col justify-end shadow-sm hover:shadow-md"
              style={{ backgroundImage: `url(${item.bgImage})` }}
            >
              {/* Overlay تظهر فقط عند الهوفر لتوضيح النص */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* المحتوى مع أنيميشن انزلاق للأعلى وظهور */}
              <div className="relative z-10 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <h3 className="font-bold text-white text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-200 mb-3">{item.description}</p>
                <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-pink-300 group-hover:-translate-x-1 transition-transform duration-300">
                  <span>استكشفي المنتجات</span>
                  <span>&#8592;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}