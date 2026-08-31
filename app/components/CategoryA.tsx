"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "کارت اعتباری ارزی",
    image: "/image-service12.webp",
    link: "/services/service12",
  },
  {
    name: "سرویس ویدیویی",
    image: "/image-service11.webp",
    link: "/services/service11",
  },
  {
    name: "سرویس صوتی",
    image: "/image-service10.webp",
    link: "/services/service10",
  },
  {
    name: "سرویس آموزشی",
    image: "/image-service9.webp",
    link: "/services/service9",
  },
];

export default function Services() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 w-full px-3 sm:px-4 lg:px-6 py-0">
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="mb-4 h-10 w-0.25 rounded-full bg-black"></div>

        <h2 className="font-sans text-2xl font-bold">خدمات لایسنس‌مارکت</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 w-full max-w-6xl gap-3">
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.link}
            className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-3 sm:p-4 transition hover:-translate-y-1 hover:shadow-md"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className="h-20 w-20 sm:h-22 sm:w-22 lg:h-24 lg:w-24 object-contain transition group-hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

