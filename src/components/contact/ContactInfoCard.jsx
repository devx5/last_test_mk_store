import React from 'react';

const contactMethods = [
 {
 id: 2,
 title: 'phone',
 detail: '+201062773439',
 subText: 'متاحون يومياً من 9 صباحاً حتى 10 مساءً' ,
 icon: <i className="fa-solid fa-square-phone text-[30px] md:text-[40px]" style={{ color: " #25D366" }} />,
 actionText: 'اتصل بنا',
 actionLink: 'tel:+201062773439',
 color: 'bg-emerald-50 border-emerald-100 text-emerald-700',
 },
 {
 id: 1,
 title: 'خدمة العملاء والواتساب',
 detail: '+20 106 277 3439',
 subText: 'نرد على جميع الاستفسارات خلال 24 ساعة',
 icon: <i className="fa-brands fa-square-whatsapp text-[30px] md:text-[40px]" style={{ color: " #25D366" }} />,
 actionText: 'مراسلة عبر واتساب',
 actionLink: 'https://wa.me/201062773439',
 color: 'bg-emerald-50 border-emerald-100 text-emerald-700',
 },
 {
 id: 3,
 title: 'صفحه فيسبوك',
 detail: 'المنصوره، مصر',
 subText: 'شارع الجيش، حي شرق',
 icon: <i className="fa-brands fa-facebook text-[30px] md:text-[40px]" style={{ color: " #0044ff" }} />,
 actionText: 'عرض على الخريطة',
 actionLink: '#',
 color: 'bg-blue-50 border-blue-100 text-blue-700',
 },
 {
 id: 4,
 title: 'صفحه انستجرام',
 detail: 'المنصوره، مصر',
 subText: 'شارع الجيش، حي شرق',
 icon: <i className="fa-brands fa-instagram text-[30px] md:text-[40px]" style={{ color: " #E4405F" }} />,
 actionText: 'عرض على الخريطة',
 actionLink: '#',
 color: 'bg-red-50 border-red-100 text-red-700',
 },
 {
 id: 5,
 title: 'صفحه تيكتوك',
 detail: 'المنصوره، مصر',
 subText: 'شارع الجيش، حي شرق',
 icon:  <i className="fa-brands fa-tiktok text-[30px] md:text-[40px]" />,
 actionText: 'عرض على الخريطة',
 actionLink: '#',
 color: 'bg-blue-50 border-blue-100 text-blue-700',
 },
  {
    id: 6,
    title: 'المقر الرئيسي والمقر الإداري',
    detail: 'المنصوره، مصر',
    subText: 'شارع الجيش، حي شرق',
    icon: '📍',
    actionText: 'عرض على الخريطة',
    actionLink: '#',
    color: 'bg-purple-50 border-purple-100 text-purple-700',
  },
];

export default function ContactInfoCards() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-1 active:-translate-y-1 ${item.color}`}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">{item.title}</h3>
              <p className="font-extrabold text-slate-900 text-base mb-1" dir="ltr">
                {item.detail}
              </p>
              <p className="text-xs text-slate-500 mb-4">{item.subText}</p>
              <a
                href={item.actionLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 bg-white rounded-xl text-xs font-bold shadow-sm border border-slate-200 hover:bg-slate-50 active:bg-slate-100 transition"
              >
                {item.actionText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}