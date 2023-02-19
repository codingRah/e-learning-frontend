import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../features/theme/themeSlice";

export default function Navbar(props) {
  const { isSidebarCollapsed } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="py-4 flex items-center justify-between px-5">
      <div>
        <GiHamburgerMenu
          onClick={() => dispatch(toggleSidebar())}
          className="text-2xl"
        />
      </div>
      <form className="flex items-center">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BsSearch />
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos, Design Templates..."
            required
          />
        </div>
      </form>
    </div>
  );
}
