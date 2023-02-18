import React from "react";

export default function Button({ type, children }) {
  return (
    <button
      type={`${!type && "submit"}`}
      disabled={type === "disabled"}
      className="px-10 py-3 rounded-md bg-indigo-600 hover:bg-indigo-800 transition text-white font-farsi text-md font-semibold duration-200 ease-out"
    >
      {children}
    </button>
  );
}
