"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import type { CarouselApi } from "@/components/ui/carousel";

import { products } from "@/data/products";
import { offerProductIds } from "@/data/home";

export default function Offers() {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const offerProducts = offerProductIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product) => product !== undefined);

  useEffect(() => {
    if (!api) return;

    const updateButtons = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateButtons();

    api.on("select", updateButtons);
    api.on("reInit", updateButtons);

    return () => {
      api.off("select", updateButtons);
      api.off("reInit", updateButtons);
    };
  }, [api]);

  return (
    <section
      dir="rtl"
      className="mx-auto mb-10 w-full max-w-300 px-3 sm:mb-12 sm:px-4 lg:mb-14 lg:px-6"
    >
      <div className="flex flex-col gap-3 overflow-hidden rounded-xl bg-[#d22c4e] p-3 sm:flex-row ">
        <div className="flex min-h-40 min-w-0 flex-row items-center justify-between gap-4 px-3 py-3 text-center text-white sm:min-h-80 sm:min-w-36 sm:flex-col sm:justify-evenly sm:px-3 lg:min-h-88 lg:min-w-40">
          <div className="flex flex-col items-center gap-3 sm:gap-5">
            <h2 className="text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
              پیشنهاد
              <br />
              شگفت‌
              <br />
              انگیز
            </h2>

            <Image
              src="/percent.webp"
              alt=""
              width={36}
              height={36}
              className="h-8 w-8 object-contain sm:h-9 sm:w-9"
            />

            <Link
               href="categories/offers"
              className="hidden items-center gap-1.5 rounded-lg border border-white/40 px-4 py-2 text-sm font-bold text-white transition-all duration-200 hover:bg-white hover:text-[#d22c4e] sm:flex"
            >
              مشاهده همه
              <span>←</span>
            </Link>
          </div>

          <Link
             href="categories/offers"
            className="flex shrink-0 items-center gap-1 rounded-lg border border-white/40 px-3 py-2 text-xs font-bold text-white transition-all duration-200 hover:bg-white hover:text-[#d22c4e] sm:hidden"
          >
            مشاهده همه
            <span>←</span>
          </Link>
        </div>

        <div className="min-w-0 flex-1">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              direction: "rtl",
              dragFree: true,
            }}
            className="relative w-full"
          >
            <CarouselContent className="-ml-2">
              {offerProducts.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="basis-[49%] pl-2 sm:basis-1/3 lg:basis-[22%]"
                >
                  <Link
                    href={`/products/${product.slug}`}
                    className="group relative block h-full overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
                  >
                    {product.discount !== undefined && (
                      <>
                        <span className="absolute right-3 top-5 z-10 rounded-full bg-[#d22c4e] px-1.5 py-0.5 text-xs text-white sm:right-4 sm:top-6 sm:px-2 sm:text-sm lg:right-3 lg:top-3">
                          تخفیف
                        </span>
                      </>
                    )}

                    <button
                      type="button"
                      className="absolute left-3 top-4 z-10 flex h-6 w-10 items-center justify-center rounded-full bg-[#d22c4e] text-lg font-bold leading-none text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:left-6 sm:top-5 lg:left-3 lg:top-2.5"
                    >
                      +
                    </button>

                    <div className="relative h-40 w-full overflow-hidden sm:h-44 lg:h-52">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 49vw, (max-width: 1024px) 33vw, 18vw"
                        className={`object-contain object-center transition-opacity duration-300 ${
                          product.hoverImage ? "group-hover:opacity-0" : ""
                        }`}
                      />

                      {product.hoverImage && (
                        <Image
                          src={product.hoverImage}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 49vw, (max-width: 1024px) 33vw, 18vw"
                          className="object-contain object-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                      )}
                    </div>

                    <div className="px-2 pb-2.5 pt-1.5 sm:px-2.5 sm:pb-3 sm:pt-2">
                      <h3 className="line-clamp-2 min-h-9 text-xs font-bold leading-4 sm:min-h-10 sm:text-sm sm:leading-5">
                        {product.name}
                      </h3>

                      <div className="mt-2">
                        {product.oldPrice !== undefined && (
                          <p className="text-[10px] text-gray-400 line-through sm:text-xs">
                            {product.oldPrice.toLocaleString("fa-IR")} تومان
                          </p>
                        )}

                        {product.price !== undefined && (
                          <p className="mt-1 text-sm font-bold sm:text-base lg:text-base">
                            {product.price.toLocaleString("fa-IR")} تومان
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}

              <CarouselItem className="basis-[49%] pl-2 sm:basis-1/3 lg:basis-[22%]">
                <Link
                  href="categories/offers"
                  className="flex h-full min-h-40 items-center justify-center rounded-xl bg-white text-sm font-bold text-[#d22c4e] transition-all duration-300 hover:shadow-lg sm:min-h-80 lg:min-h-88"
                >
                  <div className="flex flex-col items-center gap-3">
                    <span>مشاهده همه</span>
                    <span className="text-2xl">←</span>
                  </div>
                </Link>
              </CarouselItem>
            </CarouselContent>

            {canScrollPrev && (
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                aria-label="محصول قبلی"
                className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-xl text-gray-700 shadow-lg transition-all hover:scale-105 hover:text-[#d22c4e] active:scale-95 sm:right-3 sm:h-11 sm:w-11"
              >
                ‹
              </button>
            )}

            {canScrollNext && (
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                aria-label="محصول بعدی"
                className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-xl text-gray-700 shadow-lg transition-all hover:scale-105 hover:text-[#d22c4e] active:scale-95 sm:left-3 sm:h-11 sm:w-11"
              >
                ›
              </button>
            )}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
