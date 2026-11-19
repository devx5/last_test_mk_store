import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
  ShoppingBag,
  Plus,
  Minus,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  ArrowRight,
  Star,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError('');
    setQuantity(1);
    setIsFavorite(false);

    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`https://dummyjson.com/products/${id}`);

        if (isMounted) {
          setProduct(data);
          setSelectedImage(data.images?.[0] || data.thumbnail || '');
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError('تعذر تحميل بيانات المنتج حالياً.');
          setLoading(false);
        }
      }
    };

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleAddToCart = () => {
    alert(`تمت إضافة (${quantity}) من "${product.title}" إلى السلة 🛒`);
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-b from-[#659287] to-[#CFECF3] min-h-screen py-8 animate-pulse" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="h-4 w-48 bg-white/50 rounded mb-6" />

          {/* الكارت الرئيسي */}
          <div className="bg-white/70 rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* صور المنتج */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="aspect-square w-full bg-gray-200/80 rounded-2xl" />
              <div className="flex items-center gap-3">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="w-20 h-20 rounded-xl bg-gray-200/80" />
                ))}
              </div>
            </div>

            {/* تفاصيل المنتج */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div className="h-6 w-24 bg-gray-200/80 rounded-full" />
                  <div className="h-4 w-28 bg-gray-200/80 rounded" />
                </div>
                <div className="h-8 w-3/4 bg-gray-200/80 rounded-lg" />
                <div className="h-4 w-32 bg-gray-200/80 rounded" />
                <div className="h-9 w-36 bg-gray-200/80 rounded-lg" />
                <div className="space-y-2 pt-2">
                  <div className="h-4 w-full bg-gray-200/80 rounded" />
                  <div className="h-4 w-11/12 bg-gray-200/80 rounded" />
                  <div className="h-4 w-2/3 bg-gray-200/80 rounded" />
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="h-11 w-32 bg-gray-200/80 rounded-xl" />
                  <div className="h-12 flex-1 bg-gray-200/80 rounded-xl" />
                  <div className="h-12 w-12 bg-gray-200/80 rounded-xl" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-gray-100">
                {[1, 2, 3].map((box) => (
                  <div key={box} className="h-11 bg-gray-200/80 rounded-xl" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center" dir="rtl">
        <p className="text-red-600 font-bold mb-4">{error || 'المنتج غير موجود'}</p>
        <Link to="/all-products" className="text-sm font-bold text-pink-600 underline">
          العودة إلى المنتجات
        </Link>
      </div>
    );
  }

  const images = product.images?.length ? product.images : [product.thumbnail].filter(Boolean);
  const currentIndex = Math.max(0, images.indexOf(selectedImage));
  const oldPrice =
    product.discountPercentage > 0
      ? product.price / (1 - product.discountPercentage / 100)
      : null;

  const handlePrevImage = () => {
    if (images.length <= 1) return;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  const handleNextImage = () => {
    if (images.length <= 1) return;
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  return (
    <div className="bg-gradient-to-b from-[#659287] to-[#CFECF3] min-h-screen py-8" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex items-center gap-2 text-xs text-gray-500 pb-3">
          <Link to="/" className="hover:text-pink-600">الرئيسية</Link>
          <span>/</span>
          <Link to="/all-products" className="hover:text-pink-600">المنتجات</Link>
          <span>/</span>
          <span className="text-gray-900 font-bold truncate">{product.title}</span>
        </div>

        <div className="bg-white/70 rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* صور المنتج */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative aspect-square w-full bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
              <img
                src={selectedImage || images[0]}
                alt={product.title}
                className="w-full h-full object-contain p-4"
              />

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    aria-label="الصورة السابقة"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center text-gray-700 hover:text-pink-600 transition shadow-sm"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label="الصورة التالية"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center text-gray-700 hover:text-pink-600 transition shadow-sm"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition bg-gray-50 ${
                      (selectedImage || images[0]) === img
                        ? 'border-pink-600'
                        : 'border-gray-200 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} ${idx + 1}`}
                      className="w-full h-full object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* تفاصيل المنتج والشراء */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 pb-15">
                <span className="text-xs font-extrabold uppercase tracking-wider text-pink-600 bg-pink-50 px-3 py-2 rounded-full animate-pulse">
                  {product.brand || product.category}
                </span>
                <span
                  className={`text-xs font-bold ${
                    product.stock > 0 ? 'text-emerald-600' : 'text-red-500'
                  }`}
                >
                  {product.stock > 0 ? `متوفر (${product.stock} قطعة)` : 'غير متوفر حالياً'}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 pb-3 ">
                {product.title}
              </h1>

              <div className="flex items-center gap-2 text-xs text-gray-600 pb-5">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{product.rating}</span>
                </div>
                <span>({product.reviews?.length || 0} تقييم)</span>
              </div>

              <div className="flex items-baseline gap-3  border-b border-gray-100 pb-3">
                <span className="text-3xl font-black text-pink-600 pl-2">
                  ${Number(product.price).toFixed(2)}
                </span>
                {oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ${oldPrice.toFixed(2)}
                  </span>
                )}
                {product.discountPercentage > 0 && (
                  <span className="text-xs font-bold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-full">
                    وفر {Math.round(product.discountPercentage)}%
                  </span>
                )}
              </div>

              <p dir='ltr' className="text-sm text-gray-600 leading-relaxed pt-3">
                {product.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-40">
                <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-11 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-11 text-center text-sm font-bold text-gray-900 ">{quantity}</span>
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((q) => (product.stock ? Math.min(product.stock, q + 1) : q + 1))
                    }
                    className="w-10 h-11 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  type="button"
                  disabled={product.stock <= 0}
                  onClick={handleAddToCart}
                  className="flex-1 min-w-[200px] bg-pink-600 hover:bg-pink-700 disabled:bg-gray-300 text-white font-bold py-3.5 px-6 rounded-xl transition flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>إضافة إلى السلة</span>
                </button>

                <button
                  type="button"
                  aria-label="إضافة للمفضلة"
                  onClick={() => setIsFavorite((prev) => !prev)}
                  className={`group w-12 h-12 rounded-xl border flex items-center justify-center transition cursor-pointer ${
                    isFavorite
                      ? 'text-red-500 border-red-200 bg-red-50/60'
                      : 'border-gray-200 text-gray-600 hover:text-red-500 hover:border-red-200'
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 transition-colors  ${
                      isFavorite
                        ? 'fill-red-500 text-red-500'
                        : 'group-hover:fill-red-500'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-gray-100 text-xs text-gray-600">
              <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl">
                <Truck className="w-4 h-4 text-pink-600 flex-shrink-0" />
                <span>توصيل سريع وآمن</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-pink-600 flex-shrink-0" />
                <span>منتجات أصلية 100%</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl">
                <RotateCcw className="w-4 h-4 text-pink-600 flex-shrink-0" />
                <span>إرجاع سهل وميسر</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3">
          <Link
            to="/all-products"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-pink-600"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة لتصفح المنتجات</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;