import React, { useEffect, useMemo, useState } from 'react';
import {
  Star,
  MapPin,
  Share2,
  SlidersHorizontal,
  X,
  Check,
  MessageCircle,
  ExternalLink,
  RotateCcw,
  Send,
  Sparkles,
  Globe,
  TicketPercent,
  Copy,
  ThumbsUp,
} from 'lucide-react';

/**
 * Default configuration for an ONLINE-ONLY Smart Review & Customer Reach Hub.
 * Includes Google review link, online reach channels, and an optional discount code reward.
 */
const DEFAULT_CONFIG = {
  brandName: 'براندك الأونلاين',
  tagline: 'شكراً لتسوقك معانا أونلاين! تقييمك بيدعم براندنا ويساعد عملاء جداد يطلبوا بثقة.',
  googleReviewUrl: 'https://www.google.com/maps',
  storeUrl: 'https://example.com',
  whatsappNumber: '201000000000',
  facebookUrl: 'https://www.facebook.com',
  instagramUrl: 'https://www.instagram.com',
  tiktokUrl: 'https://www.tiktok.com',
  discountCode: 'REVIEW15',
  discountNote: 'خصم 15% على طلبك القادم بعد مشاركة تقييمك',
};

const STORAGE_KEY = 'vite_react_online_review_hub_v1';

/**
 * Sanitizes a phone number and constructs a WhatsApp wa.me link.
 */
