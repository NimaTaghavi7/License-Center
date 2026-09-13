"use client";

import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "نحوه تغییر کشور اپل آیدی و ریجن آیفون (در ایران 2025)",
    date: "چهارشنبه، ۲۶ آذر ۱۴۰۴",
    image: "/blog-post-1.webp",
    href: "/blog/how-to-change-country-in-apple-id-account",
  },
  {
    title: "آموزش اضافه کردن اندیکاتور به تریدینگ ویو (در 3 مرحله)",
    date: "شنبه، ۲۲ آذر ۱۴۰۴",
    image: "/blog-post-2.webp",
    href: "/blog/how-to-add-indicators-to-charts-in-trading-view",
  },
  {
    title: "حل مشکل کار نکردن Alight Motion (خطای 3565)",
    date: "یک‌شنبه، ۲ آذر ۱۴۰۴",
    image: "/blog-post-3.webp",
    href: "/blog/how-to-fix-error-3565-in-alight-motion",
  },
];

function BlogCard({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <article className="group min-w-0">
      <Link href={post.href} className="block">
        <div className="relative w-full">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
              className="object-cover "
            />
          </div>

          <div className="relative z-10 -mt-13 ml-3 w-[60%] rounded-md bg-white px-2.5 py-2.5 shadow-md sm:-mt-16 sm:ml-4 sm:px-3.5 sm:py-3">
            <h3 className="line-clamp-2 text-[11px] font-bold leading-4.5 text-gray-900 transition-colors duration-200 group-hover:text-[#d22c4e] sm:text-xs sm:leading-5">
              {post.title}
            </h3>

            <p className="mt-1.5 text-[9px] text-gray-400 sm:text-[10px]">
              {post.date}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function BlogPosts() {
  return (
    <section
      dir="rtl"
      className="mx-auto w-full max-w-300 px-3 pb-7 sm:px-4 sm:pb-9 lg:px-5 lg:pb-10"
    >
      <div className="mx-auto w-full max-w-300">
        <div className="mb-4 flex items-center justify-between sm:mb-5">
          <h2 className="text-base font-bold text-gray-900 sm:text-lg lg:text-xl">
            مطالب وبلاگ
          </h2>

          <Link
            href="/blog"
            className="group flex items-center gap-1.5 text-xs font-bold text-gray-500 transition-colors duration-200 hover:text-[#d22c4e] sm:text-sm"
          >
            مشاهده همه
            <span
              aria-hidden="true"
              className="text-sm transition-transform duration-200 group-hover:-translate-x-1"
            >
              ←
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {blogPosts.map((post) => (
            <BlogCard key={post.href} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
