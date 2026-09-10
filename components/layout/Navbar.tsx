"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Search, ShoppingCart, X } from "lucide-react";

const serviceColumns = [
  {
    title: "خدمات کاربردی",
    href: "/category/artificial-intelligence",
    items: [
      {
        title: "خرید اکانت هوش مصنوعی",
        href: "/category/artificial-intelligence",
      },
      {
        title: "خرید اکانت ابزارهای سئو",
        href: "/category/seo-tools",
      },
      {
        title: "شماره مجازی دائمی آمریکا",
        href: "/product/Google-Voice",
      },
      {
        title: "خرید اکانت تریدینگ ویو",
        href: "/product/TradingView",
      },
      {
        title: "اشتراک فضای ابری",
        href: "/category/cloud-storages",
      },
      {
        title: "خرید اشتراک روزنامه و مجله",
        href: "/category/news-and-magazines",
      },
      {
        title: "درخواست محصول جدید ✉️",
        href: "/request-new-product",
      },
    ],
  },

  {
    title: "اشتراک سرویس ویدیویی",
    href: "/category/video-streaming",
    items: [
      {
        title: "فیلم و سریال",
        href: "/category/vod",
      },
      {
        title: "تلوزیون آنلاین",
        href: "/category/internet-television",
      },
      {
        title: "ورزشی",
        href: "/category/sport",
      },
      {
        title: "انیمه",
        href: "/category/anime",
      },
      {
        title: "کارتون",
        href: "/category/cartoon",
      },
      {
        title: "مستند",
        href: "/category/documentary",
      },
    ],
  },

  {
    title: "اشتراک سرویس صوتی",
    href: "/category/audio-streaming",
    items: [
      {
        title: "موسیقی",
        href: "/category/music",
      },
      {
        title: "پادکست و رادیو آنلاین",
        href: "/category/podcast-and-internet-radio",
      },
      {
        title: "خرید اکانت اسپاتیفای",
        href: "/product/Spotify-Premium",
      },
      {
        title: "خرید اکانت اپل موزیک",
        href: "/product/Apple-Music",
      },
      {
        title: "خرید اکانت تایدال",
        href: "/product/TIDAL",
      },
      {
        title: "خرید اکانت دیزر",
        href: "/product/Deezer",
      },
    ],
  },

  {
    title: "اشتراک سرویس آموزشی",
    href: "/category/learning",
    items: [
      {
        title: "آموزش زبان",
        href: "/category/language",
      },
      {
        title: "آموزش موسیقی",
        href: "/category/music-education",
      },
      {
        title: "آموزش برنامه نویسی",
        href: "/category/programming-tutorials",
      },
      {
        title: "دوره های آموزشی",
        href: "/category/courses",
      },
      {
        title: "تحصیلی و دانشجویی",
        href: "/category/educational",
      },
      {
        title: "خرید دوره از Udemy",
        href: "/product/Udemy",
      },
    ],
  },

  {
    title: "گرافیک، طراحی و تدوین",
    href: "/category/edit-and-design",
    items: [
      {
        title: "فایل استوک و فوتیج",
        href: "/category/stock-files",
      },
      {
        title: "عکاسی و فیلم برداری",
        href: "/category/photography",
      },
      {
        title: "خرید اکانت فری پیک",
        href: "/product/Freepik-Premium",
      },
      {
        title: "خرید اکانت انواتو",
        href: "/product/Envato-Elements",
      },
      {
        title: "خرید اکانت پیکس ارت",
        href: "/product/PicsArt-Gold",
      },
      {
        title: "خرید اکانت کانوا",
        href: "/product/Canva-Pro",
      },
    ],
  },
];

const aboutItems = [
  {
    title: "درباره لایسنس مارکت",
    href: "/about-us",
  },
  {
    title: "نظرسنجی و بهبود خدمات",
    href: "/survey",
  },
  {
    title: "قوانین",
    href: "/terms",
  },
  {
    title: "ارتباط با ما",
    href: "/contact-us",
  },
  {
    title: "همکاری با ما",
    href: "/come-work-with-us",
  },
];

