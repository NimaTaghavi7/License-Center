"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function LoginForm() {
  const [loginType, setLoginType] = useState<"email" | "phone">("email");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"error" | "success">("error");

  const showMessage = (text: string, type: "error" | "success" = "error") => {
    setMessage(text);
    setMessageType(type);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const Check = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^09\d{9}$/;

    if (loginType === "email") {
      if (!email) {
        showMessage("لطفاً ایمیل خود را وارد کنید.");
        return;
      }

      if (!emailPattern.test(email)) {
        showMessage("لطفاً یک ایمیل معتبر وارد کنید.");
        return;
      }
    }

    if (loginType === "phone") {
      if (!phone) {
        showMessage("لطفاً شماره موبایل خود را وارد کنید.");
        return;
      }

      if (!phonePattern.test(phone)) {
        showMessage("شماره موبایل باید دقیقاً ۱۱ رقم باشد و با 09 شروع شود.");
        return;
      }
    }

    if (!password) {
      showMessage("لطفاً رمز عبور خود را وارد کنید.");
      return;
    }

    showMessage("ورود با موفقیت انجام شد.", "success");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
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

        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/image1.webp"
              alt="License Center"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>

          <h1 className="text-2xl font-bold text-[#111827]">
            ورود به حساب کاربری
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            برای ادامه وارد حساب کاربری خود شوید
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              Check();
            }}
          >
            <div className="flex gap-2 p-1 bg-gray-100 rounded-xl">
              <button
                type="button"
                onClick={() => setLoginType("email")}
                className={`flex-1 h-9 rounded-lg text-sm transition ${
                  loginType === "email"
                    ? "bg-white text-[#111827] shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                ورود با ایمیل
              </button>

              <button
                type="button"
                onClick={() => setLoginType("phone")}
                className={`flex-1 h-9 rounded-lg text-sm transition ${
                  loginType === "phone"
                    ? "bg-white text-[#111827] shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                ورود با شماره موبایل
              </button>
            </div>

            <div>
              <label
                htmlFor="login"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {loginType === "email" ? "ایمیل" : "شماره موبایل"}
              </label>

              <input
                id="login"
                type={loginType === "email" ? "email" : "tel"}
                value={loginType === "email" ? email : phone}
                onChange={(e) => {
                  if (loginType === "email") {
                    setEmail(e.target.value);
                  } else {
                    const value = e.target.value;

                    if (/^\d*$/.test(value) && value.length <= 11) {
                      setPhone(value);
                    }
                  }
                }}
                placeholder={
                  loginType === "email" ? "example@email.com" : "09123456789"
                }
                className="w-full h-11 rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  رمز عبور
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs font-medium text-[#111827] hover:underline"
                >
                  فراموشی رمز عبور؟
                </Link>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="رمز عبور خود را وارد کنید"
                  className="w-full h-11 rounded-xl border border-gray-300 bg-white px-4 pl-16 text-sm outline-none transition focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-500 hover:text-gray-900"
                >
                  {showPassword ? "مخفی کردن" : "نمایش"}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300"
              />

              <label
                htmlFor="remember"
                className="text-sm text-gray-600 cursor-pointer"
              >
                مرا به خاطر بسپار
              </label>
            </div>

            <button
              type="submit"
              className="w-full h-11 rounded-xl bg-[#111827] text-white text-sm font-medium transition hover:bg-[#1f2937] active:scale-[0.99]"
            >
              ورود
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>

            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-xs text-gray-400">یا</span>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500">
            حساب کاربری ندارید؟{" "}
            <Link
              href="/register"
              className="font-medium text-[#111827] hover:underline"
            >
              ثبت‌نام کنید
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
