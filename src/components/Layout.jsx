import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <section>
      <Navbar />
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
