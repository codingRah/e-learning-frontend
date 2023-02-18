import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineCloseCircle, AiOutlineHome } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { BiBarChartSquare } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(true);
  const links = [
    {
      title: "داشبورد",
      icon: <AiOutlineHome />,
      isActive: true,
      path: "/console",
    },
    {
      title: "کورس من",
      icon: <FaGraduationCap />,
      isActive: false,
      path: "/console/courses",
    },
    {
      title: "کورس جاری",
      icon: <BiBarChartSquare />,
      isActive: false,
      path: "/progress",
    },
    {
      title: "تنظیمات",
      icon: <FiSettings />,
      isActive: false,
      path: "setting",
    },
  ];
  return (
    <div className="h-screen md:overflow-hidden overflow-auto pt-4 md:hover:overflow-auto pb-10 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25 border border-gray-100">
      {sidebar && (
        <>
          <div className="flex md:justify-center justify-between items-center mx-3">
            <Link
              to={"/"}
              className="flex justify-center font-farsi items-center text-3xl font-extrabold"
            >
              آموزش
            </Link>
            <AiOutlineCloseCircle className="text-3xl hover:cursor-pointer md:hidden" />
          </div>
          <div className="mt-16">
            {links.map((link) => (
              <div className="font-farsi" key={link.title}>
                <NavLink
                  to={`${link.path}`}
                  className={`flex items-center pr-10 py-4 w-56 rounded-tl-3xl rounded-bl-3xl ${
                    link.isActive === true ? "bg-white" : ""
                  }`}
                >
                  <div className="text-2xl">{link.icon}</div>
                  <div className="mr-4 text-md">{link.title}</div>
                </NavLink>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
