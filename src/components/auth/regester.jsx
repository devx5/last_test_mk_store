import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا سيتم ربط الـ API الخاص بـ Laravel لاحقاً لتسجيل الحساب
    console.log("Register data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#8EA48B] px-4 py-12" dir="rtl">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        
        {/* رأس الصفحة والشعار */}
        <div className="text-center pb-6">
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
            إنشاء حساب جديد
          </h2>
          <p className="mt-2 text-sm text-gray-500 ">
            انضم إلينا اليوم واستمتع بأقوى العروض والحصريات
          </p>
        </div>

        {/* نموذج التسجيل */}
        <form className=" " onSubmit={handleSubmit}>
          <div className="">
            
            {/* حقل الاسم الكامل */}
            <div style={{ marginBottom: '1rem' }}>
              <label className="block text-sm font-medium text-gray-700 " style={{ marginBottom: '0.5rem' }}>
                الاسم الكامل
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition text-right"
                placeholder="محمد محمود"
              />
            </div>

            {/* حقل البريد الإلكتروني */}
            <div style={{ marginBottom: '1rem' }}>
              <label className="block text-sm font-medium text-gray-700 " style={{ marginBottom: '0.5rem' }}>
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition text-right"
                placeholder="name@example.com"
              />
            </div>

            {/* حقل كلمة المرور */}
            <div style={{ marginBottom: '1rem' }}>
              <label className="block text-sm font-medium text-gray-700 " style={{ marginBottom: '0.5rem' }}>
                كلمة المرور
              </label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition text-right"
                placeholder="••••••••"
              />
            </div>

            {/* حقل تأكيد كلمة المرور */}
            <div style={{ marginBottom: '1rem' }}>
              <label className="block text-sm font-medium text-gray-700 " style={{ marginBottom: '0.5rem' }}>
                تأكيد كلمة المرور
              </label>
              <input
                type="password"
                name="password_confirmation"
                required
                value={formData.password_confirmation}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition text-right"
                placeholder="••••••••"
              />
            </div>

          </div>

          {/* زر التسجيل */}
          <div className="pt-2" style={{ marginTop: '1.5rem' }}>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-pink-500 hover:bg-pink-600 active:bg-pink-600 text-white font-semibold rounded-lg shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
             style={{marginBottom:"1.5rem"}}
             >
              إنشاء الحساب
            </button>
          </div>

          {/* فاصل "أو" */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-gray-500 pb-3">تابعنا على المنصات الأخرى واكتشف المزيد</span>
            </div>
          </div>

          {/* قسم تابعنا على المنصات */}
          <div className="">
       

            {/* زر فيسبوك (لون أزرق فاتح مريح مع تباين ممتاز) */}
            <a href="https://www.facebook.com/profile.php?id=61594241914299" style={{marginBottom:"1rem"}}
            
              className="w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-blue-50 hover:bg-blue-100 active:bg-blue-100 border border-blue-200 text-blue-700 font-semibold rounded-lg shadow-sm transition duration-200 "
            >
              <svg className="w-5 h-5 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>المتابعة عبر فيسبوك</span>
            </a>

            {/* زر إنستغرام (خلفية وردية/بنفسجية فاتحة متناسقة) */}
            <a href="https://www.instagram.com/mekka_cosmetics?psln=MXRrZ2lxbWZlbnhzNw%3D%3D&utm_source=qr" style={{marginBottom:"1rem"}}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-pink-50 hover:bg-pink-100 active:bg-pink-100 border border-pink-200 text-pink-700 font-semibold rounded-lg shadow-sm transition duration-200"
            >
              <svg className="w-5 h-5 fill-current text-[#E4405F]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>تابعنا على إنستغرام</span>
            </a>

            {/* زر تيك توك (خلفية رمادية/سوداء فاتحة مع تباين عالي) */}
            <a href="" style={{marginBottom:"1rem"}}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-gray-100 hover:bg-gray-200 active:bg-gray-200 border border-gray-300 text-gray-800 font-semibold rounded-lg shadow-sm transition duration-200"
            >
              <svg className="w-5 h-5 fill-current text-gray-900" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span>تابعنا على تيك توك</span>
            </a>
          </div>

          {/* رابط العودة لتسجيل الدخول */}
          <div className="text-center pt-2">
            <p className="text-sm text-gray-600">
              لديك حساب بالفعل؟{' '}
              <Link to="/login" className="text-pink-600 font-medium hover:underline animate-pulse">
                تسجيل الدخول
              </Link>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}