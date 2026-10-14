import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BeautyProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // حالة لتخزين التقييمات التفاعلية لكل منتج حسب الـ ID
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    // جلب منتجات التجميل فقط من DummyJSON
    axios.get('https://dummyjson.com/products')
      .then(response => {
        // مصفوفة المنتجات داخل الـ response.data.products
        setProducts(response.data.products);
        
        // تعيين التقييمات الابتدائية القادمة من الـ API
        const initialRatings = {};
        response.data.products.forEach(prod => {
          initialRatings[prod.id] = Math.round(prod.rating || 0);
        });
        setRatings(initialRatings);
        
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // دالة لتحديث التقييم عند النقر على نجمة
  const handleRate = (productId, newRating) => {
    setRatings(prev => ({
      ...prev,
      [productId]: newRating
    }));
  };

  if (loading) {
    return <div className="text-center py-10">جاري التحميل...</div>;
  }

  return (
    <section className="py-3 px-4 md:px-8 max-w-7xl mx-auto ">
      <h2 className="text-2xl py-8 text-center font-bold text-gray-800 mb-8">منتجات التجميل والعناية</h2>
      
      {/* شبكة الكروت المتجاوبة */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-h-[900px] lg:max-h-[920px] overflow-hidden transition-all duration-500 ">
        {products.map((product) => {
          const currentRating = ratings[product.id] || 0;

          return (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md active:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              {/* صورة المنتج */}
              <div className="overflow-hidden relative bg-gray-50 h-52">
                <img 
                  src={product.thumbnail} // رابط الصورة المصغرة من الـ API
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-500" 
                />
              </div>

              {/* تفاصيل المنتج (العنوان والوصف) */}
              <div className="p-4 flex-1 flex flex-col justify-between ">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{product.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{product.description}</p>
                </div>

                {/* السعر */}
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold text-emerald-700 text-lg">
                    {product.price} $
                  </span>
                </div>
              </div>

              {/* النجوم التفاعلية الذهبية فوق زر تسوق الآن مباشرة */}
              <div className="px-4 pb-2 flex items-center justify-center gap-1 dir-ltr">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRate(product.id, star)}
                    className="focus:outline-none transition-transform hover:scale-125 active:scale-125 duration-150"
                  >
                    <i 
                      className={`fa-star ${star <= currentRating ? 'fa-solid text-amber-400' : 'fa-regular text-gray-300'} text-lg`}
                    ></i>
                  </button>
                ))}
              </div>
              
              {/* زر تسوق الآن */}
              <div className="p-4 pt-0">
                <button 
                  className="w-full bg-pink-600 text-white py-2.5 rounded-xl font-medium hover:bg-pink-700 active:bg-pink-700 transition-colors flex items-center justify-center gap-2"
                >
                  <span>تسوق الآن</span>
                  <i className="fa-solid fa-regular fa-cart-shopping" style={{color: "rgb(255, 255, 255)"}}></i>
                </button>
              </div>

            </div>
          );
        })}
      </div>
      
      {/* زر عرض الكل */}
      <div className="mt-18 md:py-4 lg:py-10 text-center ">
        <Link 
          to="/all-products" 
          className="inline-block bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-800 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-md"
        >
          <i className="fa-solid fa-arrow-left mr-2"></i>
          <span>عرض الكل</span>
        </Link>
      </div>
  
    </section>
  );
};

export default BeautyProducts;