function buildWhatsAppLink(phoneNumber, messageText = '') {
  const digitsOnly = String(phoneNumber || '').replace(/\D/g, '');
  const cleanNumber = digitsOnly || '201000000000';
  if (!messageText) {
    return `https://wa.me/${cleanNumber}`;
  }
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(messageText)}`;
}

/**
 * Top utility bar with quick page-link copy and settings drawer trigger.
 */
function TopUtilityBar({ onCopyLink, copied, onOpenSettings }) {
  return (
    <div className="w-full max-w-xl mx-auto px-4 pt-4 flex items-center justify-between gap-2 text-xs sm:text-sm ">
      <button
        type="button"
        onClick={onCopyLink}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-stone-200/80 text-stone-700 hover:bg-stone-50 active:scale-[0.98] transition shadow-sm font-semibold"
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
        ) : (
          <Share2 className="w-4 h-4 text-amber-600 shrink-0" />
        )}
        <span>{copied ? 'تم نسخ الرابط' : 'نسخ رابط الصفحة'}</span>
      </button>

      <button
        type="button"
        onClick={onOpenSettings}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-900 text-amber-300 hover:bg-stone-800 active:scale-[0.98] transition shadow-sm font-semibold"
      >
        <SlidersHorizontal className="w-4 h-4 shrink-0" />
        <span>تخصيص البيانات</span>
      </button>
    </div>
  );
}

/**
 * Safely loads persisted configuration from localStorage.
 */
function loadSavedConfig() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_CONFIG;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_CONFIG,
      ...parsed,
    };
  } catch {
    return DEFAULT_CONFIG;
  }
}

/**
 * Safely saves configuration to localStorage.
 */
function persistConfig(config) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {
    // Ignore storage access restrictions
  }
}

/**
 * Brand header component tailored for an online-only brand without physical branches.
 */
function HeaderBrand({ brandName, tagline }) {
  return (
    <header className="text-center space-y-3">
      <div className="inline-flex items-center justify-center relative ">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 text-white flex items-center justify-center shadow-lg shadow-amber-600/25">
          <Sparkles className="w-9 h-9" />
        </div>
        <span className="absolute -bottom-2 px-3 py-0.5 rounded-full bg-stone-900 text-amber-300 text-[11px] font-bold shadow whitespace-nowrap">
          متجر / خدمة أونلاين
        </span>
      </div>

      <div className="pt-1 space-y-1.5">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          {brandName}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-md mx-auto">
          {tagline}
        </p>
      </div>
    </header>
  );
}

/**
 * Primary review card focused on Google Business / Google Maps review for online brand trust,
 * plus an optional special discount/offer code reveal after reviewing.
 */
function PrimaryReviewCard({ googleReviewUrl, discountCode, discountNote, onNotify }) {
  const [previewRating, setPreviewRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasReviewed, setHasReviewed] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const displayedStars = hoverRating || previewRating;

  const handleCopyDiscount = async () => {
    if (!discountCode) return;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(discountCode);
      } else {
        const temp = document.createElement('input');
        temp.value = discountCode;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }
      setCopiedCode(true);
      onNotify(`تم نسخ كود الخصم: ${discountCode}`);
      window.setTimeout(() => setCopiedCode(false), 2000);
    } catch {
      onNotify(`كود الخصم الخاص بك: ${discountCode}`);
    }
  };

  return (
    <section aria-label="تقييم جوجل وكود الخصم" className="space-y-3 ">
      {/* Subtle interactive rating preview row */}
      <div className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-amber-50/80 border border-amber-200/70">
        <span className="text-xs font-bold text-stone-700">اختر تقييمك المبدئي:</span>
        <div className="flex items-center gap-1" dir="ltr">
          {[1, 2, 3, 4, 5].map((starValue) => {
            const active = starValue <= displayedStars;
            return (
              <button
                key={starValue}
                type="button"
                aria-label={`اختيار ${starValue} نجوم`}
                onMouseEnter={() => setHoverRating(starValue)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setPreviewRating(starValue)}
                className="p-1 rounded-lg transition hover:scale-110 focus:outline-none"
              >
                <Star
                  className={`w-4 h-4 ${
                    active ? 'fill-amber-500 text-amber-500' : 'text-stone-300'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Primary Google Review / Google Business Profile CTA */}
      <a
        href={googleReviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setHasReviewed(true)}
        className="group w-full flex items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-l from-amber-600 via-amber-500 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white shadow-lg shadow-amber-600/25 transition-all duration-200 active:scale-[0.99]"
      >
        <div className="flex items-center gap-3.5 text-right">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-base sm:text-lg font-extrabold">قيّمنا على Google</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white text-amber-700 text-xs font-extrabold">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                {displayedStars}.0
              </span>
            </div>
            <p className="text-xs sm:text-sm text-amber-50 mt-0.5">
              تقييمك على ملفنا في جوجل يعزز ثقة العملاء الجدد في متجرنا الأونلاين
            </p>
          </div>
        </div>

        <ExternalLink className="w-5 h-5 text-white/90 shrink-0 group-hover:-translate-x-0.5 transition" />
      </a>

      {/* Optional post-review discount reveal */}
      {discountCode && (
        <div className="rounded-2xl border border-amber-200/90 bg-gradient-to-l from-amber-50/90 to-white p-3.5 sm:p-4 space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-right">
              <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <TicketPercent className="w-4 h-4" />
              </span>
              <div>
                <p className="text-xs sm:text-sm font-bold text-stone-900">
                  {discountNote || 'هدية تقدير لتجربتك معانا'}
                </p>
                <p className="text-[11px] text-stone-500">
                  {hasReviewed
                    ? 'شكراً لتقييمك! استخدم الكود التالي في طلبك القادم:'
                    : 'اضغط لإظهار أو نسخ كود الخصم الخاص بالعملاء'}
                </p>
              </div>
            </div>

            {!hasReviewed && (
              <button
                type="button"
                onClick={() => setHasReviewed(true)}
                className="px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold transition shrink-0"
              >
                إظهار الكود
              </button>
            )}
          </div>

          {hasReviewed && (
            <div className="flex items-center justify-between gap-2 px-3.5 py-2 rounded-xl bg-stone-900 text-white">
              <span dir="ltr" className="font-mono text-sm font-extrabold tracking-wider text-amber-300">
                {discountCode}
              </span>
              <button
                type="button"
                onClick={handleCopyDiscount}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold transition"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>تم النسخ</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-300" />
                    <span>نسخ الكود</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

/**
 * Online-only customer reach channels list: Store/Website, Instagram, TikTok, Facebook, WhatsApp.
 */
function ReachChannelsList({ config }) {
  const whatsappHref = useMemo(
    () =>
      buildWhatsAppLink(
        config.whatsappNumber,
        `مرحباً ${config.brandName}، حابب أتواصل معاكم بخصوص الطلبات أو الاستفسارات.`
      ),
    [config.whatsappNumber, config.brandName]
  );

  const channels = [
    {
      id: 'store',
      title: 'المتجر الإلكتروني / الموقع',
      subtitle: 'تصفح المنتجات واطلب أونلاين',
      href: config.storeUrl || 'https://example.com',
      badgeBg: 'bg-amber-100 text-amber-800',
      hoverClass: 'hover:bg-amber-50/80 hover:border-amber-200',
      renderIcon: () => <Globe className="w-5 h-5" />,
    },
    {
      id: 'instagram',
      title: 'إنستغرام',
      subtitle: 'تابع جديدنا ومنشن تجربتك',
      href: config.instagramUrl || 'https://www.instagram.com',
      badgeBg: 'bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white',
      hoverClass: 'hover:bg-pink-50/70 hover:border-pink-200',
      renderIcon: () => <Sparkles className="w-5 h-5" />,
    },
    {
      id: 'tiktok',
      title: 'تيك توك',
      subtitle: 'شاهد فيديوهات وعروض البراند',
      href: config.tiktokUrl || 'https://www.tiktok.com',
      badgeBg: 'bg-stone-900 text-white',
      hoverClass: 'hover:bg-stone-100/80 hover:border-stone-300',
      renderIcon: () => <span className="text-sm font-black">TT</span>,
    },
    {
      id: 'facebook',
      title: 'صفحة فيسبوك',
      subtitle: 'تقييم وتوصية لمتابعينا',
      href: config.facebookUrl || 'https://www.facebook.com',
      badgeBg: 'bg-blue-600 text-white',
      hoverClass: 'hover:bg-blue-50/70 hover:border-blue-200',
      renderIcon: () => <span className="text-base font-black">f</span>,
    },
  ];

  return (
    <section aria-label="قنوات الوصول الأونلاين" className="space-y-3">
      <div className="relative flex items-center py-1">
        <div className="flex-grow border-t border-stone-200/80" />
        <span className="px-3 text-xs sm:text-sm font-bold text-stone-500 bg-white">
          قنوات الوصول والتواصل الأونلاين
        </span>
        <div className="flex-grow border-t border-stone-200/80" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {channels.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between p-4 rounded-2xl bg-stone-50/90 border border-stone-200/80 transition group active:scale-[0.99] ${item.hoverClass}`}
          >
            <div className="flex items-center gap-3 text-right">
              <span
                className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${item.badgeBg}`}
              >
                {item.renderIcon()}
              </span>
              <div>
                <div className="text-sm font-bold text-stone-900">{item.title}</div>
                <div className="text-xs text-stone-500">{item.subtitle}</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-stone-700 shrink-0 transition" />
          </a>
        ))}
      </div>

      {/* WhatsApp Direct Chat / Community Reach */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-between p-4 rounded-2xl bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-200/80 transition group active:scale-[0.99]"
      >
        <div className="flex items-center gap-3 text-right">
          <span className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <MessageCircle className="w-5 h-5" />
          </span>
          <div>
            <div className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition">
              دردشة واتساب المباشرة / مجتمع العملاء
            </div>
            <div className="text-xs text-stone-600">
              تواصل سريع مع فريقنا أو انضم لتحديثات وعروض البراند
            </div>
          </div>
        </div>
        <ExternalLink className="w-4 h-4 text-emerald-700 shrink-0" />
      </a>
    </section>
  );
}

/**
 * Private feedback box allowing online customers to write a quick note to management
 * and optionally send it straight to WhatsApp.
 */
function PrivateFeedbackBox({ brandName, whatsappNumber, onNotify }) {
  const [isOpen, setIsOpen] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [submittedDraft, setSubmittedDraft] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = noteText.trim();
    if (!trimmed) return;

    const formatted =
      `ملاحظة للإدارة (${brandName} - أونلاين):\n` +
      `${trimmed}` +
      (contactInfo.trim() ? `\nبيانات التواصل: ${contactInfo.trim()}` : '');

    setSubmittedDraft(formatted);
    setNoteText('');
    setContactInfo('');
    setIsOpen(false);
    onNotify('تم تسجيل ملاحظتك بنجاح، شكراً لمشاركتنا!');
  };

  const handleSendWhatsApp = () => {
    if (!submittedDraft) return;
    const url = buildWhatsAppLink(whatsappNumber, submittedDraft);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section aria-label="ملاحظة خاصة للإدارة" className="pt-1">
      <div className="rounded-2xl bg-stone-50/90 border border-stone-200/80 p-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="text-right">
            <h2 className="text-sm font-bold text-stone-800">عندك ملاحظة أو اقتراح خاص للإدارة؟</h2>
            <p className="text-xs text-stone-500">اكتبها هنا وهتوصلنا مباشرة لتحسين تجربتك الأونلاين</p>
          </div>
          <button
            type="button"
            onClick={() => {
              setIsOpen((prev) => !prev);
              setSubmittedDraft('');
            }}
            className="px-3.5 py-2 rounded-xl bg-white hover:bg-stone-100 border border-stone-200 text-xs font-bold text-stone-800 transition shrink-0"
          >
            {isOpen ? 'إغلاق' : 'اكتب ملاحظة'}
          </button>
        </div>

        {isOpen && (
          <form onSubmit={handleSubmit} className="space-y-2.5 pt-1">
            <textarea
              rows={3}
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="اكتب ملاحظتك أو اقتراحك بكل وضوح..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-200 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
              required
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                placeholder="الاسم أو رقم الموبايل (اختياري)"
                className="flex-1 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-bold transition active:scale-[0.99] shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
                <span>حفظ الملاحظة</span>
              </button>
            </div>
          </form>
        )}

        {submittedDraft && (
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-semibold flex flex-wrap items-center justify-between gap-2">
            <span>تم تجهيز ملاحظتك للإدارة بنجاح.</span>
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition"
            >
              إرسال عبر واتساب
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * Settings drawer allowing live customization of brand name, tagline, Google review link,
 * online store/website, social links, WhatsApp number, and discount code.
 */
function SettingsDrawer({ isOpen, config, onClose, onSave, onReset }) {
  const [draft, setDraft] = useState(config);

  useEffect(() => {
    if (isOpen) {
      setDraft(config);
    }
  }, [isOpen, config]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...draft,
      brandName: draft.brandName.trim() || DEFAULT_CONFIG.brandName,
      tagline: draft.tagline.trim() || DEFAULT_CONFIG.tagline,
      discountCode: draft.discountCode.trim(),
      discountNote: draft.discountNote.trim() || DEFAULT_CONFIG.discountNote,
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="إعدادات وتخصيص الصفحة"
    >
      <div className="w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl border border-stone-200 shadow-2xl max-h-[90vh] overflow-y-auto p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-stone-900">
              تخصيص بيانات وروابط المتجر الأونلاين
            </h2>
            <p className="text-xs text-stone-500">
              عدّل الروابط وكود الخصم وسيتم حفظ التغييرات تلقائياً
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق النافذة"
            className="p-2 rounded-xl text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
          <div>
            <label className="block font-bold text-stone-700 mb-1">اسم البراند / المتجر</label>
            <input
              type="text"
              value={draft.brandName}
              onChange={(e) => setDraft({ ...draft, brandName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">جملة الترحيب</label>
            <input
              type="text"
              value={draft.tagline}
              onChange={(e) => setDraft({ ...draft, tagline: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">رابط تقييم Google / Google Maps</label>
            <input
              type="url"
              dir="ltr"
              value={draft.googleReviewUrl}
              onChange={(e) => setDraft({ ...draft, googleReviewUrl: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/60 text-left focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-stone-700 mb-1">رابط المتجر / الموقع</label>
              <input
                type="url"
                dir="ltr"
                value={draft.storeUrl}
                onChange={(e) => setDraft({ ...draft, storeUrl: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/60 text-left focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">رقم واتساب (مع كود الدولة)</label>
              <input
                type="text"
                dir="ltr"
                value={draft.whatsappNumber}
                onChange={(e) => setDraft({ ...draft, whatsappNumber: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/60 text-left focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">رابط إنستغرام</label>
              <input
                type="url"
                dir="ltr"
                value={draft.instagramUrl}
                onChange={(e) => setDraft({ ...draft, instagramUrl: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/60 text-left focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">رابط تيك توك</label>
              <input
                type="url"
                dir="ltr"
                value={draft.tiktokUrl}
                onChange={(e) => setDraft({ ...draft, tiktokUrl: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/60 text-left focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">رابط فيسبوك</label>
              <input
                type="url"
                dir="ltr"
                value={draft.facebookUrl}
                onChange={(e) => setDraft({ ...draft, facebookUrl: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/60 text-left focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">كود الخصم (اختياري)</label>
              <input
                type="text"
                dir="ltr"
                value={draft.discountCode}
                onChange={(e) => setDraft({ ...draft, discountCode: e.target.value })}
                placeholder="REVIEW15"
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/60 text-left focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">وصف عرض / كود الخصم</label>
            <input
              type="text"
              value={draft.discountNote}
              onChange={(e) => setDraft({ ...draft, discountNote: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="flex items-center justify-between gap-2 pt-3 border-t border-stone-100">
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>استعادة الافتراضي</span>
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold shadow-sm transition active:scale-[0.99]"
            >
              حفظ التغييرات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/**
 * Footer note component.
 */
function FooterNote({ brandName }) {
  return (
    <footer className="w-full max-w-xl mx-auto px-4 pb-6 pt-2 text-center text-xs text-stone-400">
      شكراً لثقتك في {brandName} — رأيك دائماً محل تقدير واهتمام
    </footer>
  );
}

/**
 * Container wrapper that groups all review, site impression, reach channels,
 * and private feedback sections inside a single cohesive card.
 */
function HubContainer({ children }) {
  return (
    <div className="w-full bg-white rounded-[2rem] border border-stone-200/80 shadow-xl shadow-stone-900/5 p-5 sm:p-8 space-y-6">
      {children}
    </div>
  );
}

/**
 * Interactive section allowing visitors to rate their impression of the website
 * and store experience directly on the page.
 */
function SiteImpressionSection({ brandName, onNotify }) {
  const [selectedMood, setSelectedMood] = useState('');
  const [impressionNote, setImpressionNote] = useState('');
  const [savedImpression, setSavedImpression] = useState(null);

  const moods = [
    { id: 'excellent', label: 'ممتاز وسريع' },
    { id: 'good', label: 'جيد جداً' },
    { id: 'needs_work', label: 'يحتاج تحسين' },
  ];

  const handleImpressionSubmit = (e) => {
    e.preventDefault();
    if (!selectedMood && !impressionNote.trim()) return;

    const chosenLabel =
      moods.find((m) => m.id === selectedMood)?.label || 'انطباع عام';

    setSavedImpression({
      moodLabel: chosenLabel,
      note: impressionNote.trim(),
    });
    setSelectedMood('');
    setImpressionNote('');
    onNotify(`تم تسجيل انطباعك عن موقع ${brandName} بنجاح`);
  };

  return (
    <section aria-label="انطباعك عن الموقع" className="pt-1">
      <div className="rounded-2xl bg-amber-50/50 border border-amber-200/70 p-4 space-y-3">
        <div className="flex items-center gap-2 text-right">
          <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <ThumbsUp className="w-4 h-4" />
          </span>
          <div>
            <h2 className="text-sm font-bold text-stone-900">إيه انطباعك عن الموقع وتجربة التصفح؟</h2>
            <p className="text-xs text-stone-500">
              رأيك في سهولة الموقع وسرعة الوصول للمنتجات بيساعدنا نطوره دايماً
            </p>
          </div>
        </div>

        <form onSubmit={handleImpressionSubmit} className="space-y-2.5">
          <div className="flex flex-wrap gap-2">
            {moods.map((mood) => {
              const active = selectedMood === mood.id;
              return (
                <button
                  key={mood.id}
                  type="button"
                  onClick={() => setSelectedMood(mood.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                    active
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {mood.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={impressionNote}
              onChange={(e) => setImpressionNote(e.target.value)}
              placeholder="اكتب انطباعك عن الموقع في كلمة أو سطر..."
              className="flex-1 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold transition active:scale-[0.99] shrink-0"
            >
              إرسال الانطباع
            </button>
          </div>
        </form>

        {savedImpression && (
          <div className="p-3 rounded-xl bg-white border border-amber-200 text-xs text-stone-800 space-y-1">
            <p className="font-bold text-amber-800">
              شكراً لك! تم تسجيل انطباعك: {savedImpression.moodLabel}
            </p>
            {savedImpression.note && <p className="text-stone-600">"{savedImpression.note}"</p>}
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * Main application component tailored for an online-only business.
 */
export default function App() {
  const [config, setConfig] = useState(() => loadSavedConfig());
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => setToastMessage(''), 2500);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const handleCopyLink = async () => {
    const currentUrl = window.location.href;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(currentUrl);
      } else {
        const temp = document.createElement('input');
        temp.value = currentUrl;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }
      setCopied(true);
      setToastMessage('تم نسخ رابط الصفحة لمشاركته مع عملائك');
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setToastMessage('يمكنك نسخ الرابط مباشرة من شريط المتصفح');
    }
  };

  const handleSaveConfig = (nextConfig) => {
    setConfig(nextConfig);
    persistConfig(nextConfig);
    setSettingsOpen(false);
    setToastMessage('تم حفظ وتحديث بيانات المتجر الأونلاين');
  };

  const handleResetConfig = () => {
    setConfig(DEFAULT_CONFIG);
    persistConfig(DEFAULT_CONFIG);
    setSettingsOpen(false);
    setToastMessage('تمت استعادة الإعدادات الافتراضية');
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col justify-between">
      <TopUtilityBar
        onCopyLink={handleCopyLink}
        copied={copied}
        onOpenSettings={() => setSettingsOpen(true)}
      />

      <main className="w-full max-w-xl mx-auto px-4 py-6 sm:py-8 flex-grow flex flex-col justify-center">
        <HubContainer>
          <HeaderBrand brandName={config.brandName} tagline={config.tagline} />

          <PrimaryReviewCard
            googleReviewUrl={config.googleReviewUrl}
            discountCode={config.discountCode}
            discountNote={config.discountNote}
            onNotify={setToastMessage}
          />

          <SiteImpressionSection
            brandName={config.brandName}
            onNotify={setToastMessage}
          />

          <ReachChannelsList config={config} />

          <PrivateFeedbackBox
            brandName={config.brandName}
            whatsappNumber={config.whatsappNumber}
            onNotify={setToastMessage}
          />
        </HubContainer>
      </main>

      <FooterNote brandName={config.brandName} />

      <SettingsDrawer
        isOpen={settingsOpen}
        config={config}
        onClose={() => setSettingsOpen(false)}
        onSave={handleSaveConfig}
        onReset={handleResetConfig}
      />

      {toastMessage && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-2xl bg-stone-900 text-white text-xs sm:text-sm font-bold shadow-lg flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}