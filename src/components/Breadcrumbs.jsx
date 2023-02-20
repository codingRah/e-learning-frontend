import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
export default function Breadcrumbs({ pevPage, currentPage }) {
  return (
    <div className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <AiOutlineHome className="text-2xl" />
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <MdArrowBackIos />
            <a
              href="#"
              className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
            >
              کورس ها
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <MdArrowBackIos />
            <a
              href="#"
              className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
            >
              کورس ها
            </a>
          </div>
        </li>
      </ol>
    </div>
  );
}
