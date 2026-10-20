import React from 'react';
import hairLogo from '../assets/img/icon/hairlogo.jpg';
import skinlogo from '../assets/img/icon/skin.webp';
import waightLogo from '../assets/img/icon/waight.jpg';

function BeautyTipsBlog() {
  // مصفوفة البيانات باستبدال المفتاح icon بـ image
  const articles = [
    {
      id: 1,
      category: 'العناية بالبشرة',
      image: skinlogo,
      date: 'منذ يومين',
      readTime: '3 دقائق قراءة',
      title: 'الروتين المثالي للعناية بالبشرة المختلطة في أيام الصيف الحارة',
      description: 'تعرفي على الخطوات البسيطة والمنتجات الأساسية للحفاظ على ترطيب ونقاء بشرتك وحمايتها من العوامل الخارجية طوال اليوم...',
      link: '#'
    },
    {
      id: 2,
      category: 'العناية بالشعر',
      image: hairLogo,
      date: 'منذ 4 أيام',
      readTime: '4 دقائق قراءة',
      title: 'أفضل الزيوت الطبيعية لعلاج تقصف الشعر وإعادة الحيوية إليه',
      description: 'دليلك الشامل لاستخدام زيت الأرجان وجوز الهند بالطريقة الصحيحة للحصول على شعر لامع، صحي، وخالٍ من الهيشان...',
      link: '#'
    },
    {
      id: 3,
      category: 'انزال الوزن',
      image: waightLogo,
      date: 'منذ أسبوع',
      readTime: '5 دقائق قراءة',
      title: 'كيف تحصلين على إطلالة رائعه وتخسرين وزنك بسهوله وامان؟',
      description: 'خطوات سريعة وبسيطة للحصول علي الجسم المثالي الذي ترغبين به...',
      link: '#'
    }
  ];

  return (
    <div>
      {/* القسم الأخير: دليلك الجمالي والمدونة (القسم رقم 4) */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          
          {/* عنوان القسم */}
          <div className="text-center mb-10">
            <div className="inline-block bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1 rounded-full" style={{ marginBottom: '1rem' }}>
              دليلك الجمالي
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800" style={{ marginBottom: '1rem' }}>
              نصائح ومقالات للعناية بجمالك
            </h2>
            <p className="text-gray-500 text-sm" style={{ marginBottom: '1rem' }}>
              اكتشفي أحدث أسرار العناية بالبشرة، الشعر، وروتينات المكياج اليومية
            </p>
          </div>

          {/* شبكة المقالات */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article) => (
              <div 
                key={article.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md active:shadow-md border border-gray-100 transition-all duration-300 flex flex-col group"
              >
                {/* الصورة كخلفية كاملة للجزء العلوي */}
                <div className="relative h-48 w-full overflow-hidden">
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-pink-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm z-10">
                    {article.category}
                  </span>
                  
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* محتوى المقال */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-gray-400 text-xs mb-2 flex gap-2 items-center">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 text-base md:text-lg mb-3 group-hover:text-pink-600 group-active:text-pink-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <a 
                      href={article.link} 
                      className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold text-sm transition-colors group"
                    >
                      <span>اقرأ المقال كاملاً</span>
                      <span className="group-hover:-translate-x-1 group-active:-translate-x-1 transition-transform">←</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

export default BeautyTipsBlog;