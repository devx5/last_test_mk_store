import React from 'react';

const team = [
  { id: 1, name: 'د. سارة أحمد', role: 'خبيرة العناية بالبشرة', icon: '👩‍⚕️' },
  { id: 2, name: 'مريم محمود', role: 'مستشارة جودة المنتجات', icon: '👩‍🔬' },
  { id: 3, name: 'نور الخالد', role: 'أخصائية تنسيق الروتين', icon: '✨' },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-pink-600 uppercase">
            فريقنا
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mt-1">
            الخبيرات خلف اختيار منتجاتكِ
          </h2>
          <p className="text-sm text-slate-500 " style={{ marginBottom: '0.5rem' }}>
            فريق متخصص يعمل يومياً لضمان اختيار أفضل المنتجات الآمنة لبشرتك
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div
              key={member.id}
              className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 text-center hover:shadow-md active:shadow-md transition-shadow duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-pink-100 flex items-center justify-center text-4xl shadow-inner">
                {member.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-lg">{member.name}</h3>
              <p className="text-xs text-pink-600 font-semibold mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}