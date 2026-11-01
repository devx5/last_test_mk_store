import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';
import { ProductsContext } from '../context/ProductContext.jsx';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const mobileMenuRef = useRef(null);

  // --- حالات البحث الذكي ---
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();

  // جلب المنتجات من الكونتكست
const { products } = useContext(ProductsContext);
  const allProducts = products || [];;

  // دالة البحث الذكي والترتيب (البداية أولاً ثم المنتصف) باستخدام خصائص API الصحيحة (title, thumbnail)
 // دالة البحث الذكي مع تقنية الـ Debounce (تأخير زمني لمنع كثرة الطلبات)
  useEffect(() => {
    // لو خانة البحث فاضية، نفذ فوراً وقفل النتائج
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setIsSearchOpen(false);
      return;
    }

    // نعمل Timer يستنى 300 مللي ثانية بعد آخر حرف كتبه المستخدم
    const delayDebounceFn = setTimeout(() => {
      const query = searchTerm.toLowerCase();
      
      const matched = allProducts.filter((p) => {
        const title = p.title || p.name || '';
        return title.toLowerCase().includes(query);
      });

      matched.sort((a, b) => {
        const titleA = (a.title || a.name || '').toLowerCase();
        const titleB = (b.title || b.name || '').toLowerCase();

        const aStarts = titleA.startsWith(query);
        const bStarts = titleB.startsWith(query);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        return 0;
      });

      setSearchResults(matched);
      setIsSearchOpen(true);
    }, 500); // المهلة الزمنية (300 مللي ثانية)

    // يلغي الـ Timer القديم لو المستخدم كتب حرف جديد قبل انتهاء المهلة
    return () => clearTimeout(delayDebounceFn);

  }, [searchTerm, allProducts]);

  // إغلاق قائمة البحث عند الضغط خارجها
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);
  
  useEffect(() => {
    const controlNavbar = () => {
      if (isMobileMenuOpen || isMobileSearchOpen) {
        setShowNavbar(true);
        return;
      }
      if (window.scrollY < 50) {
        setShowNavbar(true);
        return;
      }
      if (window.scrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, isMobileMenuOpen, isMobileSearchOpen]);

  return (
    <div lang='ar' dir='rtl' className={`w-full bg-gray-100 font-['Cairo',sans-serif] sticky top-0 z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0 ' : '-translate-y-full'}`}>
      {/* 1. Top Announcement Bar */}
      <div className="bg-[#1f2937] w-full text-gray-300 text-xs py-2 px-4 text-center mt-[69px] md:mt-[89px]">
        <div className="w-full flex justify-center items-center gap-2">
          <span>اتصل بنا - مكه لمستلزمات ومستحضرات التجميل بسعر الجملة</span>
          <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-[10px]">MK</span>
        </div>
      </div>

      {/* 2. Main Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="w-full px-0 lg:px-8">
          <div className="w-full flex items-center justify-between h-20 px-1">

            {/* Mobile Menu Button */}
            <div className="flex items-center xl:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
              >
                <i className="fa-solid fa-bars text-xl"></i>
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold tracking-tight text-blue-900 flex items-center gap-1">
                <span className="text-gray-700 mt-1">Store</span>
                <img src={logo} className="h-15 w-15" alt="Mekkah Logo" />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-6 space-x-reverse text-sm font-medium text-gray-700">
              <Link to="/" className="hover:text-blue-600 transition">الرئيسية</Link>
              <a href="#" className="hover:text-blue-600 transition">قائمة الشركات</a>
              <Link to="/all-products" className="hover:text-blue-600 transition">كل المنتجات</Link>
              
              <div className="relative group cursor-pointer">
                <div className="flex items-center gap-1 hover:text-blue-600 transition">
                  <span>الأقسام</span>
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </div>
                <div className="absolute top-full right-0 w-48 bg-white shadow-xl rounded-md py-2 border border-gray-100 hidden group-hover:block z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">العناية بالشعر</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">العناية بالبشرة</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">العناية بالجسم</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">العناية الشخصية</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">المكياج والاكسسوارات</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">العناية بالأطفال</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">المستلزمات والمكملات</a>
                </div>
              </div>
              <Link to="/about" className="hover:text-blue-600 transition">من نحن</Link>
              <Link to="/returnpolicy" className="hover:text-blue-600 transition">سياسة الاستبدال والاسترجاع</Link>
              <Link to="/contact" className="hover:text-blue-600 transition mr-3">اتصل بنا</Link>
            </nav>

            {/* Search Bar (Desktop) */}
            <div className="hidden md:flex items-center flex-1 max-w-xs mx-6 relative" ref={searchContainerRef}>
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="البحث عن المنتجات" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => searchTerm.trim() && setIsSearchOpen(true)}
                  className="w-full bg-gray-100 text-sm text-gray-800 rounded-full py-2 pr-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-transparent"
                />
                <button className="absolute left-3 top-2 text-blue-600 hover:text-blue-800">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>

              {/* القائمة المنسدلة للديسكتوب */}
              {isSearchOpen && (
                <div className="absolute top-full right-0 left-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 max-h-80 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    <div className="divide-y divide-gray-100">
                      {searchResults.map((product) => (
                        <div
                          key={product.id}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchTerm('');
                            navigate(`/product/${product.id}`);
                          }}
                          className="flex items-center gap-3 p-2.5 hover:bg-blue-50 cursor-pointer transition"
                        >
                          <img src={product.thumbnail || product.image} alt={product.title || product.name} className="w-10 h-10 object-cover rounded-lg border" />
                          <div className="flex-1 text-right">
                            <h4 className="text-xs font-bold text-gray-800 line-clamp-1">{product.title || product.name}</h4>
                            <span className="text-xs font-extrabold text-blue-600">${product.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-gray-500">
                      <p className="text-xs font-bold text-gray-600">لا يوجد نتائج</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Action Icons */}
            <div className="flex items-center space-x-1 space-x-reverse">
              <Link to="/cart" className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-md px-2.5 py-1.5 cursor-pointer hover:bg-gray-100 transition">
                <span className="text-xs font-semibold text-gray-700">EGP 0.00</span>
                <div className="relative bg-blue-600 text-white rounded p-1">
                  <i className="fa-solid fa-cart-shopping text-xs"></i>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
                </div>
              </Link>

              <a href="#" className="hidden sm:flex text-gray-600 hover:text-blue-600 p-2 items-center justify-center rounded-full hover:bg-gray-100">
                <i className="fa-regular fa-user text-lg"></i>
              </a>

              <button 
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                className="xl:hidden text-gray-700 hover:text-blue-600 p-2"
              >
                <i className="fa-solid fa-magnifying-glass text-lg"></i>
              </button>
            </div>

          </div>
        </div>

      {/* Mobile Search Bar Expanded */}
  {isMobileSearchOpen && (
    <div className="md:hidden px-4 pb-3 bg-white border-t border-gray-100 relative" ref={searchContainerRef}>
      <div className="relative w-full mt-2">
        <input 
          type="text" 
          placeholder="البحث عن المنتجات" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          // 1. عدلنا text-sm إلى text-base عشان حجم الخط يبقى 16px وما يعملش زوم أوتوماتيك على الموبايل
          className="w-full bg-gray-100 text-base text-gray-800 rounded-full py-2 pr-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="absolute left-3 top-1.5 text-blue-600">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      {/* القائمة المنسدلة لنتائج البحث (موبايل) */}
      {isSearchOpen && (
        <div className="absolute right-4 left-4 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 max-h-60 overflow-y-auto">
          {searchResults.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    setIsSearchOpen(false);
                    setIsMobileSearchOpen(false);
                    setSearchTerm('');
                    
                    // 2. أمر سحري لإلغاء أي زوم حالي فور الضغط على المنتج وإغلاق البحث
                    const vp = document.querySelector('meta[name="viewport"]');
                    if (vp) {
                      vp.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0');
                      setTimeout(() => vp.setAttribute('content', 'width=device-width, initial-scale=1.0'), 150);
                    }

                    navigate(`/product/${product.id}`);
                  }}
                  className="flex items-center gap-3 p-2.5 hover:bg-blue-50 cursor-pointer"
                >
                  <img src={product.thumbnail || product.image} alt={product.title || product.name} className="w-9 h-9 object-cover rounded-lg border" />
                  <div className="flex-1 text-right">
                    <h4 className="text-xs font-bold text-gray-800 line-clamp-1">{product.title || product.name}</h4>
                    <span className="text-xs font-extrabold text-blue-600">${product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              <p className="text-xs font-bold text-gray-600">لا يوجد نتائج</p>
            </div>
          )}
        </div>
      )}
    </div>
  )}

        {/* Mobile Menu Drawer / Dropdown */}
        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} className="xl:hidden bg-white border-t border-gray-200 px-4 pt-2 pb-4 space-y-2">
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">الرئيسية</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/Companies" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">قائمة الشركات</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/all-products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">كل المنتجات</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/About" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">من نحن</Link>
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-blue-600 transition">
                <span>الأقسام</span>
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </div>
              <div className="absolute top-full right-0 w-48 bg-white shadow-xl rounded-md py-2 border border-gray-100 hidden group-hover:block z-50">
                <a onClick={() => setIsMobileMenuOpen(false)} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">العناية بالشعر</a>
                <a onClick={() => setIsMobileMenuOpen(false)} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">العناية بالبشرة</a>
                <a onClick={() => setIsMobileMenuOpen(false)} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">العناية بالجسم</a>
                <a onClick={() => setIsMobileMenuOpen(false)} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">العناية الشخصية</a>
                <a onClick={() => setIsMobileMenuOpen(false)} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">المكياج والاكسسوارات</a>
                <a onClick={() => setIsMobileMenuOpen(false)} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">العناية بالأطفال</a>
                <a onClick={() => setIsMobileMenuOpen(false)} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">المستلزمات والمكملات</a>
              </div>
            </div>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/ReturnPolicy" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">سياسة الاستبدال والاسترجاع</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/Contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">اتصل بنا</Link>
          </div>
        )}
      </header>
    </div>
  );
}