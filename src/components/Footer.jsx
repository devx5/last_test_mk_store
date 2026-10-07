import React from 'react';
import { 
  Sparkles, 
  Phone, 
  MapPin, 
  Mail, 
  Heart, 
  Globe, 
  Share2, 
  MessageCircle, 
  Send 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-12 border-t border-gray-800 gap-10"  dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* شبكة الفوتر الرئيسية */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20  ">
          
          {/* العمود الأول: عن المتجر */}
          <div className="">
            <div className="flex items-center gap-2 text-white font-bold text-xl " style={{ marginBottom: '10px' }}>
              <Sparkles className="w-6 h-6 text-pink-500" />
              <span>متجر التجميل</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              وجهتك الأولى لكل مستلزمات العناية والتجميل بسعر الجملة. نضمن لكِ الجودة والأصلية لتتألقي دائماً.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 border-r-4 border-pink-500 pr-3 " style={{ marginBottom: '10px' }}>
              روابط سريعة
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-pink-400 transition-colors">الرئيسية</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">كل المنتجات</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">الأقسام</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">سياسة الاستبدال والاسترجاع</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* العمود الثالث: معلومات التواصل */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 border-r-4 border-pink-500 pr-3" style={{ marginBottom: '10px' }}>
              تواصل معنا
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3" style={{ marginBottom: '10px' }}>
                <MapPin className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                <span>مكة - مجمع مستلزمات ومستحضرات التجميل بسعر الجملة</span>
              </li>
              <li className="flex items-center gap-3 " style={{ marginBottom: '10px' }}>
                <Phone className="w-5 h-5 text-pink-500 shrink-0" />
                <span dir="ltr">+20 106 277 3439</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pink-500 shrink-0" />
                <span>linkedcode6@gmail.com</span>
              </li>
            </ul>
 {/* فيسبوك */}
  <a href="#" className="flex items-center gap-2.5 text-gray-300 hover:text-pink-400 transition-colors">
    <svg className="w-5 h-5 text-pink-500 fill-current shrink-0" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 5.025 3.658 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.145 22 17.042 22 12.017 22 6.484 17.522 2 12 2z"/>
    </svg>
    <span className="text-sm">مكة ستور</span>
  </a>

  {/* انستجرام */}
  <a href="#" className="flex items-center gap-2.5 text-gray-300 hover:text-pink-400 transition-colors">
    <svg className="w-5 h-5 text-pink-500 fill-current shrink-0" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
    <span className="text-sm">مكة ستور</span>
  </a>

  {/* تيك توك */}
  <a href="#" className="flex items-center gap-2.5 text-gray-300 hover:text-pink-400 transition-colors">
    <svg className="w-5 h-5 text-pink-500 fill-current shrink-0" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
    <span className="text-sm">مكة ستور</span>
  </a>
          </div>

          {/* العمود الرابع: النشرة البريدية */}
          <div className="py-8 ">
            <h3 className="text-white font-semibold text-lg  border-r-4 border-pink-500 pr-3" style={{ marginBottom: '10px' }}>
              النشرة البريدية
            </h3>
            <p className="text-sm text-gray-400 ">
              اشتركي معنا لتصلكِ أحدث العروض والمنتجات الجديدة مباشرة.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-pink-500 transition-colors"
              />
              <button 
                type="submit" 
                className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>اشتراك</span>
                <Send className="w-4 h-4 rotate-180" />
              </button>
            </form>
          </div>

        </div>

        {/* خط الفاصل وحقوق الملكية */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4 ">
          <p>© 2026 متجر التجميل. جميع الحقوق محفوظة.</p>
          <p className="flex items-center gap-1">
            صُنع بـ <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> لتجربة تسوق متميزة
          </p>
        </div>

      </div>
      <div className="text-center text-gray-500 text-xs mt-6">
        <p>developed by mohamed othman  2026 ©</p>
      </div>
    </footer>
  );
};

export default Footer;