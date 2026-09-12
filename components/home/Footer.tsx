import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer dir="rtl" className="w-full text-white">
      <nav className="w-full bg-[#171723]">
        <div className="mx-auto flex min-h-12 w-full max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            <li>
              <Link
                href="/"
                className="text-sm font-bold transition-colors hover:text-[#ef394e]"
              >
                صفحه نخست
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className="text-sm font-bold transition-colors hover:text-[#ef394e]"
              >
                بلاگ
              </Link>
            </li>

            <li>
              <Link
                href="/terms"
                className="text-sm font-bold transition-colors hover:text-[#ef394e]"
              >
                قوانین
              </Link>
            </li>

            <li>
              <Link
                href="/about-us"
                className="text-sm font-bold transition-colors hover:text-[#ef394e]"
              >
                درباره ما
              </Link>
            </li>

            <li>
              <Link
                href="/contact-us"
                className="text-sm font-bold transition-colors hover:text-[#ef394e]"
              >
                ارتباط با ما
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="w-full bg-[#0c0c15]">
        <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col items-center gap-4 lg:items-start">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/licensemarket/"
                  target="_blank"
                  rel="nofollow noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-[#171723] hover:text-[#ef394e]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                <a
                  href="https://t.me/licensemarket/"
                  target="_blank"
                  rel="nofollow noreferrer"
                  aria-label="Telegram"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-[#171723] hover:text-[#ef394e]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M21 3 3.5 10.2c-.7.3-.7 1.3 0 1.6l4.8 1.7 1.7 5.2c.2.7 1.1.8 1.5.2l2.7-3.7 4.4 3.2c.6.4 1.4.1 1.5-.6L21.8 4c.1-.7-.4-1.2-.8-1Z" />
                    <path d="m8.3 13.5 8.8-7.2-6.6 8.2" />
                  </svg>
                </a>

                <a
                  href="https://twitter.com/LicenseMarketIR"
                  target="_blank"
                  rel="nofollow noreferrer"
                  aria-label="X"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-[#171723] hover:text-[#ef394e]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.37l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.8h1.73L8.29 4.1H6.43L17.8 19.8Z" />
                  </svg>
                </a>

                <a
                  href="tel:02191094400"
                  className="mr-2 flex items-center gap-2 text-sm font-bold transition-colors hover:text-[#ef394e]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z" />
                  </svg>

                  <span>۰۲۱۹۱۰۹۴۴۰۰</span>
                </a>
              </div>

              <p className="max-w-2xl text-center text-xs font-medium leading-7 text-white/60 lg:text-right">
                © ۱۴۰۵ - تمامی حقوق تجاری و معنوی این سایت برای برند{" "}
                <span className="font-bold text-white/80">«لایسنس مارکت»</span>{" "}
                محفوظ بوده و هیچ گونه شعبه دیگری ندارد.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <span className="mb-3 text-sm font-bold">
                مجوز ها و نماد های فعالیت
              </span>

              <div className="flex items-center gap-3">
                <div className="flex h-28 w-24 items-center justify-center rounded-lg bg-white p-1">
                  <Image
                    src="/enamad.png"
                    alt="نماد اعتماد"
                    width={110}
                    height={110}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex h-28 w-24 items-center justify-center rounded-lg bg-white p-1">
                  <Image
                    src="/samandehi.png"
                    alt="نماد ساماندهی"
                    width={110}
                    height={110}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
