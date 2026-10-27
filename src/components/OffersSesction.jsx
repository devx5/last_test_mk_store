// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import lcar from '../assets/img/best_seler_img/lcar.jpeg'
// import creem from '../assets/img/best_seler_img/creem.jpeg'
// import frute from '../assets/img/best_seler_img/frute.jpeg'

// function OffersSection() {
//   // تحديد موعد انتهاء العرض (في المستقبل سيأتي هذا التاريخ من قاعدة البيانات لكل منتج، مثلاً: product.endDate)
//   // هنا كمثال جعلناه ينتهي بعد 7 أيام من وقت إضافته أو تشغيله
//   const [targetDate] = useState(() => {
//     // يمكنك استبدال هذا التاريخ لاحقاً بالتاريخ القادم من الداتا بيز مباشرة
//     const futureDate = new Date();
//     futureDate.setDate(futureDate.setDate + 7); // عرض لمدة 7 أيام مثلاً
//     return new Date('2026-11-05T23:59:59').getTime(); // مثال لتاريخ ثابت ومحدد لانتهاء العرض
//   });

//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   useEffect(() => {
//     const calculateTimeLeft = () => {
//       const now = new Date().getTime();
//       const difference = targetDate - now;

//       if (difference > 0) {
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//         setTimeLeft({ days, hours, minutes, seconds });
//       } else {
//         // إذا انتهى الوقت
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     };

//     // تشغيل الحساب فوراً عند فتح الصفحة
//     calculateTimeLeft();

//     // تحديث العداد كل ثانية بناءً على الوقت الحقيقي للساعة
//     const timer = setInterval(calculateTimeLeft, 1000);

//     return () => clearInterval(timer);
//   }, [targetDate]);

//   // مصفوفة عروض اليوم المميزة
//   const deals = [
//     {
//       id: 1,
//       category: 'العناية بالبشرة',
//       title: 'مجموعة النضارة الفائقة وسيروم الهيالورونيك',
//       image: lcar,
//       alt: 'عرض سيروم',
//       price: '350 ج.م',
//       oldPrice: '500 ج.م',
//       discount: '30% خصم',
//       soldCount: 'تم شراء 85%'
//     },
//     {
//       id: 2,
//       category: 'المكياج',
//       title: 'باكج أحمر شفاه مات 3 ألوان مميزة',
//       image: creem,
//       alt: 'عرض أحمر شفاه',
//       price: '290 ج.م',
//       oldPrice: '420 ج.م',
//       discount: '31% خصم',
//       soldCount: 'تم شراء 60%'
//     },
//     {
//       id: 3,
//       category: 'العناية بالشعر',
//       title: 'مجموعة الارجان المتكاملة (ماسك + سيروم)',
//       image: frute,
//       alt: 'عرض مجموعة الشعر',
//       price: '480 ج.م',
//       oldPrice: '650 ج.م',
//       discount: '26% خصم',
//       soldCount: 'وشك على الانتهاء🔥'
//     }
//   ];

//   return (
//     <section className="py-12 bg-white" style={{ marginTop: '20px' }}>
//       <div className="container mx-auto px-4">
        
//         {/* الهيدر: العنوان + العداد التنازلي الحقيقي + زر عرض كل العروض */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4   pb-6">
          
//           {/* رابط صفحة كل العروض */}
//           <Link 
//             to="/offers" 
//             className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 active:text-pink-700 font-semibold text-sm transition-colors group order-3 md:order-1"
//           >
//             <span>عرض كل العروض</span>
//             <span className="group-hover:-translate-x-1 group-active:-translate-x-1 transition-transform">←</span>
//           </Link>

//           {/* العداد التنازلي الحقيقي (أيام، ساعات، دقائق، ثواني) */}
//           <div className="flex items-center gap-2 bg-amber-500 px-4 py-2 rounded-2xl shadow-sm border border-pink-100 order-2">
//             <span className="text-xs text-gray-500 font-medium">ينتهي العرض خلال:</span>
//             <div className="flex items-center gap-1 font-bold text-pink-600 dir-ltr text-xs md:text-sm">
//               {timeLeft.days > 0 && (
//                 <>
//                   <span className="bg-pink-100 px-1.5 py-0.5 rounded-md">
//                     {timeLeft.days}ي
//                   </span>
//                   <span>:</span>
//                 </>
//               )}
//               <span className="bg-pink-100 px-1.5 py-0.5 rounded-md">
//                 {String(timeLeft.hours).padStart(2, '0')}
//               </span>
//               <span>:</span>
//               <span className="bg-pink-100 px-1.5 py-0.5 rounded-md">
//                 {String(timeLeft.minutes).padStart(2, '0')}
//               </span>
//               <span>:</span>
//               <span className="bg-pink-100 px-1.5 py-0.5 rounded-md text-pink-700">
//                 {String(timeLeft.seconds).padStart(2, '0')}
//               </span>
//             </div>
//           </div>

//           {/* عنوان السيكشن */}
//           <div className="order-1 md:order-3 text-right">
//             <div className="flex items-center gap-2">
//               <span className="text-2xl" style={{ marginBottom: '10px' }}>⚡</span>
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-800" style={{ marginBottom: '0.5rem' }}>
//                 عروض وتخفيضات حصريّة
//               </h2>
//             </div>
//             <p className="text-gray-500 text-sm">أقوى العروض لفترة محدودة جداً لا تفوتها</p>
//           </div>

//         </div>

//         {/* شبكة كروت العروض */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {deals.map((item) => (
//             <div 
//               key={item.id}
//               className="bg-white rounded-2xl border border-pink-100 hover:border-pink-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
//             >
//               {/* الصورة وشارة الخصم */}
//               <div className="relative bg-gray-50 h-56 overflow-hidden flex items-center justify-center">
//                 <span className="absolute top-3 right-3 bg-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10 animate-pulse">
//                   {item.discount}
//                 </span>
//                 <img 
//                   src={item.image} 
//                   alt={item.alt}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//               </div>

//               {/* التفاصيل السريعة */}
//               <div className="p-5 flex flex-col flex-grow">
//                 <span className="text-xs text-pink-600 font-medium mb-1">{item.category}</span>
//                 <h3 className="font-bold text-gray-800 text-base line-clamp-1 group-hover:text-pink-600 transition-colors">
//                   {item.title}
//                 </h3>

//                 {/* مؤشر الكمية المطلوبة / الشراء */}
//                 <div className="mt-3 mb-2">
//                   <div className="flex justify-between text-xs text-gray-500 mb-1">
//                     <span>حالة العرض:</span>
//                     <span className="text-pink-600 font-bold">{item.soldCount}</span>
//                   </div>
//                   <div className="w-full bg-gray-100 rounded-full h-1.5">
//                     <div className="bg-pink-600 h-1.5 rounded-full w-3/4"></div>
//                   </div>
//                 </div>

//                 {/* السعر والزر */}
//                 <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
//                   <div>
//                     <span className="text-pink-600 font-bold text-lg">{item.price}</span>
//                     <span className="text-gray-400 text-xs line-through mr-2">{item.oldPrice}</span>
//                   </div>

//                   <button className="bg-pink-600 hover:bg-pink-700 active:bg-pink-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300 flex items-center gap-1.5">
//                     <span>احصل على العرض</span>
//                     <span>🛒</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }

// export default OffersSection