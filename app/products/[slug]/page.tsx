import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { products } from "@/data/products";
import { categories } from "@/data/categories";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  const productCategories = categories.filter((category) =>
    product.categoryIds.includes(category.id),
  );

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#F8F8F8] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 flex items-center gap-2 text-xs text-[#8A8A8A] sm:mb-8 sm:text-sm">
          <Link href="/" className="transition-colors hover:text-[#181818]">
            خانه
          </Link>

          <span className="text-[#C4C4C4]">/</span>

          <span className="truncate text-[#555]">{product.name}</span>
        </div>

        <section className="overflow-hidden rounded-3xl border border-[#E7E7E7] bg-white">
          <div className="grid lg:grid-cols-2">
            <div className="relative flex min-h-97.5 items-center justify-center border-b border-[#EAEAEA] bg-[#FAFAFA] p-8 sm:min-h-130 sm:p-12 lg:min-h-162.5 lg:border-b-0 lg:border-l lg:p-16">
              {product.discount !== undefined && (
                <span className="absolute right-5 top-5 z-10 rounded-full bg-[#E53935] px-3.5 py-1.5 text-xs font-bold text-white sm:right-7 sm:top-7">
                  {product.discount}% تخفیف
                </span>
              )}

              <div className="relative h-75 w-full max-w-130 sm:h-107.5 lg:h-125">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12 xl:p-16">
              {productCategories.length > 0 && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {productCategories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/categories/${category.slug}`}
                      className="rounded-full bg-[#F2F2F2] px-3.5 py-1.5 text-xs font-medium text-[#666] transition-colors hover:bg-[#181818] hover:text-white"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}

              <h1 className="max-w-xl text-2xl font-bold leading-[1.8] text-[#181818] sm:text-3xl lg:text-[36px]">
                {product.name}
              </h1>

              <div className="mt-8 border-y border-[#EAEAEA] py-7">
                {product.oldPrice !== undefined && (
                  <div className="flex items-center gap-3">
                    {product.discount !== undefined && (
                      <span className="rounded-md bg-[#FFF0F0] px-2 py-1 text-xs font-bold text-[#E53935]">
                        {product.discount}٪
                      </span>
                    )}

                    <span className="text-sm text-[#999] line-through">
                      {product.oldPrice.toLocaleString("fa-IR")} تومان
                    </span>
                  </div>
                )}

                {product.price !== undefined && (
                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-3xl font-extrabold tracking-tight text-[#111] sm:text-4xl">
                      {product.price.toLocaleString("fa-IR")}
                    </span>

                    <span className="mb-1 text-sm text-[#666]">تومان</span>
                  </div>
                )}
              </div>

              <div className="mt-7">
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-xl bg-[#181818] px-6 py-4 text-sm font-bold text-white transition-all duration-200 hover:bg-black active:scale-[0.99] sm:text-base"
                >
                  افزودن به سبد خرید
                </button>
              </div>

              <div className="mt-8 grid grid-cols-3 divide-x divide-x-reverse divide-[#EAEAEA] rounded-2xl border border-[#E8E8E8] bg-[#FCFCFC]">
                <div className="px-3 py-5 text-center">
                  <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm shadow-sm">
                    ✓
                  </div>

                  <p className="text-xs font-semibold text-[#333]">خرید آسان</p>

                  <p className="mt-1 hidden text-[10px] text-[#999] sm:block">
                    ساده و سریع
                  </p>
                </div>

                <div className="px-3 py-5 text-center">
                  <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm shadow-sm">
                    ✓
                  </div>

                  <p className="text-xs font-semibold text-[#333]">
                    پرداخت امن
                  </p>

                  <p className="mt-1 hidden text-[10px] text-[#999] sm:block">
                    امنیت بالا
                  </p>
                </div>

                <div className="px-3 py-5 text-center">
                  <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm shadow-sm">
                    ✓
                  </div>

                  <p className="text-xs font-semibold text-[#333]">پشتیبانی</p>

                  <p className="mt-1 hidden text-[10px] text-[#999] sm:block">
                    همراه شما
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#E7E7E7] bg-[#E7E7E7] sm:grid-cols-4">
          <div className="bg-white px-4 py-5 text-center">
            <p className="text-xs font-bold text-[#222]">تضمین کیفیت</p>
            <p className="mt-1 text-[10px] text-[#999]">محصولات باکیفیت</p>
          </div>

          <div className="bg-white px-4 py-5 text-center">
            <p className="text-xs font-bold text-[#222]">پرداخت امن</p>
            <p className="mt-1 text-[10px] text-[#999]">تراکنش مطمئن</p>
          </div>

          <div className="bg-white px-4 py-5 text-center">
            <p className="text-xs font-bold text-[#222]">پشتیبانی</p>
            <p className="mt-1 text-[10px] text-[#999]">پاسخگویی سریع</p>
          </div>

          <div className="bg-white px-4 py-5 text-center">
            <p className="text-xs font-bold text-[#222]">خرید آنلاین</p>
            <p className="mt-1 text-[10px] text-[#999]">تجربه‌ای ساده</p>
          </div>
        </div>
      </div>
    </main>
  );
}
