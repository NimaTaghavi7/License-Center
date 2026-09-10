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

const categories = [
  {
    title: "سرویس های کاربردی و ویژه",
    link: "/category/utility",
    products: [
      {
        name: "ChatGPT Plus",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "209,000",
        price: "199,000",
        discount: "5%",
        link: "/services/service12",
      },
      {
        name: "Grammarly Premium",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "250,000",
        price: "220,000",
        discount: "12%",
        link: "/services/service11",
      },
      {
        name: "Canva Pro",
        image: "/image-products3.webp",
        hoverImage: "/image-3.webp",
        oldPrice: "300,000",
        price: "250,000",
        discount: "17%",
        link: "/services/service10",
      },
      {
        name: "Google One",
        image: "/image-products4.webp",
        hoverImage: "/image-4.webp",
        oldPrice: "400,000",
        price: "350,000",
        discount: "12%",
        link: "/services/service9",
      },
      {
        name: "Microsoft 365",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "500,000",
        price: "450,000",
        discount: "10%",
        link: "/services/service8",
      },
      {
        name: "Notion Plus",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "250,000",
        price: "200,000",
        discount: "20%",
        link: "/services/service7",
      },
      {
        name: "Adobe Creative Cloud",
        image: "/image-products3.webp",
        hoverImage: "/image-3.webp",
        oldPrice: "600,000",
        price: "520,000",
        discount: "13%",
        link: "/services/service6",
      },
      {
        name: "Dropbox Plus",
        image: "/image-products4.webp",
        hoverImage: "/image-4.webp",
        oldPrice: "300,000",
        price: "270,000",
        discount: "10%",
        link: "/services/service5",
      },
      {
        name: "Evernote Premium",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "250,000",
        price: "210,000",
        discount: "16%",
        link: "/services/service4",
      },
      {
        name: "Perplexity Pro",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "400,000",
        price: "350,000",
        discount: "12%",
        link: "/services/service3",
      },
    ],
  },
  {
    title: "سرویس های پخش فیلم و سریال",
    link: "/category/vod",
    products: [
      {
        name: "Netflix Premium",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "300,000",
        price: "250,000",
        discount: "17%",
        link: "/services/service12",
      },
      {
        name: "YouTube Premium",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "250,000",
        price: "200,000",
        discount: "20%",
        link: "/services/service11",
      },
      {
        name: "Disney Plus",
        image: "/image-products3.webp",
        hoverImage: "/image-3.webp",
        oldPrice: "300,000",
        price: "260,000",
        discount: "13%",
        link: "/services/service10",
      },
      {
        name: "Apple TV Plus",
        image: "/image-products4.webp",
        hoverImage: "/image-4.webp",
        oldPrice: "350,000",
        price: "300,000",
        discount: "14%",
        link: "/services/service9",
      },
      {
        name: "Amazon Prime Video",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "280,000",
        price: "240,000",
        discount: "14%",
        link: "/services/service8",
      },
      {
        name: "HBO Max",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "300,000",
        price: "250,000",
        discount: "17%",
        link: "/services/service7",
      },
      {
        name: "Paramount Plus",
        image: "/image-products3.webp",
        hoverImage: "/image-3.webp",
        oldPrice: "280,000",
        price: "230,000",
        discount: "18%",
        link: "/services/service6",
      },
      {
        name: "Crunchyroll",
        image: "/image-products4.webp",
        hoverImage: "/image-4.webp",
        oldPrice: "250,000",
        price: "210,000",
        discount: "16%",
        link: "/services/service5",
      },
      {
        name: "MUBI",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "300,000",
        price: "260,000",
        discount: "13%",
        link: "/services/service4",
      },
      {
        name: "Peacock",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "270,000",
        price: "220,000",
        discount: "19%",
        link: "/services/service3",
      },
    ],
  },
  {
    title: "سرویس های پخش موسیقی",
    link: "/category/podcast-and-internet-radio",
    products: [
      {
        name: "Spotify Premium",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "250,000",
        price: "200,000",
        discount: "20%",
        link: "/services/service12",
      },
      {
        name: "Apple Music",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "250,000",
        price: "210,000",
        discount: "16%",
        link: "/services/service11",
      },
      {
        name: "YouTube Music",
        image: "/image-products3.webp",
        hoverImage: "/image-3.webp",
        oldPrice: "250,000",
        price: "200,000",
        discount: "20%",
        link: "/services/service10",
      },
      {
        name: "Tidal",
        image: "/image-products4.webp",
        hoverImage: "/image-4.webp",
        oldPrice: "300,000",
        price: "250,000",
        discount: "17%",
        link: "/services/service9",
      },
      {
        name: "SoundCloud Go",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "250,000",
        price: "220,000",
        discount: "12%",
        link: "/services/service8",
      },
      {
        name: "Deezer Premium",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "240,000",
        price: "200,000",
        discount: "17%",
        link: "/services/service7",
      },
      {
        name: "Amazon Music",
        image: "/image-products3.webp",
        hoverImage: "/image-3.webp",
        oldPrice: "260,000",
        price: "220,000",
        discount: "15%",
        link: "/services/service6",
      },
      {
        name: "Pandora Premium",
        image: "/image-products4.webp",
        hoverImage: "/image-4.webp",
        oldPrice: "280,000",
        price: "230,000",
        discount: "18%",
        link: "/services/service5",
      },
      {
        name: "Qobuz",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "300,000",
        price: "250,000",
        discount: "17%",
        link: "/services/service4",
      },
      {
        name: "Audiomack",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "220,000",
        price: "190,000",
        discount: "14%",
        link: "/services/service3",
      },
    ],
  },
  {
    title: "سرویس های آموزشی",
    link: "/category/education",
    products: [
      {
        name: "Udemy Premium",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "300,000",
        price: "250,000",
        discount: "17%",
        link: "/services/service2",
      },
      {
        name: "Coursera Plus",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "350,000",
        price: "290,000",
        discount: "17%",
        link: "/services/service1",
      },
      {
        name: "Skillshare Premium",
        image: "/image-products3.webp",
        hoverImage: "/image-3.webp",
        oldPrice: "300,000",
        price: "250,000",
        discount: "17%",
        link: "/services/service2",
      },
      {
        name: "LinkedIn Learning",
        image: "/image-products4.webp",
        hoverImage: "/image-4.webp",
        oldPrice: "400,000",
        price: "350,000",
        discount: "12%",
        link: "/services/service1",
      },
      {
        name: "MasterClass",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "500,000",
        price: "430,000",
        discount: "14%",
        link: "/services/service2",
      },
      {
        name: "Brilliant Premium",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "300,000",
        price: "250,000",
        discount: "17%",
        link: "/services/service1",
      },
      {
        name: "DataCamp",
        image: "/image-products3.webp",
        hoverImage: "/image-3.webp",
        oldPrice: "450,000",
        price: "390,000",
        discount: "13%",
        link: "/services/service2",
      },
      {
        name: "Pluralsight",
        image: "/image-products4.webp",
        hoverImage: "/image-4.webp",
        oldPrice: "400,000",
        price: "350,000",
        discount: "12%",
        link: "/services/service1",
      },
      {
        name: "Codecademy Pro",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "350,000",
        price: "300,000",
        discount: "14%",
        link: "/services/service2",
      },
      {
        name: "Educative",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "400,000",
        price: "340,000",
        discount: "15%",
        link: "/services/service1",
      },
    ],
  },
];

