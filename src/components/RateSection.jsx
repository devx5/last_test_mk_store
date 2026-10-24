import React, { useState } from 'react';
import { Star, MessageSquare, Send, Quote } from 'lucide-react';

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
  // حالة النجوم التفاعلية والكومنت الجديد الخاص باليوزر
  const [newRating, setNewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [userName, setUserName] = useState('');
  const [newComment, setNewComment] = useState('');

  // دالة إضافة تقييم جديد
  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!userName || !newComment || newRating === 0) {
      alert('الرجاء إدخال الاسم، كتابة التعليق، وتحديد عدد النجوم!');
      return;
    }

    const reviewItem = {
      id: Date.now(),
      name: userName,
      role: 'عميل جديد',
      comment: newComment,
      rating: newRating,
    };

    setReviews([reviewItem, ...reviews]);
    setUserName('');
    setNewComment('');
    setNewRating(0);
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
    <div
      key={review.id}
      className="bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl active:shadow-xl relative border border-gray-100 flex flex-col justify-between"
    >
      <div className="absolute top-2 left-2 text-emerald-600 opacity-20">
        <Quote size={40} />
      </div>
      
      <div>
        {/* نجوم العرض */}
        <div className="flex space-x-1 space-x-reverse mb-4 justify-end">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={`${
                i < review.rating
                  ? 'text-amber-400 fill-amber-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>

        <p className="text-gray-700 text-base mb-6 leading-relaxed">
          "{review.comment}"
        </p>
      </div>

      <div className="flex items-center pt-4 border-t border-gray-100 justify-end">
         <div className=" ">
          <h4 className="text-sm font-bold text-gray-900">{review.name}</h4>
          <span className="text-xs text-emerald-600 font-medium ml-8">{review.role}</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
          {review.name.charAt(0)}
        </div>
       
      </div>
    </div>
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
        {/* نموذج إضافة رأي وتكييف النجوم التفاعلية */}
        <div className="w-full  bg-white rounded-2xl shadow-lg p-8 border border-gray-100 ">
          <h3 className="text-xl  font-bold text-gray-900 mb-4 flex items-center justify-end gap-2">
            أضف تقييمك ورأيك بكل شفافية
            <MessageSquare className="text-emerald-600 flex justify-end" size={24} />
          </h3>

          <form onSubmit={handleSubmitReview} >
            {/* تفاعل النجوم */}
            <div>
              <label className="block text-sm font-medium text-gray-700 py-3 flex justify-end">تقييمك للمنتجات:</label>
              <div className="flex  justify-end space-x-1 space-x-reverse cursor-pointer">
                {[...Array(5)].map((_, index) => {
                  const starValue = index + 1;
                  return (
                    <Star
                      key={index}
                      size={28}
                      className={`transition-colors duration-150 ${
                        starValue <= (hoverRating || newRating)
                          ? 'text-amber-400 fill-amber-400 scale-110'
                          : 'text-gray-300'
                      }`}
                      onClick={() => setNewRating(starValue)}
                      onMouseEnter={() => setHoverRating(starValue)}
                      onMouseLeave={() => setHoverRating(0)}
                    />
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 py-2 flex justify-end"> الاسم:</label>
              <input
                type="text"
                value={userName}
                dir="rtl"
                onChange={(e) => setUserName(e.target.value)}
                placeholder="اكتب اسمك هنا..."
                className="w-full  px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none "
              />
            </div>

            <div>
              <label className="block py-3 text-sm font-medium text-gray-700 mb-1 flex justify-end">رأيك أو تعليقك:</label>
              <textarea
                rows="3"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                dir="rtl"
                placeholder="شاركنا تجربتك مع المنتجات..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <Send size={18} />
              إرسال التقييم
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}