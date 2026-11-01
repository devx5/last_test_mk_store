import React from 'react';
import ReviewCardSkeleton from './ReviewCardSkeleton';
export default function ReviewCardSkeleton() {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-6 relative border border-gray-100 flex flex-col justify-between animate-pulse"
    >
      {/* مكان أيقونة الاقتباس الوهمية */}
      <div className="absolute top-2 left-2 w-10 h-10 bg-gray-200 rounded opacity-40"></div>
      
      <div>
        {/* مكان النجوم الوهمية */}
        <div className="flex space-x-1 space-x-reverse mb-4 justify-end">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-[18px] h-[18px] bg-gray-200 rounded-full"></div>
          ))}
        </div>

        {/* مكان النص الوهمي */}
        <div className="space-y-2 mb-6">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5 ml-auto"></div>
        </div>
      </div>

      {/* مكان الجزء السفلي الوهمي */}
      <div className="flex items-center pt-4 border-t border-gray-100 justify-end">
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-20 ml-8"></div>
          <div className="h-2.5 bg-gray-200 rounded w-14 ml-8"></div>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
      </div>
    </div>
  );
}