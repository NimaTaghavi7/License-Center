export type Category = {
  id: string;
  name: string;
  slug: string;
  image: string;
  kind: "category" | "request";
  showInCategoryList?: boolean;
};

export const categories: Category[] = [
  {
    id: "currency",
    name: "کارت اعتباری ارزی",
    slug: "currency",
    image: "/image-service12.webp",
    kind: "category",
  },
  {
    id: "video",
    name: "سرویس ویدیویی",
    slug: "video",
    image: "/image-service11.webp",
    kind: "category",
  },
  {
    id: "audio",
    name: "سرویس صوتی",
    slug: "audio",
    image: "/image-service10.webp",
    kind: "category",
  },
  {
    id: "education",
    name: "سرویس آموزشی",
    slug: "education",
    image: "/image-service9.webp",
    kind: "category",
  },
  {
    id: "design",
    name: "گرافیک، طراحی و تدوین",
    slug: "design",
    image: "/image-service8.webp",
    kind: "category",
  },
  {
    id: "health",
    name: "سلامت و تناسب اندام",
    slug: "health",
    image: "/image-service7.webp",
    kind: "category",
  },
  {
    id: "books",
    name: "کتاب و کتابخوانی",
    slug: "books",
    image: "/image-service6.webp",
    kind: "category",
  },
  {
    id: "gaming",
    name: "سرگرمی و گیمینگ",
    slug: "gaming",
    image: "/image-service5.webp",
    kind: "category",
  },
  {
    id: "cloud",
    name: "فضای ابری",
    slug: "cloud",
    image: "/image-service4.webp",
    kind: "category",
  },
  {
    id: "social",
    name: "شبکه های اجتماعی و ارتباطات",
    slug: "social",
    image: "/image-service3.webp",
    kind: "category",
  },
  {
    id: "in-app",
    name: "پرداخت درون برنامه ای",
    slug: "in-app",
    image: "/image-service2.webp",
    kind: "category",
  },
  {
    id: "request",
    name: "درخواست محصول جدید",
    slug: "request",
    image: "/image-service0.webp",
    kind: "request",
  },
  {
  id: "utility",
  name: "سرویس های کاربردی و ویژه",
  slug: "utility",
  image: "/image-service13.webp",
  kind: "category",
  showInCategoryList: false,
}
];