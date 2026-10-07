import React from 'react';

const values = [
  {
    id: 1,
    title: 'أصالة وجودة 100%',
    description: 'نتعامل مباشرة مع الموزعين والوكلاء المعتمدين لضمان وصول المنتج الأصلي تماماً لكِ.',
    icon: '🛡️',
    bgCard: 'bg-emerald-50/60',
    borderColor: 'border-emerald-100 hover:border-emerald-300',
    iconBg: 'bg-emerald-100 text-emerald-600',
  },
  {
    id: 2,
    title: 'مكونات آمنة ونظيفة',
    description: 'نحرص على اختيار منتجات خالية من المواد القاسية والضارة لضمان صحة بشرتكِ وشعركِ.',
    icon: '🌿',
    bgCard: 'bg-green-50/60',
    borderColor: 'border-green-100 hover:border-green-300',
    iconBg: 'bg-green-100 text-green-600',
  },
  {
    id: 3,
    title: 'استشارات متخصصة',
    description: 'فريقنا متواجد لمساعدتكِ في تحليل احتياج بشرتكِ واختيار الروتين الأنسب لكِ.',
    icon: '💡',
    bgCard: 'bg-amber-50/60',
    borderColor: 'border-amber-100 hover:border-amber-300',
    iconBg: 'bg-amber-100 text-amber-600',
  },
  {
    id: 4,
    title: 'شفافية وأمانة كاملة',
    description: 'نوضح كافة تفاصيل المكونات وطريقة الاستخدام بكل أمانة ووضوح قبل اتخاذ قرار الشراء.',
    icon: '🤝',
    bgCard: 'bg-blue-50/60',
    borderColor: 'border-blue-100 hover:border-blue-300',
    iconBg: 'bg-blue-100 text-blue-600',
  },
];

export default function CoreValues() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-pink-600 uppercase">
            مبادئنا
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mt-1">
            القيم التي نلتزم بها معكم
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            الأعمدة الأساسية التي نعتمد عليها في اختيار كل منتج وتجربة نقدمها لكِ
          </p>
        </div>

        {/* شبكة الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-md ${item.bgCard} ${item.borderColor}`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm ${item.iconBg}`}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}