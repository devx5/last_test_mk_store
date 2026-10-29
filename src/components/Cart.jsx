import React, { useState } from 'react';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  Tag,
  CheckCircle2
} from 'lucide-react';

const CartPage = () => {
  // بيانات تجريبية جاهزة (تقدر تعدلها أو تربطها باللي تعمله براحتك)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'أحمر شفاه مطفي طويل الثبات - لون أحمر جريء',
      brand: 'MAC',
      price: 85.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      title: 'لوحة ظلال العيون نود بيوتي',
      brand: 'HUDA BEAUTY',
      price: 145.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState({ text: '', type: '' });

  // حساب الحسابات المالية
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shippingFee = subtotal > 5000 || subtotal === 0 ? 0 : 20;
  const discountAmount = (subtotal * appliedDiscount) / 100;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  // تحديث الكمية
  const updateQuantity = (id, newQty) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQty } : item
    ));
  };

  // حذف منتج
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // تطبيق كود الخصم
  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'NAMSHI20') {
      setAppliedDiscount(20);
      setPromoMessage({ text: 'تم تطبيق خصم 20% بنجاح! 🎉', type: 'success' });
    } else {
      setPromoMessage({ text: 'رمز القسيمة غير صالح', type: 'error' });
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center" dir="rtl">
        <div className="w-24 h-24 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <ShoppingBag className="w-12 h-12" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">سلة التسوق فارغة</h2>
        <p className="text-gray-500 mb-8 text-sm">أضف بعض المنتجات لتستمتع بالتسوق معنا!</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* العنوان */}
        <div className="mb-8 border-b border-gray-200 pb-4">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900">
            سلة التسوق <span className="text-pink-600 text-lg font-bold">({cartItems.length} منتجات)</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* قائمة المنتجات */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            {/* شريط الشحن المجاني */}
            <div className="bg-pink-50 border border-pink-100 rounded-2xl p-4 flex items-center gap-3">
              <Truck className="w-5 h-5 text-pink-600" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">
                {subtotal >= 200 
                  ? 'مبروك! لقد حصلت على شحن مجاني 🚀' 
                  : `أضف بقيمة $${(200 - subtotal).toFixed(2)} إضافية للحصول على شحن مجاني`}
              </span>
            </div>

            {cartItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 w-full flex flex-col justify-between gap-2">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-gray-400">{item.brand}</span>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base line-clamp-1">{item.title}</h3>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 p-1.5 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-2">
                    <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-9 text-center text-xs font-bold text-gray-800">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-left">
                      <span className="text-base font-black text-pink-600">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ملخص الطلب */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">ملخص الطلب</h2>

              <form onSubmit={handleApplyPromo} className="mb-5">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="كود الخصم (جرب NAMSHI20)"
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs uppercase font-bold focus:outline-none focus:border-pink-500"
                  />
                  <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-xl text-xs font-bold">تطبيق</button>
                </div>
                {promoMessage.text && (
                  <p className={`text-[11px] font-semibold mt-2 ${promoMessage.type === 'success' ? 'text-emerald-600' : 'text-red-500'}`}>
                    {promoMessage.text}
                  </p>
                )}
              </form>

              <div className="space-y-3 text-xs border-t border-gray-100 pt-4">
                <div className="flex justify-between text-gray-600">
                  <span>المجموع الفرعي</span>
                  <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>الخصم ({appliedDiscount}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>التوصيل</span>
                  <span>{shippingFee === 0 ? <span className="text-emerald-600 font-bold">مجاناً</span> : `$${shippingFee.toFixed(2)}`}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between items-center text-base font-black text-gray-900">
                  <span>المجموع الكلي</span>
                  <span className="text-xl text-pink-600">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => alert('تم إتمام الطلب بنجاح! 🎉')}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3.5 px-4 rounded-xl mt-6 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>متابعة الشراء الآمن</span>
                <CheckCircle2 className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;