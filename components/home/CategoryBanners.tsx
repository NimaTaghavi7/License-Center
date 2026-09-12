"use client";

import Image from "next/image";
import Link from "next/link";

import { categories } from "@/data/categories";

const categoryCards = [
  {
    categoryId: "currency",
    image: "/image-category1.webp",
  },
  {
    categoryId: "video",
    image: "/image-category2.webp",
  },
  {
    categoryId: "audio",
    image: "/image-category3.webp",
  },
  {
    categoryId: "education",
    image: "/image-category4.webp",
  },
];

export default function Category() {
  return (
    <section className="flex w-full flex-col items-center justify-center my-15 gap-6 px-3 py-0 sm:px-4 lg:px-6">
      <div className="grid w-full max-w-6xl grid-cols-2 gap-3 sm:gap-4">
        {categoryCards.map((item) => {
          const category = categories.find(
            (category) => category.id === item.categoryId
          );

          if (!category) return null;

          return (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative aspect-2/1 overflow-hidden rounded-xl bg-white transition duration-300 hover:-translate-y-1"
            >
              <Image
                src={item.image}
                alt={category.name}
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