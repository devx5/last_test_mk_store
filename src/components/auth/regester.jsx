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
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        
        {/* رأس الصفحة والشعار */}
        <div className="text-center">
        
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
            إنشاء حساب جديد
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            انضم إلينا اليوم واستمتع بأقوى العروض والحصريات
          </p>
        </div>

        {/* نموذج التسجيل */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            
            {/* حقل الاسم الكامل */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
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
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-pink-500 hover:bg-pink-600 active:bg-pink-600 text-pink-600 hover:text-white active:text-white text-white font-semibold rounded-lg shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              إنشاء الحساب
            </button>
          </div>

          {/* رابط العودة لتسجيل الدخول */}
          <div className="text-center mt-4">
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