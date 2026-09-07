"use client";

import { useState } from "react";

export default function Example() {
  const [age, userage] = useState("");

  const Check = () => {
    const convert = Number(age);

    if (convert < 18) {
      alert("ورود شما به این سایت ممنوع است");
    } else {
      alert("به وبسایت ما خوش آمدید");
    }
  };

  return (
    <div className="flex flex-row ">
      <input type="number" value={age} onChange={(e) => userage(e.target.value)} placeholder="سن خود را وارد کنید"/>
      <button onClick={Check}> بررسی </button>
    </div>
  );
}