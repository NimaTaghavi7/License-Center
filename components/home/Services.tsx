"use client";

import Image from "next/image";
import Link from "next/link";

import { categories } from "@/lib/data/categories";

export default function Services() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-6 px-3 py-0 sm:px-4 lg:px-6">
      <div className="mb-6 flex flex-col items-center justify-center">
        <div className="mb-4 h-10 w-px rounded-full bg-black"></div>

        <h2 className="text-2xl font-bold">
          خدمات لایسنس‌مارکت
        </h2>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-3 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-3 transition hover:-translate-y-1 hover:shadow-md sm:p-4"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={100}
              height={100}
              className="h-20 w-20 object-contain transition group-hover:scale-105 sm:h-22 sm:w-22 lg:h-24 lg:w-24"
            />

            <span className="mt-3 text-center text-sm font-bold text-black">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}