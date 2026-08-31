"use client";

import { useState } from "react";

export default function SupportButton() {
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessage("");
  };

  return (
    <>
      {open && (
        <div
          dir="rtl"
          className="
          font-sans
            fixed
            bottom-24
            right-5
            z-[100]
            w-[350px]
            max-w-[calc(100vw-32px)]
            overflow-hidden
            rounded-2xl
            bg-white
            shadow-[0_10px_40px_rgba(0,0,0,0.18)]
            border
            border-gray-100
          "
        >
          {/* Header */}
          <div className="bg-[#d22c4e] px-5 py-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">
                  پشتیبانی آنلاین
                </h3>

                <div className="mt-1 flex items-center gap-2 text-xs text-white/90">
                  <span className="h-2 w-2 rounded-full bg-green-300" />
                  پاسخگویی آنلاین
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setChatOpen(false);
                }}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-xl
                  transition
                  hover:bg-white/20
                "
              >
                ×
              </button>
            </div>
          </div>

          {!chatOpen ? (
            <>
              {/* Welcome */}
              <div className="border-b px-5 py-4">
                <p className="text-sm font-bold text-gray-800">
                  سلام 👋
                </p>

                <p className="mt-1 text-xs leading-6 text-gray-500">
                  چطور می‌تونیم کمکتون کنیم؟
                </p>
              </div>

              {/* Options */}
              <div className="flex flex-col gap-3 p-4">
                <button
                  type="button"
                  onClick={() => setChatOpen(true)}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-gray-200
                    p-4
                    text-right
                    transition
                    hover:border-[#d22c4e]
                    hover:bg-[#fff5f7]
                  "
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff0f3] text-xl">
                    💬
                  </span>

                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      مشاوره و چت آنلاین
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      قبل از خرید سوالی دارید؟
                    </p>
                  </div>

                  <span className="mr-auto text-gray-400">
                    ❮
                  </span>
                </button>

                <a
                  href="tel:+982191094400"
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-gray-200
                    p-4
                    text-right
                    transition
                    hover:border-[#d22c4e]
                    hover:bg-[#fff5f7]
                  "
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff0f3] text-xl">
                    📞
                  </span>

                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      تماس با پشتیبانی
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      ارتباط مستقیم با ما
                    </p>
                  </div>

                  <span className="mr-auto text-gray-400">
                    ❮
                  </span>
                </a>

                <a
                  href="/faq"
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-gray-200
                    p-4
                    text-right
                    transition
                    hover:border-[#d22c4e]
                    hover:bg-[#fff5f7]
                  "
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff0f3] text-xl">
                    ❓
                  </span>

                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      سوالات متداول
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      پاسخ سوالات رایج
                    </p>
                  </div>

                  <span className="mr-auto text-gray-400">
                    ❮
                  </span>
                </a>
              </div>

              {/* Footer */}
              <div className="border-t bg-gray-50 px-5 py-3 text-center">
                <p className="text-[11px] text-gray-400">
                  تیم پشتیبانی در کنار شماست ❤️
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b px-5 py-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setChatOpen(false)}
                    className="
                      text-lg
                      text-gray-400
                      transition
                      hover:text-gray-800
                    "
                  >
                    ❯
                  </button>

                  <div>
                    <p className="text-sm font-bold">
                      گفت‌وگو با پشتیبانی
                    </p>

                    <div className="mt-1 flex items-center gap-1 text-[10px] text-green-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      آنلاین
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div
                className="
                  h-[260px]
                  overflow-y-auto
                  bg-gray-50
                  p-4
                "
              >
                <div className="flex items-start gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d22c4e] text-sm text-white">
                    پ
                  </div>

                  <div className="max-w-[80%] font_sans rounded-2xl rounded-tr-none bg-white px-3 py-2 shadow-sm">
                    <p className="text-xs leading-6 text-gray-700">
                      سلام 👋
                      <br />
                      خوشحالیم که با ما در ارتباط هستید.
                      چطور می‌تونیم کمکتون کنیم؟
                    </p>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="border-t bg-white p-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(event) =>
                      setMessage(event.target.value)
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        sendMessage();
                      }
                    }}
                    placeholder="پیام خود را بنویسید..."
                    className="
                      min-w-0
                      flex-1
                      rounded-xl
                      border
                      border-gray-200
                      px-3
                      py-2.5
                      text-sm
                      outline-none
                      transition
                      focus:border-[#d22c4e]
                    "
                  />

                  <button
                    type="button"
                    onClick={sendMessage}
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#d22c4e]
                      text-white
                      transition
                      hover:opacity-90
                      active:scale-95
                    "
                  >
                    ➤
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => {
          setOpen((value) => !value);

          if (open) {
            setChatOpen(false);
          }
        }}
        aria-label="پشتیبانی آنلاین"
        className="
          fixed
          bottom-5
          right-5
          z-[100]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#d22c4e]
          text-2xl
          text-white
          shadow-[0_5px_20px_rgba(210,44,78,0.4)]
          transition
          duration-300
          hover:scale-110
          active:scale-95
        "
      >
        {open ? "×" : "💬"}
      </button>
    </>
  );
}