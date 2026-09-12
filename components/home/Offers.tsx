"use client";

import { useState } from "react";
import Link from "next/link";

import { products } from "@/lib/data/products";

const offerProductIds = [
  "product-1",
  "product-2",
  "product-3",
  "product-4",
  "product-5",
  "product-6",
  "product-7",
  "product-8",
  "product-9",
  "product-10",
];

export default function Offers() {
  const [start, setStart] = useState(0);

  const offerProducts = offerProductIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product) => product !== undefined);

  const next = () => {
    if (start < offerProducts.length - 3) {
      setStart(start + 1);
    }
  };

  const prev = () => {
    if (start > 0) {
      setStart(start - 1);
    }
  };

  return (
    <section
      dir="rtl"
      className="mx-auto mb-8 w-full max-w-6xl px-3 sm:mb-10 sm:px-4 lg:mb-12 lg:px-6"
    >
      <div className="flex flex-col gap-3 overflow-hidden rounded-2xl bg-[#d22c4e] p-3 sm:flex-row sm:gap-4 sm:p-4 lg:gap-5">
        <div className="my-0 flex min-w-0 flex-row items-center justify-between gap-4 p-3 text-center text-white sm:my-2 sm:min-w-45 sm:flex-col sm:justify-evenly sm:gap-5 sm:p-5 lg:my-4 lg:gap-6 lg:p-10">
          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
            پیشنهاد <br />
            شگفت‌ <br />
            انگیز
          </h2>

          <img
            className="h-7 w-7"
            src="/percent.webp"
            alt=""
          />

          <div>
            <button
              onClick={prev}
              className="px-2 text-xl sm:px-3"
            >
              ❮
            </button>

            <button
              onClick={next}
              className="px-2 text-xl sm:px-3"
            >
              ❯
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <div
            className="flex gap-3 transition-transform duration-500"
            style={{
              transform: `translateX(${start * 274}px)`,
            }}
          >
            {offerProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="relative block min-w-55 rounded-xl bg-white p-3 sm:min-w-62.5 sm:p-4"
              >
                {product.discount !== undefined && (
                  <span className="absolute z-10 m-2.5 rounded-full bg-[#d22c4e] px-1 py-1 text-sm text-white">
                    {product.discount}%
                  </span>
                )}

                <div className="relative h-36 w-full sm:h-44 lg:h-50">
                  <img
                    src={product.image}
                    className="h-full w-full object-contain object-center transition-opacity duration-300 hover:opacity-0"
                    alt={product.name}
                  />

                  {product.hoverImage && (
                    <img
                      src={product.hoverImage}
                      className="absolute inset-0 h-full w-full object-contain object-center opacity-0 transition-opacity duration-300 hover:opacity-100"
                      alt={product.name}
                    />
                  )}
                </div>

                <h3 className="mt-3 font-bold">
                  {product.name}
                </h3>

                <div className="mt-3">
                  {product.oldPrice !== undefined && (
                    <p className="mt-2 text-sm text-gray-400 line-through">
                      {product.oldPrice.toLocaleString("fa-IR")} تومان
                    </p>
                  )}

                  {product.price !== undefined && (
                    <p className="text-lg font-bold">
                      {product.price.toLocaleString("fa-IR")} تومان
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}