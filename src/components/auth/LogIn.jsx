import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // لو مستخدم React Router

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا هيتم ربط الـ API الخاص بـ Laravel لاحقاً
    console.log("Login data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#8EA48B] px-4 py-12" dir="rtl">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        
        {/* رأس الصفحة والشعار */}
        <div className="text-center">
         
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
            مرحباً بك مجدداً!
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            سجل دخولك للمتابعة إلى حسابك واستكشاف العروض
          </p>
        </div>

        {/* نموذج تسجيل الدخول */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            
            {/* حقل البريد الإلكتروني */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
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
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  كلمة المرور
                </label>
                <Link to="/forgot-password" className="text-xs text-gray-600 hover:underline">
                  نسيت كلمة المرور؟
                </Link>
              </div>
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

          </div>

          {/* زر تسجيل الدخول */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-pink-500 hover:bg-pink-600 active:bg-pink-600 text-pink-600 hover:text-white active:text-white text-white font-semibold rounded-lg shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              تسجيل الدخول
            </button>
          </div>

          {/* رابط الانتقال لصفحة التسجيل */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              ليس لديك حساب حتى الآن؟{' '}
              <Link to="/Register" className="text-pink-600 font-medium hover:underline animate-pulse">
                إنشاء حساب جديد
              </Link>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}