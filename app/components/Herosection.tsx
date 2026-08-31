"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  { image: "/image-herosection1.webp", link: "/products/1" },
  { image: "/image-herosection2.webp", link: "/products/2" },
  { image: "/image-herosection3.webp", link: "/products/3" },
  { image: "/image-herosection4.webp", link: "/products/4" },
  { image: "/image-herosection5.webp", link: "/products/5" },
  { image: "/image-herosection6.webp", link: "/products/6" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="mx-auto w-full max-w-[1156px] px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 lg:mt-15 mb-8 sm:mb-10 lg:mb-12">
      <Link href={slides[current].link}>
        <img
          src={slides[current].image}
          alt=""
          className="w-full h-full object-cover cursor-pointer"
        />
      </Link>

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 text-white px-2 sm:px-3 lg:px-4 cursor-pointer "
      >
        ❯
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 text-white px-2 sm:px-3 lg:px-4 cursor-pointer"
      >
        ❮
      </button>
    </div>
  );
}