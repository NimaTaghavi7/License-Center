"use client";

import Image from "next/image";
import Link from "next/link";

import { products } from "@/data/products";
import { bestSellerProductIds } from "@/data/home";

export default function Products() {
  const bestSellerProducts = bestSellerProductIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product) => product !== undefined);

  return (
    <section className="flex w-full flex-col items-center justify-center gap-6 px-3 py-0 sm:px-4 lg:px-6">
      <div className="mt-8 mb-6 flex flex-col items-center justify-center sm:mt-10 lg:mt-12">
        <div className="mb-4 h-10 w-px rounded-full bg-black"></div>

        <h2 className="text-2xl font-bold">
          پرفروش های این ماه
        </h2>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {bestSellerProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group relative flex min-h-70 flex-col items-center rounded-xl bg-white p-3 sm:min-h-75 sm:p-4"
          >
            {product.discount !== undefined && (
              <span className="absolute right-3 top-4 z-10 rounded-full bg-[#d22c4e] px-2 py-1 text-sm text-white sm:right-6 sm:top-5 lg:right-10 lg:top-7">
                {product.discount}%
              </span>
            )}

            <div className="relative h-44 w-full sm:h-52 lg:h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-contain transition-opacity duration-300 group-hover:opacity-0"
              />

              {product.hoverImage && (
                <Image
                  src={product.hoverImage}
                  alt={product.name}
                  fill
                  className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              )}
            </div>

            <span className="mt-3 text-center text-sm font-bold text-black">
              {product.name}
            </span>

            <div className="mt-3 text-center">
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
    </section>
  );
}