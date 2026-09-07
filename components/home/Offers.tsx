"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  {
    name: "خرید اکانت گرامرلی Grammarly با ایمیل شما (با ۹۱% تخفیف)",
    image: "/offer1.webp",
    hoverimage: "/offer1h.webp",
    oldPrice: "۱٫۱۹۹٫۰۰۰",
    price: "۱۹۹٫۰۰۰",
    discount: " ۹۱%",
    link: "/products/11",
  },
  {
    name: "خرید دوره آموزشی از یودمی Udemy با اکانت شما با (با ۹۱% تخفیف)",
    image: "/offer2.webp",
    hoverimage: "/offer2h.webp",
    oldPrice: "۶٫۵۹۹٫۰۰۰",
    price: "۴۹۹٫۰۰۰",
    discount: "17%",
    link: "/products/12",
  },
  {
    name: "YouTube Premium",
    image: "/offer3.webp",
    hoverimage: "/offer3h.webp",
    oldPrice: "200,000",
    price: "160,000",
    discount: "20%",
    link: "/products/13",
  },
  {
    name: "ChatGPT Plus",
    image: "/offer4.webp",
    hoverimage: "/offer4h.webp",
    oldPrice: "500,000",
    price: "400,000",
    discount: "20%",
    link: "/products/14",
  },
  {
    name: "YouTube Premium3",
    image: "/products/youtube.jpg",
    hoverimage: "/products/youtube-hover.jpg",
    oldPrice: "200,000",
    price: "160,000",
    discount: "20%",
    link: "/products/15",
  },
  {
    name: "ChatGPT Plus3",
    image: "/products/chatgpt.jpg",
    hoverimage: "/products/chatgpt-hover.jpg",
    oldPrice: "500,000",
    price: "400,000",
    discount: "20%",
    link: "/products/16",
  },
  {
    name: "Netflix Premium4",
    image: "/products/netflix.jpg",
    hoverimage: "/products/netflix-hover.jpg",
    oldPrice: "209,000",
    price: "199,000",
    discount: "5%",
    link: "/products/17",
  },
  {
    name: "YouTube Premium32",
    image: "/products/youtube.jpg",
    hoverimage: "/products/youtube-hover.jpg",
    oldPrice: "200,000",
    price: "160,000",
    discount: "20%",
    link: "/products/18",
  },
  {
    name: "ChatGPT Plus30",
    image: "/products/chatgpt.jpg",
    hoverimage: "/products/chatgpt-hover.jpg",
    oldPrice: "500,000",
    price: "400,000",
    discount: "20%",
    link: "/products/19",
  },
  {
    name: "Netflix Premium40",
    image: "/products/netflix.jpg",
    hoverimage: "/products/netflix-hover.jpg",
    oldPrice: "209,000",
    price: "199,000",
    discount: "5%",
    link: "/products/20",
  },
];

export default function Offers() {
  const [start, setStart] = useState(0);

  const next = () => {
    if (start < products.length - 3) {
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
      className="mx-auto w-full  max-w-6xl mb-8 sm:mb-10 lg:mb-12 px-3 sm:px-4 lg:px-6"
    >
      <div className="flex flex-col sm:flex-row bg-[#d22c4e] p-3 sm:p-4 gap-3 sm:gap-4 lg:gap-5 rounded-2xl overflow-hidden">

        <div className="flex flex-row sm:flex-col justify-between sm:justify-evenly items-center p-3 sm:p-5 lg:p-10 my-0 sm:my-2 lg:my-4 gap-4 sm:gap-5 lg:gap-6 font-sans text-center text-white min-w-0 sm:min-w-[180px]">

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            پیشنهاد <br />
            شگفت‌ <br />
            انگیز
          </h2>

          <img
            className="w-7 h-7"
            src="percent.webp"
            alt=""
          />

          <div>
            <button
              onClick={prev}
              className="px-2 sm:px-3 text-xl"
            >
              ❮
            </button>

            <button
              onClick={next}
              className="px-2 sm:px-3 text-xl"
            >
              ❯
            </button>
          </div>

        </div>

        <div className="overflow-hidden flex-1 min-w-0">
          <div
            className="flex gap-3 transition-transform duration-500"
            style={{
              transform: `translateX(${start * 274}px)`,
            }}
          >
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.link}
                className="bg-white font-sans rounded-xl p-3 sm:p-4 min-w-[220px] sm:min-w-[250px] relative block"
              >
                <span className="bg-[#d22c4e] text-white px-1 py-1 absolute m-2.5 rounded-full text-sm z-10">
                  {product.discount}
                </span>

                <div className="relative w-full h-36 sm:h-44 lg:h-50">
                  <img
                    src={product.image}
                    className="w-full h-full object-center object-contain transition-opacity duration-300 hover:opacity-0"
                    alt={product.name}
                  />

                  {product.hoverimage && (
                    <img
                      src={product.hoverimage}
                      className="absolute inset-0 w-full h-full object-center object-contain opacity-0 transition-opacity duration-300 hover:opacity-100"
                      alt={product.name}
                    />
                  )}
                </div>

                <h3 className="mt-3 font-bold">
                  {product.name}
                </h3>

                <div className="mt-3">
                  <p className="text-gray-400 line-through text-sm mt-2">
                    {product.oldPrice} تومان
                  </p>

                  <p className="font-bold text-lg">
                    {product.price} تومان
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