function ProductCard({
  product,
}: {
  product: (typeof categories)[number]["products"][number];
}) {
  return (
    <Link
      href={product.link}
      draggable={false}
      className="group relative flex min-h-72 w-full flex-col items-center overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:p-4"
    >
      <span className="absolute right-3 top-3 z-10 rounded-full bg-[#d22c4e] px-2.5 py-1 text-[11px] font-bold text-white shadow-sm">
        {product.discount}
      </span>

      <div className="relative h-36 w-full sm:h-40 md:h-44">
        <Image
          src={product.image}
          alt={product.name}
          fill
          draggable={false}
          sizes="(max-width: 639px) 90vw, (max-width: 767px) 45vw, (max-width: 1023px) 30vw, 23vw"
          className="pointer-events-none object-contain transition-opacity duration-300 group-hover:opacity-0"
        />

        <Image
          src={product.hoverImage}
          alt={product.name}
          fill
          draggable={false}
          sizes="(max-width: 639px) 90vw, (max-width: 767px) 45vw, (max-width: 1023px) 30vw, 23vw"
          className="pointer-events-none object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      <div className="mt-2 flex w-full flex-1 flex-col">
        <h3 className="line-clamp-2 min-h-12 text-center text-sm font-bold leading-6 text-gray-800 transition-colors duration-300 group-hover:text-[#d22c4e]">
          {product.name}
        </h3>

        <div className="mt-auto border-t border-gray-100 pt-3 text-center">
          <p className="text-xs text-gray-400 line-through">
            {product.oldPrice} تومان
          </p>

          <p className="mt-1 text-lg font-extrabold tracking-tight text-gray-900">
            {product.price} تومان
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function CategoryServices() {
  return (
    <section
      dir="rtl"
      className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-3 sm:gap-14 sm:px-4 md:gap-16 md:px-6 lg:px-8"
    >
      {categories.map((category, categoryIndex) => (
        <div key={category.title} className="flex w-full flex-col gap-5">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-bold mb-4 sm:text-xl md:text-2xl">
              {category.title}
            </h2>

            <Link
              href={category.link}
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
                {category.products.map((product) => (
                  <CarouselItem
                    key={product.name}
                    className="pl-3 basis-1/2 md:basis-1/3 lg:basis-1/4"
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

          {categoryIndex === 0 && (
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
                className="h-auto w-full object-cover transition-transform mt-10 duration-500 group-hover:scale-[1.02]"
              />
            </Link>
          )}

          {categoryIndex === 2 && (
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
                className="h-auto w-full object-cover transition-transform  mt-10 duration-500 group-hover:scale-[1.02]"
              />
            </Link>
          )}
        </div>
      ))}
    </section>
  );
}
