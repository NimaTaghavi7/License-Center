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

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  const category = categories.find(
    (category) => category.slug === slug
  );

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((product) =>
    product.categoryIds.includes(category.id)
  );

  return (
    <main className="min-h-screen bg-[#FAFCF8] px-3 py-10 sm:px-4 lg:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex flex-col items-center">
          <Image
            src={category.image}
            alt={category.name}
            width={120}
            height={120}
            className="mb-4 h-24 w-24 object-contain"
          />

          <h1 className="text-center text-2xl font-bold text-[#1E2A22]">
            {category.name}
          </h1>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {categoryProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group relative flex min-h-70 flex-col items-center rounded-xl bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-md sm:min-h-75 sm:p-4"
              >
                {product.discount !== undefined && (
                  <span className="absolute right-3 top-4 z-10 rounded-full bg-[#d22c4e] px-2 py-1 text-sm text-white">
                    {product.discount}%
                  </span>
                )}

                <div className="relative h-44 w-full sm:h-52">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />

                  {product.hoverImage && (
                    <Image
                      src={product.hoverImage}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  )}
                </div>

                <span className="mt-3 text-center text-sm font-bold text-black">
                  {product.name}
                </span>

                <div className="mt-3 text-center">
                  {product.oldPrice !== undefined && (
                    <p className="text-sm text-gray-400 line-through">
                      {product.oldPrice.toLocaleString("fa-IR")} تومان
                    </p>
                  )}

                  {product.price !== undefined && (
                    <p className="text-lg font-bold text-[#1E2A22]">
                      {product.price.toLocaleString("fa-IR")} تومان
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex min-h-50 items-center justify-center rounded-xl bg-white">
            <p className="text-center text-gray-500">
              محصولی در این دسته‌بندی وجود ندارد.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

