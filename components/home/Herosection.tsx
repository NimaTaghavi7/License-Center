"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { products } from "@/data/products";
import { heroSlides } from "@/data/home";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const currentSlide = heroSlides[current];

  const product = products.find(
    (product) => product.id === currentSlide.productId
  );

  if (!product) return null;

  return (
    <div className="mx-auto mt-8 mb-8 w-full max-w-6xl px-4 sm:mt-10 sm:mb-10 sm:px-6 lg:mt-15 lg:mb-12 lg:px-8">
      <Link href={`/products/${product.slug}`}>
        <img
          src={currentSlide.image}
          alt={product.name}
          className="h-full w-full cursor-pointer object-cover"
        />
      </Link>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer px-2 text-black sm:left-6 sm:px-3 lg:left-8 lg:px-4"
      >
        ❯
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer px-2 text-black sm:right-6 sm:px-3 lg:right-8 lg:px-4"
      >
        ❮
      </button>
    </div>
  );
}