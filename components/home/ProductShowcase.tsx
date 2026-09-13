"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { products } from "@/data/products";
import { showcaseSections } from "@/data/home";

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      draggable={false}
      className="group relative flex min-h-70 w-full flex-col items-center overflow-hidden rounded-xl bg-white p-3 transition-all duration-300 sm:min-h-75 sm:p-4"
    >
      {product.discount !== undefined && (
        <>
          <span className="absolute right-5 top-8.5 z-10 rounded-full bg-[#d22c4e] px-1.5 py-0.5 text-sm text-white  sm:top-10 md:px-2 md:right-6 md:top-7 lg:px-2 lg:right-7 lg:top-13 xl:px-3 xl:right-7 xl:top-10">
            تخفیف
          </span>
        </>
      )}

      <button
        type="button"
        className="absolute left-3 top-4 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#d22c4e] text-lg font-bold leading-none text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:left-6 sm:top-5 lg:left-7 lg:top-10"
      >
        +
      </button>

      <div className="relative h-44 w-full sm:h-52 lg:h-64">
        <Image
          src={product.image}
          alt={product.name}
          fill
          draggable={false}
          sizes="(max-width: 639px) 90vw, (max-width: 767px) 45vw, (max-width: 1023px) 30vw, 23vw"
          className="pointer-events-none object-contain transition-opacity duration-300 group-hover:opacity-0"
        />

        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt={product.name}
            fill
            draggable={false}
            sizes="(max-width: 639px) 90vw, (max-width: 767px) 45vw, (max-width: 1023px) 30vw, 23vw"
            className="pointer-events-none object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
      </div>

      <div className="mt-3 flex w-full flex-1 flex-col">
        <h3 className="line-clamp-2 min-h-12 text-center text-sm font-bold leading-6 text-black transition-colors duration-300 group-hover:text-[#d22c4e]">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center justify-center gap-2 whitespace-nowrap">
          {product.oldPrice !== undefined && (
            <span className="text-sm text-gray-400 line-through">
              {product.oldPrice.toLocaleString("fa-IR")} تومان
            </span>
          )}

          {product.price !== undefined && (
            <span className="text-lg font-bold text-black">
              {product.price.toLocaleString("fa-IR")} تومان
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function ServiceShowcase() {
  return (
    <section
      dir="rtl"
      className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-3 sm:gap-14 sm:px-4 md:gap-16 md:px-6 lg:px-8"
    >
      {showcaseSections.map((section, sectionIndex) => {
        const sectionProducts = section.productIds
          .map((id) => products.find((product) => product.id === id))
          .filter((product) => product !== undefined);

        return (
          <div key={section.title} className="flex w-full flex-col gap-5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="mb-4 text-lg font-bold sm:text-xl md:text-2xl">
                {section.title}
              </h2>

              <Link
                href={section.link}
                className="shrink-0 text-sm font-bold text-[#d22c4e] transition-opacity duration-200 hover:opacity-70"
              >
                مشاهده همه
              </Link>
            </div>

            <div className="relative w-full">
              <Carousel
                dir="rtl"
                opts={{
                  align: "start",
                  direction: "rtl",
                  loop: true,
                  dragFree: false,
                  containScroll: false,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-3">
                  {sectionProducts.map((product) => (
                    <CarouselItem
                      key={product.id}
                      className="basis-1/2 pl-3 md:basis-1/3 lg:basis-1/4"
                    >
                      <ProductCard product={product} />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious
                  aria-label="محصول قبلی"
                  className="right-2 left-auto h-9 w-9 border border-gray-200/60 bg-white/70 text-gray-500 shadow-sm backdrop-blur-md transition-all hover:bg-white hover:text-gray-700 hover:shadow-md rtl:rotate-180 sm:right-2 sm:h-10 sm:w-10 md:right-1 md:h-11 md:w-11 xl:-right-12 xl:h-11 xl:w-11"
                />

                <CarouselNext
                  aria-label="محصول بعدی"
                  className="left-2 right-auto h-9 w-9 border border-gray-200/60 bg-white/70 text-gray-500 shadow-sm backdrop-blur-md transition-all hover:bg-white hover:text-gray-700 hover:shadow-md rtl:rotate-180 sm:left-2 sm:h-10 sm:w-10 md:left-1 md:h-11 md:w-11 xl:-left-12 xl:h-11 xl:w-11"
                />
              </Carousel>
            </div>

            {sectionIndex === 0 && (
              <Link
                href="/category/banner-1"
                className="group mt-2 block w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src="/banner-1.webp"
                  alt="بنر خدمات"
                  width={1200}
                  height={300}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="mt-10 h-auto w-full object-cover "
                />
              </Link>
            )}

            {sectionIndex === 2 && (
              <Link
                href="/category/banner-2"
                className="group mt-2 block w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src="/banner-2.webp"
                  alt="بنر آموزش"
                  width={1200}
                  height={300}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="mt-10 h-auto w-full object-cover "
                />
              </Link>
            )}
          </div>
        );
      })}
    </section>
  );
}
