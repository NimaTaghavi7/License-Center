"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  
  const [remember, setRemember] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"error" | "success">("error");

  const showMessage = (text: string, type: "error" | "success" = "error") => {
    setMessage(text);
    setMessageType(type);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const handleEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextId: string,
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById(nextId)?.focus();
    }
  };

  const Check = () => {
    const persianName = /^[\u0600-\u06FF\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^09\d{9}$/;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+=-]{8,}$/;

    if (!firstName || !lastName) {
      showMessage("لطفاً نام و نام خانوادگی را وارد کنید.");
      return;
    }

    if (!persianName.test(firstName) || !persianName.test(lastName)) {
      showMessage("نام و نام خانوادگی باید فقط شامل حروف فارسی باشند.");
      return;
    }

    if (!age || Number(age) < 18) {
      showMessage("سن شما باید حداقل ۱۸ سال باشد.");
      return;
    }

    if (!email && !phone) {
      showMessage("لطفاً حداقل ایمیل یا شماره موبایل خود را وارد کنید.");
      return;
    }

    if (email && !emailPattern.test(email)) {
      showMessage("لطفاً یک ایمیل معتبر وارد کنید.");
      return;
    }

    if (phone && !phonePattern.test(phone)) {
      showMessage("شماره موبایل باید ۱۱ رقم باشد و با 09 شروع شود.");
      return;
    }

    if (!passwordPattern.test(password)) {
      showMessage(
        "رمز عبور باید حداقل ۸ کاراکتر و شامل حروف بزرگ، حروف کوچک و عدد باشد.",
      );
      return;
    }

    if (password !== confirmPassword) {
      showMessage("رمز عبور و تکرار رمز عبور یکسان نیستند.");
      return;
    }

    showMessage("ثبت‌نام با موفقیت انجام شد.", "success");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      {message && (
        <div
          className={`fixed top-5 right-5 z-50 rounded-lg px-5 py-3 text-sm shadow-lg ${
            messageType === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {message}
        </div>
      )}

      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Image
            src="/image1.webp"
            alt="License Center"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            ایجاد حساب کاربری
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            اطلاعات خود را برای ثبت نام وارد کنید.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="space-y-3">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                نام
              </label>

              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onKeyDown={(e) => handleEnter(e, "lastName")}
                placeholder="نام خود را وارد کنید"
                className="w-full h-11 rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                نام خانوادگی
              </label>

              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onKeyDown={(e) => handleEnter(e, "age")}
                placeholder="نام خانوادگی خود را وارد کنید"
                className="w-full h-11 rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
              />
            </div>

            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                سن
              </label>

              <input
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                onKeyDown={(e) => handleEnter(e, "email")}
                placeholder="سن خود را وارد کنید"
                min="0"
                className="w-full h-11 rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
              />
            </div>

            <div>
              <div className="flex items-center gap-1 mb-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  ایمیل
                </label>

                <div className="relative group">
                  <span className="flex items-center justify-center w-4 h-4 rounded-full border border-gray-400 text-[10px] text-gray-500 cursor-help">
                    i
                  </span>

                  <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block w-56 rounded-lg bg-gray-900 px-3 py-2 text-xs text-white shadow-lg z-50">
                    وارد کردن ایمیل یا شماره موبایل الزامی است.
                  </div>
                </div>
              </div>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => handleEnter(e, "phone")}
                placeholder="example@email.com"
                className="w-full h-11 rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                شماره موبایل
              </label>

              <input
                id="phone"
                type="tel"
                dir="ltr"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value;

                  if (/^\d*$/.test(value) && value.length <= 11) {
                    setPhone(value);
                  }
                }}
                onKeyDown={(e) => handleEnter(e, "password")}
                placeholder="09123456789"
                className="w-full h-11 rounded-xl border border-gray-300 bg-white px-4 text-sm text-left outline-none transition focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                رمز عبور
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => handleEnter(e, "confirmPassword")}
                  placeholder="رمز عبور خود را وارد کنید"
                  className="w-full h-11 rounded-xl border border-gray-300 bg-white px-4 pl-16 text-sm outline-none transition focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-500 hover:text-gray-900"
                >
                  {showPassword ? "مخفی" : "نمایش"}
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                تکرار رمز عبور
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onKeyDown={(e) => handleEnter(e, "remember")}
                  placeholder="رمز عبور را دوباره وارد کنید"
                  className="w-full h-11 rounded-xl border border-gray-300 bg-white px-4 pl-16 text-sm outline-none transition focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-500 hover:text-gray-900"
                >
                  {showConfirmPassword ? "مخفی" : "نمایش"}
                </button>
              </div>
            </div>

            <div
              id="remember"
              tabIndex={0}
              className="flex items-center gap-2 outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  document.getElementById("signupButton")?.focus();
                }
              }}
            >
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300"
              />

              <label className="text-sm text-gray-600 cursor-pointer">
                مرا به خاطر بسپار
              </label>
            </div>

            <button
              id="signupButton"
              type="button"
              onClick={Check}
              className="w-full h-11 rounded-xl bg-[#111827] text-white text-sm font-medium transition hover:bg-[#1f2937] active:scale-[0.99]"
            >
              ثبت‌نام
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>

            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-xs text-gray-400">یا</span>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500">
            قبلاً حساب کاربری دارید؟{" "}
            <Link
              href="/login"
              className="font-medium text-[#111827] hover:underline"
            >
              وارد شوید
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
