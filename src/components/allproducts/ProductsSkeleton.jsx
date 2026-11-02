import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ProductsSkeleton() {
  return (
  <div>
      <div className="max-w-7xl mx-auto px-4 py-8" dir="rtl">
               {/* شيبه سيكشن الأقسام والـ Header عشان الصفحة متهتزش */}
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                 {[...Array(6)].map((_, index) => (
                   <div 
                     key={index} 
                     className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col justify-between p-4"
                   >
                     <div>
                       {/* مكان صورة الكارد */}
                       <div className="mb-4">
                         <Skeleton height={192} borderRadius={12} />
                       </div>
                       {/* مكان عنوان المنتج والسعر */}
                       <div className="mb-3">
                         <Skeleton height={20} width="80%" style={{ marginBottom: '8px' }} />
                         <Skeleton height={16} width="35%" />
                       </div>
                     </div>
        
                     <div className="pt-3 border-t border-gray-100 flex flex-col gap-3">
                       {/* مكان التقييم الحالي */}
                       <div className="flex items-center justify-between">
                         <Skeleton height={14} width="30%" />
                         <Skeleton height={14} width="20%" />
                       </div>
                       {/* مكان نجوم التقييم */}
                       <div className="flex justify-center gap-1 my-1">
                         {[...Array(5)].map((_, i) => (
                           <Skeleton key={i} circle width={20} height={20} />
                         ))}
                       </div>
                       {/* مكان زر أضف إلى السلة */}
                       <Skeleton height={40} borderRadius={12} />
                     </div>
                   </div>
                 ))}
               </div>
             </div>
  </div>
  );
}