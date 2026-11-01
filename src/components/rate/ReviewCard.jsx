import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function ReviewCard({ review , isLoading }) {
    if (isLoading) {
    return <ReviewCardSkeleton />;
  }
  return (
    <div
      key={review.id}
      className="bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl active:shadow-xl active:-translate-y-2 relative border border-gray-100 flex flex-col justify-between"
    >
      <div className="absolute top-2 left-2 text-emerald-600 opacity-20">
        <Quote size={40} />
      </div>
      <div>
        {/* نجوم العرض */}
        <div className="flex space-x-1 space-x-reverse mb-4 justify-end ">
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
  );
} 