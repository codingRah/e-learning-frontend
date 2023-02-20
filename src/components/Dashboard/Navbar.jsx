import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../features/theme/themeSlice";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const { isSidebarCollapsed } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="py-4 flex items-center justify-between px-5">
      <div className="flex items-center">
        <GiHamburgerMenu
          onClick={() => dispatch(toggleSidebar())}
          className="text-2xl"
        />
        <form className="flex items-center pr-10">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BsSearch />
            </div>
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 items-center font-farsi border border-gray-300 text-gray-900 text-sm rounded-lg outline-blue-400 block w-full pl-10 py-1.5 rtl:pr-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="جستجو..."
              required
            />
          </div>
        </form>
      </div>
      <div className="flex items-center">
        <div className="inline-flex relative w-fit">
          <div className="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-700 text-white rounded-full z-10">
            99+
          </div>

          <BiBell className="text-3xl mx-2" />
        </div>
        <div className="rounded-full bg-blue-600 w-10 h-10">
          <img src="images/logo192.png" alt="" />
        </div>
        <div className="flex">
          <Menu as="div" className="relative">
            <Menu.Button as="button" className="flex">
              <h3 className="text-md mx-1 font-farsi">امیر کرور</h3>
              <IoIosArrowDown className="text-xl" />
            </Menu.Button>
            <Menu.Items className="origin-top-right absolute left-0 mt-3 w-32 rounded-md shadow-lg bg-white items-center ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
              <Menu.Item className="text-center">
                <Link
                  className="text-center font-farsi flex justify-center py-1"
                  to={"#"}
                >
                  خروج
                </Link>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </div>
  );
}
