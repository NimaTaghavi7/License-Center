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

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find(
    (product) => product.slug === slug
  );

  if (!product) {
    notFound();
  }

  const productCategories = categories.filter((category) =>
    product.categoryIds.includes(category.id)
  );

  return (
    <main className="min-h-screen bg-[#FAFCF8] px-3 py-10 sm:px-4 lg:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-8 rounded-2xl bg-white p-5 sm:p-8 lg:grid-cols-2 lg:p-10">
          <div className="relative flex min-h-80 items-center justify-center">
            {product.discount !== undefined && (
              <span className="absolute right-2 top-2 z-10 rounded-full bg-[#d22c4e] px-3 py-1 text-sm text-white">
                {product.discount}%
              </span>
            )}

            <div className="relative h-72 w-full sm:h-96">
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

          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-[#1E2A22] sm:text-3xl">
              {product.name}
            </h1>

            {productCategories.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {productCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/categories/${category.slug}`}
                    className="rounded-full bg-[#F4F7F2] px-3 py-1 text-sm text-[#2F6B45] transition hover:bg-[#7FAF82] hover:text-white"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}

            <div className="mt-8">
              {product.oldPrice !== undefined && (
                <p className="text-base text-gray-400 line-through">
                  {product.oldPrice.toLocaleString("fa-IR")} تومان
                </p>
              )}

              {product.price !== undefined && (
                <p className="mt-1 text-2xl font-bold text-[#1E2A22]">
                  {product.price.toLocaleString("fa-IR")} تومان
                </p>
              )}
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-xl bg-[#2F6B45] px-6 py-3 text-base font-bold text-white transition hover:bg-[#245638] sm:w-fit"
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

