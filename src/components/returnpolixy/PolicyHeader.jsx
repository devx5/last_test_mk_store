import React from 'react';
import { RotateCcw } from 'lucide-react';

export default function PolicyHeader() {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 text-pink-600 rounded-full mb-4">
        <RotateCcw className="w-8 h-8" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
        سياسة الاستبدال والمرتجعات
      </h1>
      <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
        حرصاً منا على وضوح التعامل وحفظ حقوق جميع الأطراف، نرجو من حضراتكم الاطلاع على سياسة الاستبدال والمرتجعات الخاصة بالطلبات.
      </p>
    </div>
  );
}