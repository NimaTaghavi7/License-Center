"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "خرید اکانت ChatGPT Plus 4 و ChatGPT 5 (شارژ آنی)",
    image: "/image-products1.webp",
    hoverImage: "/image-products1h.webp",
    oldPrice: "209,000",
    price: "199,000",
    link: "/services/service12",
    discount: "5%",
  },
  {
    name: "سرویس ویدیویی",
    image: "/image-products2.webp",
    hoverImage: "/image-products2h.webp",
    oldPrice: "209,000",
    price: "199,000",
    link: "/services/service11",
    discount: "5%",
  },
  {
    name: "سرویس صوتی",
    image: "/image-products3.webp",
    hoverImage: "/image-products3h.webp",
    oldPrice: "209,000",
    price: "199,000",
    link: "/services/service10",
    discount: "5%",
  },
  {
    name: "سرویس آموزشی",
    image: "/image-products4.webp",
    hoverImage: "/image-products4h.webp",
    oldPrice: "209,000",
    price: "199,000",
    link: "/services/service9",
    discount: "5%",
  },
];

export default function Products() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-6 px-3 sm:px-4 lg:px-6 py-0">
      
  
      <div className="mt-8 sm:mt-10 lg:mt-12 mb-6 flex flex-col items-center justify-center">
        <div className="mb-4 h-10 w-px rounded-full bg-black"></div>

        <h2 className="font-sans text-2xl font-bold">
          پرفروش های این ماه
        </h2>
      </div>


      <div className="grid w-full max-w-6xl grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.link}
            className="group relative flex min-h-70 sm:min-h-75 flex-col items-center rounded-xl bg-white p-3 sm:p-4"
          >
      
            <span className="absolute right-3 sm:right-6 lg:right-10 top-4 sm:top-5 lg:top-7 z-10 rounded-full bg-[#d22c4e] px-2 py-1 text-sm text-white">
              {product.discount}
            </span>

         
            <div className="relative h-44 sm:h-52 lg:h-64 w-full">
              
           
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-contain transition-opacity duration-300 group-hover:opacity-0"
              />

             
              <Image
                src={product.hoverImage}
                alt={product.name}
                fill
                className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

            </div>

     
            <span className="mt-3 text-center font-sans text-sm font-bold text-black">
              {product.name}
            </span>

        
            <div className="mt-3 text-center">
              <p className="mt-2 text-sm text-gray-400 line-through">
                {product.oldPrice} تومان
              </p>

              <p className="text-lg font-bold">
                {product.price} تومان
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
