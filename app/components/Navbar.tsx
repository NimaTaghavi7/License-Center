function Header() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-2 sm:px-4 lg:px-6 py-4 sm:py-5 lg:py-6 gap-3 sm:gap-4 lg:gap-8 h-auto lg:h-35 bg-[#0c0c15] font-sans font-bold text-white">
      
      <div className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-5">
        <img className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18" src="image1.webp" alt="لوگو" />
        <button className="w-12 h-8 rounded-3xl hover:bg-[#ef394e] ">خانه</button>
        <button className="w-20 h-8 rounded-3xl hover:bg-[#ef394e] "> خدمات ما</button>
        <button className="w-13 h-8 rounded-3xl hover:bg-[#ef394e] ">وبلاگ</button>
        <button className="w-20 h-8 rounded-3xl hover:bg-[#ef394e] ">درباره ما</button>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-5 lg:gap-6">
       
        <div className="flex flex-row items-center justify-between gap-3 sm:gap-4 lg:gap-5">
          <button>سرچ</button>
          <button>سبد</button>
        </div>

        <div className="flex flex-row items-center justify-between gap-3 sm:gap-4 lg:gap-5">
          <button>عضویت</button>
          <h3 className="text-xs font-thin">|</h3>
          <button>وارد شوید</button>
        </div>
        
      </div>
      
    </div>
  );
}

export default Header;