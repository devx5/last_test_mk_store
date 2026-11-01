import React, { useState } from 'react';
import { Star, MessageSquare, Send } from 'lucide-react';

export default function AddReviewForm({ onAddReview }) {
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

    onAddReview(reviewItem);
    setUserName('');
    setNewComment('');
    setNewRating(0);
  };

  return (
    <div className="w-full  bg-white rounded-2xl shadow-lg p-8 border border-gray-100 ">
      <h3 className="text-xl  font-bold text-gray-900 mb-4 flex items-center justify-end gap-2">
        أضف تقييمك ورأيك بكل شفافية
        <MessageSquare className="text-emerald-600 flex justify-end" size={24} />
      </h3>

      <form onSubmit={handleSubmitReview} >
        {/* تفاعل النجوم */}
        <div>
          <label className="block text-sm font-medium text-gray-700 py-3 flex justify-end">تقييمك للمنتجات:</label>
          <div dir='rtl' className="flex  justify-start space-x-1 space-x-reverse cursor-pointer">
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
  );
}