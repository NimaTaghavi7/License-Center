"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgotPasswordForm() {
  const router = useRouter();

  const [resetType, setResetType] = useState<"email" | "phone">("email");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [code, setCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

  const sendCode = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^09\d{9}$/;

    if (resetType === "email") {
      if (!email) {
        showMessage("لطفاً ایمیل خود را وارد کنید.");
        return;
      }

      if (!emailPattern.test(email)) {
        showMessage("لطفاً یک ایمیل معتبر وارد کنید.");
        return;
      }
    }

    if (resetType === "phone") {
      if (!phone) {
        showMessage("لطفاً شماره موبایل خود را وارد کنید.");
        return;
      }

      if (!phonePattern.test(phone)) {
        showMessage("شماره موبایل باید دقیقاً ۱۱ رقم باشد و با 09 شروع شود.");
        return;
      }
    }

    setCodeSent(true);
    showMessage("کد تأیید با موفقیت ارسال شد.", "success");
  };

  const verifyCode = () => {
    if (!code) {
      showMessage("لطفاً کد تأیید را وارد کنید.");
      return;
    }

    if (code.length !== 6) {
      showMessage("کد تأیید باید ۶ رقم باشد.");
      return;
    }

    setMessage("");
    setCodeSent(true);

    setCodeSent(true);
  };

  const changePassword = () => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+=-]{8,}$/;

    if (!newPassword) {
      showMessage("لطفاً رمز عبور جدید را وارد کنید.");
      return;
    }

    if (!passwordPattern.test(newPassword)) {
      showMessage(
        "رمز عبور باید حداقل ۸ کاراکتر و شامل حروف بزرگ، حروف کوچک و عدد باشد.",
      );
      return;
    }

    if (!confirmPassword) {
      showMessage("لطفاً تکرار رمز عبور را وارد کنید.");
      return;
    }

    if (newPassword !== confirmPassword) {
      showMessage("رمز عبور و تکرار رمز عبور یکسان نیستند.");
      return;
    }

    showMessage("رمز عبور با موفقیت تغییر کرد.", "success");

    setTimeout(() => {
      router.push("/login");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4">
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
            {!codeSent
              ? "بازیابی رمز عبور"
              : code.length === 6
                ? "تعیین رمز جدید"
                : "تأیید کد"}
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            {!codeSent
              ? "برای بازیابی رمز عبور اطلاعات خود را وارد کنید"
              : code.length === 6
                ? "رمز عبور جدید خود را تعیین کنید"
                : "کد ارسال شده را وارد کنید"}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
          {!codeSent ? (
            <>
              <div className="space-y-5">
                <div className="flex gap-2 p-1 bg-gray-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setResetType("email")}
                    className={`flex-1 h-9 rounded-lg text-sm transition ${
                      resetType === "email"
                        ? "bg-white text-[#111827] shadow-sm"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    بازیابی با ایمیل
                  </button>

                  <button
                    type="button"
                    onClick={() => setResetType("phone")}
                    className={`flex-1 h-9 rounded-lg text-sm transition ${
                      resetType === "phone"
                        ? "bg-white text-[#111827] shadow-sm"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    بازیابی با شماره موبایل
                  </button>
                </div>

                {resetType === "email" && (
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      ایمیل
                    </label>

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          sendCode();
                        }
                      }}
                      placeholder="example@email.com"
                      className="w-full h-11 rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
                    />
                  </div>
                )}

                {resetType === "phone" && (
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
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          sendCode();
                        }
                      }}
                      placeholder="09123456789"
                      className="w-full h-11 rounded-xl border border-gray-300 bg-white px-4 text-sm text-left outline-none transition focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
                    />
                  </div>
                )}

                <button
                  type="button"
                  onClick={sendCode}
                  className="w-full h-11 rounded-xl bg-[#111827] text-white text-sm font-medium transition hover:bg-[#1f2937] active:scale-[0.99]"
                >
                  ارسال کد تأیید
                </button>
              </div>

              {/* Separator */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>

                <div className="relative flex justify-center">
                  <span className="bg-white px-3 text-xs text-gray-400">
                    یا
                  </span>
                </div>
              </div>

              <p className="text-center text-sm text-gray-500">
                رمز عبور خود را به یاد آوردید?{" "}
                <Link
                  href="/login"
                  className="font-medium text-[#111827] hover:underline"
                >
                  وارد شوید
                </Link>
              </p>
            </>
          ) : code.length !== 6 ? (
            <>
              <div className="text-center mb-5">
                <p className="text-sm text-gray-500">
                  کد تأیید به{" "}
                  <span className="font-medium text-[#111827]" dir="ltr">
                    {resetType === "email" ? email : phone}
                  </span>{" "}
                  ارسال شد.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="code"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    کد تأیید
                  </label>

                  <input
                    id="code"
                    type="text"
                    inputMode="numeric"
                    dir="ltr"
                    maxLength={6}
                    value={code}
                    onChange={(e) => {
                      const value = e.target.value;

                      if (/^\d*$/.test(value) && value.length <= 6) {
                        setCode(value);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        verifyCode();
                      }
                    }}
                    placeholder="123456"
                    className="w-full h-11 rounded-xl border border-gray-300 bg-white px-4 text-sm text-left tracking-widest outline-none transition focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
                  />
                </div>

                <button
                  type="button"
                  onClick={verifyCode}
                  className="w-full h-11 rounded-xl bg-[#111827] text-white text-sm font-medium transition hover:bg-[#1f2937] active:scale-[0.99]"
                >
                  تأیید کد
                </button>

                <button
                  type="button"
                  onClick={sendCode}
                  className="w-full text-sm text-gray-500 hover:text-[#111827] transition"
                >
                  ارسال مجدد کد
                </button>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>

                <div className="relative flex justify-center">
                  <span className="bg-white px-3 text-xs text-gray-400">
                    یا
                  </span>
                </div>
              </div>

              <p className="text-center text-sm text-gray-500">
                اشتباه وارد کردید?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setCodeSent(false);
                    setCode("");
                  }}
                  className="font-medium text-[#111827] hover:underline"
                >
                  تغییر اطلاعات
                </button>
              </p>
            </>
          ) : (
            <>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="newPassword"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    رمز عبور جدید
                  </label>

                  <div className="relative">
                    <input
                      id="newPassword"
                      type={showPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          document.getElementById("confirmPassword")?.focus();
                        }
                      }}
                      placeholder="رمز عبور جدید را وارد کنید"
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
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          changePassword();
                        }
                      }}
                      placeholder="رمز عبور را دوباره وارد کنید"
                      className="w-full h-11 rounded-xl border border-gray-300 bg-white px-4 pl-16 text-sm outline-none transition focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-500 hover:text-gray-900"
                    >
                      {showConfirmPassword ? "مخفی" : "نمایش"}
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={changePassword}
                  className="w-full h-11 rounded-xl bg-[#111827] text-white text-sm font-medium transition hover:bg-[#1f2937] active:scale-[0.99]"
                >
                  تغییر رمز عبور
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
