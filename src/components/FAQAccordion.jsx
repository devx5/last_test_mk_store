import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'هل جميع المنتجات في المتجر أصلية 100%؟',
    answer: 'نعم، جميع منتجاتنا أصلية وتأتي مباشرة من الوكلاء المعتمدين والمصانع الرسمية للعلامات التجارية.',
  },
  {
    id: 2,
    question: 'كم تستغرق مدة التوصيل والطلب؟',
    answer: 'يستغرق التوصيل داخل القاهرة والجيزة من 24 إلى 48 ساعة، وللباقي المحافظات خلال 2 إلى 4 أيام عمل.',
  },
  {
    id: 3,
    question: 'ما هي سياسة الاستبدال والاسترجاع؟',
    answer: 'يحق لكِ استبدال أو استرجاع أي منتج خلال 14 يوماً من تاريخ الاستلام بشرط أن يكون المنتج في حالته الأصلية ولم يتم فتحه.',
  },
  {
    id: 4,
    question: 'كيف يمكنني معرفة المنتج المناسب لنوع بشرتي؟',
    answer: 'يمكنكِ استخدام بنر "مستشار البشرة الذكي" في أعلى الصفحة أو التواصل مع فريق خبيرات التجميل لدينا عبر الواتساب لتلقي استشارة مجانية.',
  },
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-3xl" style={{ marginBottom: '2rem' }}>
        {/* Title */}
        <div className="text-center " style={{ marginBottom: '1rem' }}>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800" >
            الأسئلة الشائعة
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            إجابات على أكثر الاستفسارات التي تهمك قبل الشراء
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 "
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-right p-5 bg-slate-50/50 hover:bg-slate-50 active:bg-slate-50 flex items-center justify-between gap-4 font-bold text-slate-800 text-sm sm:text-base cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`transform transition-transform duration-300 text-pink-600 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="p-5 bg-white border-t border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}