
import React, { useState, useEffect } from 'react';

export default function Header() {
  const announcements = [
    "When shopping for 5000 Egyptian pounds, delivery will be free",
    "Exclusive offers on skin and hair care products order now",
    "Always stay brilliant with the latest personal care products"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [announcements.length]);
  return (
    <header className='w-full h-[70px] mt-0  left-0 top-0 md:h-[90px] bg-[#0f172a] mb-[38px]  shadow-sm flex items-center justify-between '>
      {/* start contact icon */}
      <div className='mt-[20px]  sm:mt-[15px] md:mt-[15px]'>
        <a href="https://wa.me/01062773439" className=' ml-[20px] text-white '><i className="fa-brands fa-square-whatsapp text-[30px] md:text-[40px]" style={{ color: " #25D366" }} /></a>

        <a href="tel:01062773439" className=' ml-[15px] text-white '><i className="fa-solid fa-square-phone text-[30px] md:text-[40px]" style={{ color: " #25D366" }} /></a>
      </div>
      {/* end contact icon */}
      {/* start text div  */}
      <div className=" hidden sm:flex sm:mb-5 md:flex flex-1 max-w-md mx-4 mt-[25px] overflow-hidden text-center ">
        <div
          className={`transition-all duration-300 transform ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 '
            }`}
        >
          <p className="text-[20px] md:text-[25px] md:mb-5 font-medium tracking-wide" style={{ color: "#fff" }}>
            {announcements[currentIndex]}
          </p>
        </div>
      </div>
      {/* end text div  */}

      {/* start social media div  */}
      <div className='mt-[20px] sm:mt-[15px] md:mt-[15px]'>
        <a href="tel:https://www.facebook.com/profile.php?id=61594241914299" className=' mr-[18px] text-white '><i className="fa-brands fa-facebook text-[30px] md:text-[40px]" style={{ color: " #0044ff" }} /></a>
        <a href="https://www.instagram.com/mekka_cosmetics?psln=MXRrZ2lxbWZlbnhzNw%3D%3D&utm_source=qr" className=' mr-[18px] text-white '><i className="fa-brands fa-instagram text-[30px] md:text-[40px]" style={{ color: " #E4405F" }} /></a>
        <a href="tel:01062773439" className=' mr-[10px] text-white '><i className="fa-brands fa-tiktok text-[30px] md:text-[40px]" style={{ color: " #99ffff" }} /></a>

      </div>


    </header>
  );
}