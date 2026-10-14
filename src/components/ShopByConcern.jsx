import React from 'react';

const concerns = [
  {
    id: 1,
    title: 'حب الشباب والعيوب',
    description: 'تنقية وتنظيف عميق للبشرة',
    icon: '✨',
    bgCard: 'bg-rose-50',
    borderColor: 'border-rose-100 hover:border-rose-300',
  },
  {
    id: 2,
    title: 'الجفاف والترطيب',
    description: 'استعادة النضارة والنعومة',
    icon: '💧',
    bgCard: 'bg-blue-50',
    borderColor: 'border-blue-100 hover:border-blue-300',
  },
  {
    id: 3,
    title: 'الهالات والتفتيح',
    description: 'توحيد لون البشرة والإشراق',
    icon: '☀️',
    bgCard: 'bg-amber-50',
    borderColor: 'border-amber-100 hover:border-amber-300',
  },
  {
    id: 4,
    title: 'تساقط وتقوية الشعر',
    description: 'تغذية البصيلات وتكثيف الشعر',
    icon: '🌿',
    bgCard: 'bg-emerald-50',
    borderColor: 'border-emerald-100 hover:border-emerald-300',
  },
];

export default function ShopByConcern() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-xl mx-auto " style={{ marginBottom: '2rem' }}>
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
              className='p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-center group ${item.bgCard} ${item.borderColor}}'
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-sm flex items-center justify-center text-3xl group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 mb-4">{item.description}</p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-pink-600 group-hover:-translate-x-1 group-active:-translate-x-1 transition-transform duration-300">
                <span>استكشفي المنتجات</span>
                <span>&#8592;</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}