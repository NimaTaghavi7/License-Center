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
    link: "/services/service11"
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
  {
    name: "گرافیک،طراحی و تدوین",
    image: "/image-service8.webp",
    link: "/services/service8",
  },
  {
    name: "سلامت و تناسب اندام",
    image: "/image-service7.webp",
    link: "/services/service7",
  },
  {
    name:"کتاب و کتابخوانی",
    image: "/image-service6.webp",
    link: "/services/service6",
  },
  {
    name: "سرگرمی و گیمینگ",
    image: "/image-service5.webp",
    link: "/services/service5",
  },
  {
    name: "فضای ابری",
    image: "/image-service4.webp",
    link: "/services/service4",
  },
  {
    name: "شبکه های اجتماعی و ارتباطات",
    image: "/image-service3.webp",
    link: "/services/service3",
  },
  {
    name: "پرداخت درون برنامه ای",
    image: "/image-service2.webp",
    link: "/services/service2",
  },
  {
    name: "درخواست محصول جدید",
    image: "/image-service0.webp",
    link: "/services/service1",
  },
];

export default function Services() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 w-full px-3 sm:px-4 lg:px-6 py-0">
      
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="mb-4 h-10 w-px rounded-full bg-black"></div>

        <h2 className=" text-2xl font-bold">
          خدمات لایسنس‌مارکت
        </h2>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 w-full max-w-6xl gap-3">
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

            <span className="mt-3  text-center text-sm font-bold text-black">
              {product.name}
            </span>
          </Link>
        ))}
      </div>

    </section>
  );
}

