import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";
export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <TopNav />
      <nav
        className={`${
          scrollPosition > 40
            ? "fixed top-0 w-full py-3 bg-gray-50 shadow-sm"
            : "w-full shadow-sm z-10 fixed py-3 bg-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="w-full">
            <ul className="flex space-x-10 items-center">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
            </ul>
          </div>
          <Link to={"/"}>Elearning</Link>
        </div>
      </nav>
    </div>
  );
}
