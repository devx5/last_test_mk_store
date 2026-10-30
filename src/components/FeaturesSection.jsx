export default function FeaturesSection() {
  return (
    
    <section className="bg-[#8EA48B] py-8   mt-12">
      <div className="sm:px-6 lg:px-8">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* الميزة الأولى: شحن سريع */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-emerald-50/50 active:bg-emerald-50/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              {/* أيقونة شحن (يمكنك استبدالها بأيقونة من Lucide React مثل Truck) */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
            </div>
            <div className="text-right w-full">
              <h4 className="font-bold text-gray-900 text-sm">شحن سريع</h4>
              <p className="text-gray-500 text-xs mt-0.5">شحن سريع لمكانك من يوم إلى ٣ أيام عمل</p>
            </div>
          </div>

          {/* الميزة الثانية: طرق دفع مختلفة */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-emerald-50/50 active:bg-emerald-50/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div className="text-right w-full">
              <h4 className="font-bold text-gray-900 text-sm">طرق دفع مختلفة</h4>
              <p className="text-gray-500 text-xs mt-0.5">توفر طرق دفع مختلفة منها الدفع عند الاستلام</p>
            </div>
          </div>

          {/* الميزة الثالثة: خبرات كبيرة */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-emerald-50/50 active:bg-emerald-50/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-right w-full">
              <h4 className="font-bold text-gray-900 text-sm">خبرات كبيرة</h4>
              <p className="text-gray-500 text-xs mt-0.5">خبرات كبيرة وأطباء مختصين لمساعدتك</p>
            </div>
          </div>

          {/* الميزة الرابعة: خدمة عملاء */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-emerald-50/50 active:bg-emerald-50/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="text-right w-full">
              <h4 className="font-bold text-gray-900 text-sm">خدمة عملاء 24/7</h4>
              <p className="text-gray-500 text-xs mt-0.5">لا تتردد بالتواصل معنا بأي وقت لمساعدتك</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}