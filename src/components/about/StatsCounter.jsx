import React from 'react';

const stats = [
  { id: 1, number: '+50,000', label: 'عميلة أبدت رضاها', icon: '🛍️' },
  { id: 2, number: '+1,200', label: 'منتج أصلي متوفر', icon: '✨' },
  { id: 3, number: '99%', label: 'نسبة التقييمات الإيجابية', icon: '⭐' },
  { id: 4, number: '24/7', label: 'دعم واستشارات مجانية', icon: '💬' },
];

export default function StatsCounter() {
  return (
    <section className="py-12 bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 text-white relative overflow-hidden shadow-inner">
      {/* خلفية جمالية */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition duration-300"
            >
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-1">
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm text-pink-100 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}