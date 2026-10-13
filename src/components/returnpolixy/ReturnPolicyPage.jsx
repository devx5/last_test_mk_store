import React from 'react';
import PolicyHeader from './PolicyHeader.jsx';
import ProductTypesPolicy from './ProductTypesPolicy.jsx';
import RejectedCases from './RejectedCases.jsx';
import TimeFrames from './TimeFrames.jsx';
export default function ReturnPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-8 text-right" dir="rtl">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-md p-6 md:p-10 border border-gray-100 space-y-10">
        <PolicyHeader />
        <ProductTypesPolicy />
        <RejectedCases />
        <TimeFrames />

        <div className="text-center pt-6 border-t border-gray-200 text-gray-600 text-sm">
          شكراً لتفهمكم والتزامكم بسياسة الاستبدال والمرتجعات، وحرصكم على التعاون معنا بما يضمن تنظيم التعامل وحفظ حقوق جميع الأطراف.
        </div>
      </div>
    </div>
  );
}