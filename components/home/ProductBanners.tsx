"use client";

import Image from "next/image";
import Link from "next/link";

import { products } from "@/data/products";
import { productBanners } from "@/data/home";

export default function ProductBanners() {
  return (
    <section className="my-15 flex w-full flex-col items-center justify-center gap-6 px-3 py-0 sm:px-4 lg:px-6">
      <div className="grid w-full max-w-6xl grid-cols-2 gap-3 sm:gap-4">
        {productBanners.map((item) => {
          const product = products.find(
            (product) => product.id === item.productId
          );

          if (!product) return null;

          return (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group relative aspect-2/1 overflow-hidden rounded-xl bg-white transition duration-300 hover:-translate-y-1"
            >
              <Image
                src={item.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}