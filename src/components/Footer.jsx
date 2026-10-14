import React from "react";
import { Link } from "react-router-dom";

export default function SephoraFooterCustom() {
  return (
    <footer dir="rtl" className="bg-[#101426] text-slate-300 font-sans pt-6 pb-8 border-t border-slate-800/60 text-right" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        
        {/* زر العودة للأعلى Back to Top */}
        <div className="flex justify-center pb-6">
         <a href="#rate_section">اعطي انطباعك عن الموقع</a>
        </div>

        {/* الشريط العلوي الخمس عناصر (Top Features Bar) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 py-6 border-t border-b border-slate-800/80 text-xs">
          {/* 1. ابحثي عن متجر */}
          <a href="#" className="flex items-center gap-3 group hover:text-[#d82274] transition-colors">
            <span className="text-[#d82274] text-lg">📍</span>
            <div>
              <span className="font-bold block text-white group-hover:text-[#d82274]">ابحثي عن متجر</span>
              <span className="text-slate-400 text-[11px]">اختاري الفرع الأقرب لكِ</span>
            </div>
          </a>

          {/* 2. محادثة خدمة العملاء */}
          <button type="button" className="flex items-center gap-3 group text-right hover:text-[#d82274] transition-colors w-full">
            <span className="text-[#d82274] text-lg">💬</span>
            <span className="font-bold text-white group-hover:text-[#d82274]">
              محادثة خدمة العملاء
            </span>
          </button>

          {/* 3. حملي التطبيق */}
          <a href="#" className="flex items-center gap-3 group hover:text-[#d82274] transition-colors">
            <span className="text-[#d82274] text-lg">📱</span>
            <div>
              <strong className="block text-white group-hover:text-[#d82274]">حملي التطبيق</strong>
              <span className="text-slate-400 text-[11px]">حمليه الآن للتسوق</span>
            </div>
          </a>

          {/* 4. الرسائل النصية */}
          <a href="#" className="flex items-center gap-3 group hover:text-[#d82274] transition-colors">
            <span className="text-[#d82274] text-lg">💬</span>
            <div>
              <strong className="block text-white group-hover:text-[#d82274]" >رسائل مكه</strong>
              <span className="text-slate-400 text-[11px]">اشتركي الآن</span>
            </div>
          </a>

          {/* 5. بطاقة الائتمان */}
          <a href="#" className="flex items-center gap-3 group hover:text-[#d82274] transition-colors">
            <span className="text-[#d82274] text-lg">💳</span>
            <div className="leading-tight">
              <strong className="block text-white group-hover:text-[#d82274] text-xs">بطاقة مكه الائتمانية</strong>
              <span className="text-slate-400 text-[11px]">خصم 25%؟ <span className="underline text-[#d82274]">التفاصيل</span></span>
            </div>
          </a>
        </div>

        {/* القسم الأوسط (شبكة الأقسام + النشرة البريدية والنص الكبير) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-b border-slate-800/80">
          
          {/* جهة اليمين: الأقسام الـ 4 (تاخذ 7 أعمدة) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs">
            
            {/* عن مكه */}
            <div style={{ lineHeight: '2' }}>
              <h3 className="text-white font-bold text-sm border-r-2 border-[#d82274] pr-2">عن مكه</h3>
              <ul className="space-y-2 text-slate-300">
                <li><Link to="/about" className="hover:text-[#d82274] transition-colors">عن الشركة</Link></li>
                <li><Link to="/news" className="hover:text-[#d82274] transition-colors">الأخبار</Link></li>
                <li><Link to="/jobs" className="hover:text-[#d82274] transition-colors">الوظائف</Link></li>
                <li><Link to="/values" className="hover:text-[#d82274] transition-colors">قيم مكه</Link></li>
                <li><Link to="/transparency" className="hover:text-[#d82274] transition-colors">شفافية التوريد</Link></li>
                <li><Link to="/affiliation" className="hover:text-[#d82274] transition-colors">التسويق بالعمولة</Link></li>
                <li><Link to="/events" className="hover:text-[#d82274] transition-colors">الفعاليات</Link></li>
                <li><Link to="/gift-cards" className="hover:text-[#d82274] transition-colors">بطاقات الهدايا</Link></li>
                <li><Link to="/global-sites" className="hover:text-[#d82274] transition-colors">المواقع العالمية</Link></li>
                <li><Link to="/diversity-inclusion" className="hover:text-[#d82274] transition-colors">التنوع والشمول</Link></li>
                <li><Link to="/entrepreneurship" className="hover:text-[#d82274] transition-colors">حاضنة الأعمال</Link></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">إعادة التدوير</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">الإبلاغ عن ثغرة</a></li>
              </ul>
            </div>

            {/* مكه الخاص بي */}
            <div style={{ lineHeight: '2' }}>
              <h3 className="text-white font-bold text-sm border-r-2 border-[#d82274] pr-2">مكه بي</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-[#d82274] transition-colors">برنامج الولاء</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">البطاقة الائتمانية</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">المعرض</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">حالة الطلب</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">سجل المشتريات</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">إعدادات الحساب</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">خدمات التجميل</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">الإنعاش التلقائي</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">العروض المميزة</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">سوق المكافآت</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">المفضلات</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">فرعك المفضل</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">توصيل اليوم نفسه</a></li>
              </ul>
            </div>

            {/* المساعدة */}
            <div style={{ lineHeight: '2' }}>
              <h3 className="text-white font-bold text-sm border-r-2 border-[#d82274] pr-2">المساعدة</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-[#d82274] transition-colors">خدمة العملاء</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">الإرجاع والاستبدال</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">خيارات التوصيل</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">الشحن</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">الفواتير والدفع</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">الشحن الدولي</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">دليل الشراء</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">الأسئلة الشائعة</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">فروع الشركاء</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">مواقع الفروع</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">الدفع الميسر</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">سهولة الاستخدام</a></li>
                <li><a href="#" className="hover:text-[#d82274] transition-colors">عناية المراهقين</a></li>
              </ul>
            </div>

            {/* المنطقة واللغة */}
            <div >
              <h3 className="text-white font-bold text-sm border-r-2 border-[#d82274] pr-2">المنطقة واللغة</h3>
              <div className="space-y-2 pt-1">
                <button type="button" className="w-full flex items-center justify-between bg-[#1b2038] border border-[#d82274] text-xs py-1.5 px-2.5 rounded text-white">
                  <span className="flex items-center gap-1.5">
                    <span>🇸🇦</span>
                    <span>السعودية - العربية</span>
                  </span>
                  <span className="text-[#d82274]">✓</span>
                </button>
                <button type="button" className="w-full flex items-center gap-1.5 bg-[#1b2038] border border-slate-700/60 text-xs py-1.5 px-2.5 rounded text-slate-300 hover:text-white">
                  <span>🇦🇪</span>
                  <span>الإمارات - العربية</span>
                </button>
                <button type="button" className="w-full flex items-center gap-1.5 bg-[#1b2038] border border-slate-700/60 text-xs py-1.5 px-2.5 rounded text-slate-300 hover:text-white">
                  <span>🌐</span>
                  <span>Global - English</span>
                </button>
              </div>
            </div>

          </div>

          {/* جهة اليسار: العنوان الكبير والنشرة البريدية (تاخذ 5 أعمدة مثل الصورة بالضبط)[cite: 2] */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 pt-4 lg:pt-0 lg:pr-8">
            {/* العنوان الكافي الكلاسيكي */}
            <h2 className="text-3xl sm:text-4xl font-serif text-white leading-tight">
              نحن نسعي إلى<br />
              <span className="text-[#d82274] font-bold">شيء جميل</span>
            </h2>

            {/* صندوق الاشتراك البريدي السريع */}
            <div className="space-y-2">
              <label htmlFor="newsletterEmail" className="text-xs text-slate-300 font-semibold block" style={{ marginBottom: '5px' }}>
                اشتركي ليصلك جديد بريد سيفورا
              </label>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
                <input
                  type="email"
                  id="newsletterEmail"
                  placeholder="أدخلي بريدك الإلكتروني"
                  className="flex-1 bg-[#1b2038] text-white placeholder-slate-500 text-xs px-4 py-2.5 rounded border border-slate-700/60 focus:outline-none focus:border-[#d82274] text-right"
                />
                <button
                  type="submit"
                  className="bg-[#d82274] hover:bg-[#c01a65] text-white text-xs font-bold px-6 py-2.5 rounded transition-colors shrink-0 shadow-md shadow-[#d82274]/20"
                >
                  اشتراك
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* الجزء السفلي (الحقوق على اليمين وأيقونات التواصل على اليسار مثل الصورة[cite: 2]) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 text-xs text-slate-400">
          
          {/* الحقوق والروابط القانونية (اليمين) */}
          <div className="text-center md:text-right ">
            <p className="p-2">© 2026 جميع الحقوق محفوظة لشركة مكه.</p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-300">
              <a href="#" className="hover:text-[#d82274] transition-colors p-2">سياسة الخصوصية</a>
              <a href="#" className="hover:text-[#d82274] transition-colors">شروط الاستخدام</a>
              <a href="#" className="hover:text-[#d82274] transition-colors">إمكانية الوصول</a>
              <a href="#" className="hover:text-[#d82274] transition-colors">خريطة الموقع</a>
              <button type="button" className="inline-flex items-center gap-1 hover:text-[#d82274] transition-colors">
                <span>خيارات الخصوصية</span>
                <span className="text-[#d82274]">✓</span>
              </button>
            </div>
            <Link to="tel:201062773439+" className="text-slate-400 dir-ltr text-right hover:text-[#d82274] transition-colors mr-2">201062773439+</Link>
          </div>

          {/* أيقونات التواصل الاجتماعي  */}
          <div className="flex items-center gap-3 text-lg">
            <a href="tel:01062773439" aria-label="Instagram" className="w-8 h-8 rounded-full bg-[#1b2038] hover:bg-[#d82274] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700/50">
               <i className="fa-solid fa-square-phone " style={{ color: " #25D366" }} />
            </a>
            <a href="https://web.whatsapp.com/send?phone=201062773439" aria-label="Facebook" className="w-8 h-8 rounded-full bg-[#1b2038] hover:bg-[#d82274] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700/50">
             <i className="fa-brands fa-square-whatsapp " style={{ color: " #25D366" }} />

            </a>
            <a href="#" aria-label="X" className="w-8 h-8 rounded-full bg-[#1b2038] hover:bg-[#d82274] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700/50">
              <i className="fa-brands fa-tiktok " style={{ color: " #99ffff" }} />
            </a>
            <a href="https://www.instagram.com/mekka_cosmetics?psln=MXRrZ2lxbWZlbnhzNw%3D%3D&utm_source=qr" aria-label="YouTube" className="w-8 h-8 rounded-full bg-[#1b2038] hover:bg-[#d82274] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700/50">
              <i className="fa-brands fa-instagram" style={{ color: " #E4405F" }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61594241914299" aria-label="Pinterest" className="w-8 h-8 rounded-full bg-[#1b2038] hover:bg-[#d82274] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700/50">
              <i className="fa-brands fa-facebook " style={{ color: " #0044ff" }} />
            </a>
          
          </div>

        </div>

      </div>
      <p className="text-slate-400 text-center " style={{ marginTop: "20px" }}>developed by mohamed othman</p>
    </footer>
  );
}