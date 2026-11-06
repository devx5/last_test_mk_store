import React from 'react';
import { Sparkles } from 'lucide-react';

export default function CategorySection({ categories }) {
  return (
    <div>
       {/* سيكشن الأقسام العلوي */}
       <div className="mb-10 bg-white shadow-md rounded-2xl p-6 border border-gray-100" style={{ marginBottom: '3rem' }}>
         <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 " style={{ marginBottom: '1rem' }}>
           <Sparkles className="w-6 h-6 text-pink-600 animate-spin" style={{ animationDuration: '4s' }} />
           أقسام المنتجات
         </h2>
         
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">
           {categories.map((cat) => (
             <div 
               key={cat.id} 
               className="relative group flex flex-col items-center justify-end p-4 h-40 bg-gray-50 rounded-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-pink-200 active:border-pink-300 shadow-sm hover:-translate-y-1 active:translate-y-0 overflow-hidden"
             >
               {/* الصورة كخلفية تملأ الكارت بالكامل مع زووم عند الهوفر */}
               <img 
                 src={cat.icon} 
                 alt={cat.name} 
                 className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
               />

               {/* طبقة تظليل خفيفة فوق الصورة لضمان وضوح النص */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/80"></div>

               {/* اسم القسم */}
               <span className="relative z-10 text-xs sm:text-sm font-bold text-white text-center group-hover:text-pink-200 transition-colors">
                 {cat.name}
               </span>
             </div>
           ))}
         </div>
       </div>
    </div>
  );
}