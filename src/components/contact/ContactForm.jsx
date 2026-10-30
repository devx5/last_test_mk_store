import React, { useState } from 'react';
export default function ContactForm() {
const [formData, setFormData] = useState({
name: '',
email: '',
phone: '',
subject: 'استفسار عام',
message: '',
});
const handleSubmit = (e) => {
e.preventDefault();
alert('تم إرسال رسالتكِ بنجاح! سيتواصل معكِ فريقنا في أقرب وقت.');
setFormData({
name: '',
email: '',
phone: '',
subject: 'استفسار عام',
message: '',
});
};
return (
<section className="py-12 bg-slate-50 border-t border-slate-100">
<div className="container mx-auto px-4 max-w-2xl">
<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
<div className="text-center mb-8">
<h2 className="text-2xl font-extrabold text-slate-800">
أرسلي لنا رسالة مباشرة
</h2>
<p className="text-xs text-slate-500 mt-1">
املي البيانات التالية وسنقوم بالرد عليكِ في أسرع وقت
</p>
</div>
<form onSubmit={handleSubmit} className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold text-slate-700 mb-1 text-right " style={{margin:"9px"}}>
الاسم بالكامل
</label>
<input
style={{textAlign:"right"}}
type="text"
required
placeholder="مثال: سارة محمد"
value={formData.name}
onChange={(e) =>
setFormData({ ...formData, name: e.target.value })
}
className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-pink-500 text-xs sm:text-sm"
/>
</div>
<div>
<label className="block text-xs font-bold text-slate-700 mb-1 text-right" style={{margin:"9px"}}>
رقم الهاتف
</label>
<input
style={{textAlign:"right"}}
type="tel"
required
placeholder="01000000000"
value={formData.phone}
onChange={(e) =>
setFormData({ ...formData, phone: e.target.value })
}
className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-pink-500 text-xs sm:text-sm"
/>
</div>
</div>
<div>
<label className="block text-xs font-bold text-slate-700 mb-1 text-right" style={{margin:"9px"}}>
البريد الإلكتروني
</label>
<input
style={{textAlign:"right"}}
type="email"
required
placeholder="example@mail.com"
value={formData.email}
onChange={(e) =>
setFormData({ ...formData, email: e.target.value })
}
className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-pink-500 text-xs sm:text-sm"
/>
</div>
<div>
<label className="block text-xs font-bold text-slate-700 mb-1 text-right" style={{margin:"9px"}}>
سبب التواصل
</label>
<select
style={{textAlign:"right"}}
value={formData.subject}
onChange={(e) =>
setFormData({ ...formData, subject: e.target.value })
}
className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-pink-500 text-xs sm:text-sm bg-white"
>
<option>استفسار عام</option>
<option>تتبع طلب سابق</option>
<option>استشارة تجميلية</option>
<option>شكوى أو اقتراح</option>
</select>
</div>
<div>
<label className="block text-xs font-bold text-slate-700 mb-1 text-right" style={{margin:"9px"}}>
الرسالة
</label>
<textarea
style={{textAlign:"right"}}
rows="4"
required
placeholder="اكتبي تفاصيل استفساركِ هنا..."
value={formData.message}
onChange={(e) =>
setFormData({ ...formData, message: e.target.value })
}
className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-pink-500 text-xs sm:text-sm"
></textarea>
</div>
<button
type="submit"
className="w-full py-3.5 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl transition duration-300 shadow-md text-sm cursor-pointer"
>
إرسال الرسالة الآن 🚀
</button>
</form>
</div>
</div>
</section>
);
}