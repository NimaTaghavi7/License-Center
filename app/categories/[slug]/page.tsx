import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { categories } from "@/data/categories";
import { products } from "@/data/products";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const category = categories.find((category) => category.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((product) =>
    product.categoryIds.includes(category.id),
  );

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <header className="mb-8 border-b border-gray-100 pb-6 sm:mb-10 sm:pb-8">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gray-50 sm:h-20 sm:w-20">
              <Image
                src={category.image}
                alt={category.name}
                width={80}
                height={80}
                className="h-12 w-12 object-contain sm:h-16 sm:w-16"
              />
            </div>

            <div>
              <p className="mb-1 text-xs font-medium text-gray-400 sm:text-sm">
                دسته‌بندی محصولات
              </p>

              <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
                {category.name}
              </h1>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                {categoryProducts.length} محصول
              </p>
            </div>
          </div>
        </header>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:gap-6">
            {categoryProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)]"
              >
                {product.discount !== undefined && (
                  <span className="absolute right-3 top-3 z-20 rounded-lg bg-red-500 px-2.5 py-1 text-xs font-bold text-white">
                    {product.discount}٪
                  </span>
                )}

                <div className="relative aspect-square w-full overflow-hidden bg-gray-50/70 p-4 sm:p-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain p-3 transition-all duration-500 group-hover:scale-105 group-hover:opacity-0"
                  />

                  {product.hoverImage && (
                    <Image
                      src={product.hoverImage}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain p-3 opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-3 sm:p-4">
                  <h2 className="line-clamp-2 min-h-10 text-right text-sm font-semibold leading-5 text-gray-900 transition-colors group-hover:text-gray-700 sm:text-[15px]">
                    {product.name}
                  </h2>

                  <div className="mt-auto pt-4">
                    {product.oldPrice !== undefined && (
                      <p className="mb-1 text-xs text-gray-400 line-through sm:text-sm">
                        {product.oldPrice.toLocaleString("fa-IR")} تومان
                      </p>
                    )}

                    {product.price !== undefined && (
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-bold text-gray-900 sm:text-base">
                          {product.price.toLocaleString("fa-IR")} تومان
                        </p>

                        <span className="text-xs font-medium text-gray-400 transition-colors group-hover:text-gray-700">
                          مشاهده
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-6">
            <p className="text-center text-sm font-medium text-gray-500 sm:text-base">
              محصولی در این دسته‌بندی وجود ندارد.
            </p>

            <Link
              href="/"
              className="mt-4 text-sm font-semibold text-gray-900 underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              بازگشت به فروشگاه
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
