import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. منع المتصفح من استعادة مكان السكرول القديم تلقائياً عند التحديث أو الرجوع
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. إرجاع النافذة الرئيسية للأعلى فوراً
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // بدون حركة بطيئة لضمان السرعة
    });

    // 3. إجبار عناصر الجذر والحاويات على الصعود للقمة (في حال كان السكرول داخل عنصر فرعي)
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const rootElement = document.getElementById('root') || document.querySelector('.app');
    if (rootElement) {
      rootElement.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}