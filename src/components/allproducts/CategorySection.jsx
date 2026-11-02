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
                 className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-pink-50 active:bg-pink-100 rounded-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-pink-200 active:border-pink-300 group shadow-sm hover:-translate-y-1 active:translate-y-0"
               >
                 <div className="w-20 h-20  bg-white rounded-full shadow-sm  group-hover:scale-110 group-active:scale-95 transition-transform duration-300 flex items-center justify-center overflow-hidden" style={{marginBottom: "10px"}}>
                   <img 
                     src={cat.icon} 
                     alt={cat.name} 
                     className="w-full h-full object-cover rounded-full"
                   />
                 </div>
                 <span className=" text-xs sm:text-sm font-medium text-gray-700 text-center group-hover:text-pink-600 group-active:text-pink-700">
                   {cat.name}
                 </span>
               </div>
             ))}
           </div>
         </div>
        </div>
  );
}