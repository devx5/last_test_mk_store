import React, { useState } from 'react';
import ReviewCard from './ReviewCard';
import AddReviewForm from './AddReviewForm';

export default function TestimonialsSection() {
  // حالة تخزين بيانات التقييمات المعروضة
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'سارة أحمد',
      role: 'مشتري ',
      comment: 'منتجات المكياج اصلية وثباتها عالي جداً التوصيل كان سريع والخدمة ممتازة',
      rating: 5,
    },
    {
      id: 2,
      name: 'محمد خالد',
      role: 'مشتري ',
      comment: 'طلب عطر جوتشي وكان رائع وثابت، شكراً لمتجر مكه على المصداقية.',
      rating: 5,
    },
    {
      id: 3,
      name: 'منى محمود',
      role: 'مشتري ',
      comment: 'الأسعار ممتازة وعروض العناية بالشعر فرقت معايا جداً أنصح به بشدة.',
      rating: 4,
    },
  ]);
  const [showAll, setShowAll] = useState(false);
  // دالة إضافة تقييم جديد واستقباله من الابن الفورم
  const handleAddReview = (reviewItem) => {
    setReviews([reviewItem, ...reviews]);
  };

  return (
    <section id="rate_section" className=" bg-[#8EA48B] px-4 sm:px-6 lg:px-8" dir="rtl " style={{marginBottom: "30px"}}>
      <div className="">
      
        {/* عنوان السيكشن */}
        <div className="text-center my-8">
          <h2 className="text-3xl py-3 font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            آراء عملائنا المميزين
          </h2>
          <p className="py-5 text-lg text-black">
            نعتز بثقتكم ونسعى دائماً لتقديم أفضل تجربة تسوق مستحضرات تجميل وعطور.
          </p>
        </div>
       {/* شبكة الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 ">
          {(showAll ? reviews : reviews.slice(0, 3)).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        {/* زرار عرض الكل أو العودة للشكل المختصر */}
        <div className="text-center py-10">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className=" px-6 py-3 bg-white border-2 border-emerald-600 text-emerald-600 font-bold rounded-xl hover:bg-emerald-600 hover:text-white active:bg-emerald-600 active:text-white transition-all duration-300 shadow-sm cursor-pointer"
          >
            {showAll ? 'إخفاء التعليقات' : 'عرض جميع التعليقات'}
          </button>
        </div>
        {/* نموذج إضافة رأي */}
        <AddReviewForm onAddReview={handleAddReview} />
      </div>
    </section>
  ); }