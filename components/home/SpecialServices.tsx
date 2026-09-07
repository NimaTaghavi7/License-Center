"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

export default function CategoryServices() {
  const [current, setCurrent] = useState(
    categories.map((category) => category.products.length),
  );

  const [visibleCount, setVisibleCount] = useState(4);

  const [transitionEnabled, setTransitionEnabled] = useState(
    categories.map(() => true),
  );

  const [dragging, setDragging] = useState(categories.map(() => false));

  const [dragOffset, setDragOffset] = useState(categories.map(() => 0));

  const dragStartX = useRef(categories.map(() => 0));

  const dragDistance = useRef(categories.map(() => 0));

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 768) {
        setVisibleCount(2);
      } else if (width < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  useEffect(() => {
    setTransitionEnabled(categories.map(() => false));

    setCurrent(categories.map((category) => category.products.length));

    setDragging(categories.map(() => false));

    setDragOffset(categories.map(() => 0));

    const timer = setTimeout(() => {
      setTransitionEnabled(categories.map(() => true));
    }, 50);

    return () => clearTimeout(timer);
  }, [visibleCount]);

  const next = (categoryIndex: number) => {
    if (dragging[categoryIndex]) return;

    setTransitionEnabled((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = true;

      return nextState;
    });

    setCurrent((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] += 1;

      return nextState;
    });
  };

  const previous = (categoryIndex: number) => {
    if (dragging[categoryIndex]) return;

    setTransitionEnabled((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = true;

      return nextState;
    });

    setCurrent((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] -= 1;

      return nextState;
    });
  };

  const handleTransitionEnd = (categoryIndex: number) => {
    const length = categories[categoryIndex].products.length;

    const position = current[categoryIndex];

    if (position >= length * 2) {
      setTransitionEnabled((prev) => {
        const nextState = [...prev];

        nextState[categoryIndex] = false;

        return nextState;
      });

      setCurrent((prev) => {
        const nextState = [...prev];

        nextState[categoryIndex] = position - length;

        return nextState;
      });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled((prev) => {
            const nextState = [...prev];

            nextState[categoryIndex] = true;

            return nextState;
          });
        });
      });

      return;
    }

    if (position < length) {
      setTransitionEnabled((prev) => {
        const nextState = [...prev];

        nextState[categoryIndex] = false;

        return nextState;
      });

      setCurrent((prev) => {
        const nextState = [...prev];

        nextState[categoryIndex] = position + length;

        return nextState;
      });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled((prev) => {
            const nextState = [...prev];

            nextState[categoryIndex] = true;

            return nextState;
          });
        });
      });
    }
  };

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
    categoryIndex: number,
  ) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    setDragging((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = true;

      return nextState;
    });

    setTransitionEnabled((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = false;

      return nextState;
    });

    dragStartX.current[categoryIndex] = event.clientX;

    dragDistance.current[categoryIndex] = 0;

    setDragOffset((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = 0;

      return nextState;
    });

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
    categoryIndex: number,
  ) => {
    if (!dragging[categoryIndex]) return;

    const difference = event.clientX - dragStartX.current[categoryIndex];

    dragDistance.current[categoryIndex] = Math.abs(difference);

    setDragOffset((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = difference;

      return nextState;
    });
  };

  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>,
    categoryIndex: number,
  ) => {
    if (!dragging[categoryIndex]) return;

    const difference = event.clientX - dragStartX.current[categoryIndex];

    const distance = Math.abs(difference);

    setDragging((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = false;

      return nextState;
    });

    setDragOffset((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = 0;

      return nextState;
    });

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (distance < 50) {
      setTransitionEnabled((prev) => {
        const nextState = [...prev];

        nextState[categoryIndex] = true;

        return nextState;
      });

      return;
    }

    if (difference > 0) {
      setTransitionEnabled((prev) => {
        const nextState = [...prev];

        nextState[categoryIndex] = true;

        return nextState;
      });

      setCurrent((prev) => {
        const nextState = [...prev];

        nextState[categoryIndex] -= 1;

        return nextState;
      });

      return;
    }

    setTransitionEnabled((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = true;

      return nextState;
    });

    setCurrent((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] += 1;

      return nextState;
    });
  };

  const handlePointerCancel = (
    event: React.PointerEvent<HTMLDivElement>,
    categoryIndex: number,
  ) => {
    setDragging((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = false;

      return nextState;
    });

    setDragOffset((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = 0;

      return nextState;
    });

    setTransitionEnabled((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = true;

      return nextState;
    });

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleProductClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    categoryIndex: number,
  ) => {
    if (dragDistance.current[categoryIndex] > 10) {
      event.preventDefault();

      dragDistance.current[categoryIndex] = 0;
    }
  };

  const gap = 12;

  const cardWidth = `calc( 
    (100% - ${(visibleCount - 1) * gap}px) 
    / ${visibleCount} 
  )`;

  const step = `calc( 
    (100% - ${(visibleCount - 1) * gap}px) 
    / ${visibleCount} 
    + ${gap}px 
  )`;

  return (
    <section
      dir="rtl"
      className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-3 sm:gap-14 sm:px-4 md:gap-16 md:px-6 lg:px-8"
    >
      {categories.map((category, categoryIndex) => {
        const position = current[categoryIndex];

        const loopProducts = [
          ...category.products,
          ...category.products,
          ...category.products,
        ];

        return (
          <div key={category.title} className="flex w-full flex-col gap-5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-sans text-lg font-bold sm:text-xl md:text-2xl">
                {category.title}
              </h2>

              <Link
                href={category.link}
                className="shrink-0 text-sm font-bold text-[#d22c4e] transition-opacity duration-200 hover:opacity-70"
              >
                مشاهده همه
              </Link>
            </div>

            <div className="flex w-full items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => next(categoryIndex)}
                aria-label="محصول بعدی"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d22c4e] text-white transition-all duration-200 hover:scale-105 hover:opacity-80 active:scale-95 sm:h-10 sm:w-10 md:h-11 md:w-11"
              >
                ❮
              </button>

              <div
                className="min-w-0 flex-1 overflow-hidden"
                style={{
                  touchAction: "pan-y",
                }}
              >
                <div
                  dir="ltr"
                  onPointerDown={(event) =>
                    handlePointerDown(event, categoryIndex)
                  }
                  onPointerMove={(event) =>
                    handlePointerMove(event, categoryIndex)
                  }
                  onPointerUp={(event) => handlePointerUp(event, categoryIndex)}
                  onPointerCancel={(event) =>
                    handlePointerCancel(event, categoryIndex)
                  }
                  onTransitionEnd={() => handleTransitionEnd(categoryIndex)}
                  className={`flex gap-3 ${
                    transitionEnabled[categoryIndex] && !dragging[categoryIndex]
                      ? "transition-transform duration-500 ease-out"
                      : ""
                  }`}
                  style={{
                    transform: `translate3d( 
                        calc( 
                          -${position} * ${step} 
                          + ${dragOffset[categoryIndex]}px 
                        ), 
                        0, 
                        0 
                      )`,
                    cursor: dragging[categoryIndex] ? "grabbing" : "grab",
                    userSelect: "none",
                    willChange: "transform",
                  }}
                >
                  {loopProducts.map((product, index) => (
                    <Link
                      key={`${product.name}-${index}`}
                      href={product.link}
                      dir="rtl"
                      draggable={false}
                      onClick={(event) =>
                        handleProductClick(event, categoryIndex)
                      }
                      style={{
                        flex: `0 0 ${cardWidth}`,
                      }}
                      className="group relative flex min-h-70 flex-col items-center rounded-xl border border-gray-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <span className="absolute right-3 top-3 z-10 rounded-full bg-[#d22c4e] px-2 py-1 text-xs text-white">
                        {product.discount}
                      </span>

                      <div className="relative h-40 w-full sm:h-44">
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

                      <h3 className="mt-3 line-clamp-2 text-center text-sm font-bold leading-6">
                        {product.name}
                      </h3>

                      <div className="mt-auto flex flex-col items-center">
                        <p className="mt-3 text-sm text-gray-400 line-through">
                          {product.oldPrice} تومان
                        </p>

                        <p className="mt-1 text-lg font-bold">
                          {product.price} تومان
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => previous(categoryIndex)}
                aria-label="محصول قبلی"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d22c4e] text-white transition-all duration-200 hover:scale-105 hover:opacity-80 active:scale-95 sm:h-10 sm:w-10 md:h-11 md:w-11"
              >
                ❯
              </button>
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
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
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
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </Link>
            )}
          </div>
        );
      })}
    </section>
  );
}
