import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const controlNavbar = () => {
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
  }, [lastScrollY]);
  return (
    <div lang='ar' dir='rtl' className= {`w-full  bg-gray-100 font-['Cairo',sans-serif]  sticky top-0  z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0 ' : '-translate-y-full'}`}>
      {/* 1. Top Announcement Bar */}
      <div className=" bg-[#1f2937] w-full  text-gray-300 text-xs py-2 px-4 text-center mt-[69px] md:mt-[89px]">
        <div className="w-full flex justify-center items-center gap-2">
          <span>اتصل بنا - مكه لمستلزمات ومستحضرات التجميل بسعر الجملة</span>
          <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-[10px]">MK</span>
        </div>
      </div>

      {/* 2. Main Navbar */}
      <header className="bg-white shadow-sm sticky  top-0 z-50">
        <div className="w-full px-0 lg:px-8">
          <div className="w-full flex items-center justify-between h-20 px-1">

            {/* Mobile Menu Button (Visible on Small Screens) */}
            <div className="flex items-center xl:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 "
              >
                <i className="fa-solid fa-bars text-xl"></i>
              </button>
            </div>

            {/* Logo */}
            <div className=" flex items-center">
              <Link to="/" className="text-2xl font-bold tracking-tight text-blue-900 flex items-center gap-1">
                <span className="text-gray-700 mt-1 ">Store</span>
                <img src={logo} className="h-15 w-15 " alt="Mekkah Logo" />
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
  
  {/* القائمة المنسدلة للديسك톱 */}
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
            <div className="hidden md:flex items-center flex-1 max-w-xs mx-6">
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="البحث عن المنتجات" 
                  className="w-full bg-gray-100 text-sm text-gray-800 rounded-full py-2 pr-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-transparent"
                />
                <button className="absolute left-3 top-2.5 text-blue-600 hover:text-blue-800">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>

            {/* Right Action Icons (Cart, Account, Support, Shipping) */}
            <div className="flex items-center space-x-1 space-x-reverse">
              {/* Cart */}
              <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-md px-2.5 py-1.5 cursor-pointer hover:bg-gray-100 transition">
                <span className="text-xs font-semibold text-gray-700">EGP 0.00</span>
                <div className="relative bg-blue-600 text-white rounded p-1">
                  <i className="fa-solid fa-cart-shopping text-xs"></i>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
                </div>
              </div>

              {/* User Account */}
              <a href="#" className="hidden sm:flex text-gray-600 hover:text-blue-600 p-2 items-center justify-center rounded-full hover:bg-gray-100">
                <i className="fa-regular fa-user text-lg"></i>
              </a>

              {/* Fast Support / Call (Desktop) */}
              {/* <div className="hidden xl:flex items-center gap-1.5 text-xs text-gray-600 border-r pr-4 border-gray-200">
                <div className="text-left">
                  <span className="block text-[10px] text-gray-400">دعم سريع</span>
                  <span className="font-semibold">بحمتك</span>
                </div>
                <i className="fa-solid fa-headset text-blue-600 text-lg"></i>
              </div> */}

              {/* Fast Shipping (Desktop) */}
              <div className="hidden xl:flex items-center gap-1.5 text-xs text-gray-600 border-r pr-4 border-gray-200">
                <div className="text-left">
                  <span className="block text-center text-[10px] text-gray-400">متوفر شحن</span>
                  <span className="font-semibold">لكافه المحافظات</span>
                </div>
                <i className="fa-solid fa-globe text-blue-600 text-lg"></i>
              </div>

              {/* Mobile Search Button */}
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
          <div className="md:hidden px-4 pb-3 bg-white border-t border-gray-100">
            <div className="relative w-full mt-">
              <input 
                type="text" 
                placeholder="البحث عن المنتجات" 
                className="w-full  bg-gray-100 text-sm text-gray-800 rounded-full py-2 pr-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute left-3 top-1.5 text-blue-600">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu Drawer / Dropdown */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-200 px-4 pt-2 pb-4 space-y-2">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">الرئيسية</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">قائمة الشركات</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">كل المنتجات</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">من نحن</a>
                      <div className="relative group cursor-pointer">
  <div className="flex items-center gap-1 hover:text-blue-600 transition">
    <span>الأقسام</span>
    <i className="fa-solid fa-chevron-down text-xs"></i>
  </div>
  
  {/* القائمة المنسدلة للديسك톱 */}
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
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">سياسة الاستبدال والاسترجاع</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">اتصل بنا</a>
          </div>
        )}
      </header>
    </div>
  );
}