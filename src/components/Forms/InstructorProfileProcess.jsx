import React from "react";
import { BsThreeDots } from "react-icons/bs";

export default function InstructorProfileProcess() {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-10 max-w-xl">
        <h1 className="font-farsi text-md font-semibold">
          ممنون از حوصله مندی شما. ما در حال بررسی حساب شما هستیم و در کمتر از
          یک روز کاری حساب شما بررسی میگردد.
        </h1>
        <span className="flex justify-center items-center mt-10">
          <BsThreeDots className="text-3xl animate-spin" />
        </span>
      </div>
    </div>
  );
}
