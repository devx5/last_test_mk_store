import React from 'react';
import { Star, ShoppingCart, Check } from 'lucide-react';

export default function ProductCard({ product, rating, isAdded, onRate, onAddToCart }) {
  return (
    <div>
         <div 
                  key={product.id} 
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col justify-between hover:shadow-xl active:shadow-md transition-all duration-300 hover:-translate-y-1.5 active:translate-y-0"
                >
                  <div>
                    <div className="overflow-hidden relative">
                      <img 
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        src={product.thumbnail} 
                        alt={product.title} 
                        className="w-full h-48 object-cover bg-gray-100 transition-transform duration-500 hover:scale-105 active:scale-95"
                      />
                    </div>
                    <div className="p-4 text-left">
                      <h3 className="font-bold text-gray-800 text-base mb-1 truncate">{product.title}</h3>
                      <p className="text-pink-600 font-semibold mb-3">${product.price}</p>
                    </div>
                  </div>

                  <div className="p-4 pt-0 border-t border-gray-100 mt-2 flex flex-col gap-3">
                    {/* عرض التقييم الحالي */}
                    <div className="flex items-center justify-between text-sm text-gray-600 pt-2">
                      <span>التقييم الحالي:</span>
                      <span className="font-bold text-amber-500 flex items-center gap-1">
                        {rating || 0} <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      </span>
                    </div>

                    {/* تفاعلية النجوم لتغيير التقييم */}
                    <div className="flex justify-center gap-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          onClick={() => onRate(product.id, star)}
                          className="focus:outline-none transition-transform hover:scale-125 active:scale-90"
                        >
                          <Star 
                            className={`w-5 h-5 transition-colors duration-200 ${
                              star <= (rating || 0)
                                ? 'fill-amber-400 text-amber-400' 
                                : 'text-gray-300'
                            }`} 
                          />
                        </button>
                      ))}
                    </div>

                    {/* زر أضف إلى السلة */}
                    <button 
                    
                      onClick={() => onAddToCart(product)}
                      className={`w-full mt-2 font-medium py-2.5 cursor-pointer px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm active:scale-95 ${
                        isAdded
                          ? 'bg-green-600 hover:bg-green-700 active:bg-green-800 text-white scale-105 shadow-green-200'
                          : 'bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white shadow-pink-100 hover:shadow-md'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4 animate-bounce" />
                          تمت الإضافة بنجاح!
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4 transition-transform group-hover:rotate-12 group-active:rotate-12 " />
                          أضف إلى السلة
                        </>
                      )}
                    </button>
                  </div>

                </div>
    </div>
    
  );
}