function Header() {
  const router = useRouter();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const query = searchQuery.trim();

    if (!query) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);
    setIsSearchOpen(false);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <header dir="rtl" className="w-full bg-[#0c0c15] font-bold text-white">
      <div className="mx-auto flex min-h-22.5 w-full max-w-[1600px] flex-wrap items-center justify-center gap-4 px-3 py-4 sm:gap-5 sm:px-5 lg:min-h-30 lg:justify-between lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-5">
          <a href="/" aria-label="خانه" className="shrink-0">
            <img
              src="/image1.webp"
              alt="لوگو"
              className="h-14 w-14 object-contain sm:h-16 sm:w-16 lg:h-18 lg:w-18"
            />
          </a>

          <NavigationMenu dir="rtl" className="z-50">
            <NavigationMenuList className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-bold text-white transition-colors hover:bg-[#ef394e] focus:bg-[#ef394e] focus:outline-none"
                >
                  خانه
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 rounded-full bg-transparent px-4 text-sm font-bold text-white hover:bg-[#ef394e] focus:bg-[#ef394e] data-popup-open:bg-[#ef394e]! data-open:bg-[#ef394e]!">
                  خدمات ما
                </NavigationMenuTrigger>

                <NavigationMenuContent className="w-[min(1250px,calc(100vw-24px))] rounded-2xl border border-white/10 bg-[#12121d] p-4 text-white shadow-2xl sm:p-5 lg:p-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
                    {serviceColumns.map((column) => (
                      <div
                        key={column.title}
                        className="min-w-0 border-b border-white/10 pb-4 last:border-b-0 sm:border-b-0 sm:pb-0"
                      >
                        <NavigationMenuLink
                          href={column.href}
                          className="mb-2 block rounded-lg px-3 py-2 text-right text-sm font-extrabold leading-6 text-white transition-colors hover:bg-white/5 hover:text-[#ef394e] focus:bg-white/5 focus:text-[#ef394e] focus:outline-none"
                        >
                          {column.title}
                        </NavigationMenuLink>

                        <div className="flex flex-col gap-0.5">
                          {column.items.map((item) => (
                            <NavigationMenuLink
                              key={item.title}
                              href={item.href}
                              className="block rounded-lg px-3 py-2 text-right text-sm font-medium leading-6 text-white/70 transition-all hover:bg-[#ef394e]/10 hover:pr-4 hover:text-[#ef394e] focus:bg-[#ef394e]/10 focus:text-[#ef394e] focus:outline-none"
                            >
                              {item.title}
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/blog"
                  className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-bold text-white transition-colors hover:bg-[#ef394e] focus:bg-[#ef394e] focus:outline-none"
                >
                  وبلاگ
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 rounded-full bg-transparent px-4 text-sm font-bold text-white hover:bg-[#ef394e] focus:bg-[#ef394e] data-popup-open:bg-[#ef394e]! data-open:bg-[#ef394e]!">
                  درباره ما
                </NavigationMenuTrigger>

                <NavigationMenuContent className="w-60 rounded-2xl border border-white/10 bg-[#12121d] p-2 text-white shadow-2xl">
                  <div className="flex flex-col gap-1">
                    {aboutItems.map((item, index) => (
                      <NavigationMenuLink
                        key={`${item.title}-${index}`}
                        href={item.href}
                        className="block rounded-xl px-4 py-3 text-right text-sm font-semibold text-white/75 transition-colors hover:bg-[#ef394e]/10 hover:text-[#ef394e] focus:bg-[#ef394e]/10 focus:text-[#ef394e] focus:outline-none"
                      >
                        {item.title}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 lg:gap-6">
          {isSearchOpen ? (
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                aria-label="بستن جستجو"
                onClick={handleCloseSearch}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-[#ef394e] focus:bg-[#ef394e] focus:outline-none"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex h-10 min-w-55 items-center rounded-full bg-white px-4 sm:min-w-70 lg:min-w-80">
                <Search className="h-5 w-5 shrink-0 text-[#0c0c15]" />

                <input
                  type="search"
                  value={searchQuery}
                  autoFocus
                  onChange={(event) => setSearchQuery(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  placeholder="جستجو..."
                  className="h-full w-full bg-transparent px-3 text-sm font-medium text-[#0c0c15] outline-none placeholder:text-gray-400"
                />
              </div>

              <button
                type="button"
                onClick={handleSearch}
                className="h-10 rounded-full bg-[#ef394e] px-5 text-sm font-bold text-white transition-colors hover:bg-[#d92f43] focus:bg-[#d92f43] focus:outline-none"
              >
                جستجو
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  aria-label="جستجو"
                  onClick={() => setIsSearchOpen(true)}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-[#ef394e] focus:bg-[#ef394e] focus:outline-none"
                >
                  <Search className="h-5 w-5" />
                </button>

                <a
                  href="/cart"
                  aria-label="سبد خرید"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-[#ef394e] focus:bg-[#ef394e] focus:outline-none"
                >
                  <ShoppingCart className="h-5 w-5" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm sm:gap-3">
                <a
                  href="/register"
                  className="rounded-full px-3 py-2 text-white transition-colors hover:bg-[#ef394e] focus:bg-[#ef394e] focus:outline-none"
                >
                  عضویت
                </a>

                <span className="text-white/40">|</span>

                <a
                  href="/login"
                  className="rounded-full px-3 py-2 text-white transition-colors hover:bg-[#ef394e] focus:bg-[#ef394e] focus:outline-none"
                >
                  وارد شوید
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
