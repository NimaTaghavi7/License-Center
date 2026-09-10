"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "کارت اعتباری ارزی",
    image: "/image-category1.webp",
    link: "/services/service12",
  },
  {
    name: "سرویس ویدیویی",
    image: "/image-category2.webp",
    link: "/services/service11",
  },
  {
    name: "سرویس صوتی",
    image: "/image-category3.webp",
    link: "/services/service10",
  },
  {
    name: "سرویس آموزشی",
    image: "/image-category4.webp",
    link: "/services/service9",
  },
];

export default function Services() {
  return (
    <section className="flex w-full flex-col items-center justify-center my-15 gap-6 px-3 py-0 sm:px-4 lg:px-6">
      <div className="grid w-full max-w-6xl grid-cols-2 gap-3 sm:gap-4">
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.link}
            className="group relative aspect-2/1 overflow-hidden rounded-xl bg-white transition duration-300 hover:-translate-y-1"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 600px"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
