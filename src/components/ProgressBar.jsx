import React from "react";

export default function ProgressBar({ status }) {
  return (
    <div className="w-full h-[8px] bg-white rounded-full transition duration-200 ease-out">
      <div
        className={` bg-indigo-700 rounded-full h-[8px] ${
          status === 1
            ? " w-[20%]"
            : status === 2
            ? "w-[40%]"
            : status === 3
            ? "w-[60%]"
            : status === 4
            ? "w-[80%]"
            : "w-[100%]"
        }`}
        dir="ltr"
      ></div>
    </div>
  );
}
