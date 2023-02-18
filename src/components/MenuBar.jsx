import React, { useEffect } from "react";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { getProfileImageUrl } from "../features/profile/profileSlice";
import { useSelector, useDispatch } from "react-redux";

export default function MenuBar() {
  const dispatch = useDispatch();
  const { image_url } = useSelector((state) => state.profile);
  const { token, user, status } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getProfileImageUrl({ id: user.id, access: token.access }));
  }, [dispatch]);
  return (
    <div className="flex justify-between flex-start p-2 md:mx-6 relative">
      <div className="flex flex-col space-y-1">
        <h4 className="text-lg font-semibold font-farsi text-gray-700">
          دوباره خوش آمدید!{" "}
        </h4>
        <span className="text-gray-500 text-xs font-farsi">
          هفته دوم از آموزش جاوا
        </span>
      </div>
      <div className="flex justify-between items-center">
        <form action="" className="relative ml-8">
          <AiOutlineSearch className="absolute text-2xl top-[25%] left-2 text-gray-600 " />
          <input
            type="text"
            className="border-none h-14 w-[18rem] rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 px-2 text-gray-700 transition duration-200 ease-in font-farsi"
            placeholder="چیزی جدیدی میخواهید بیاموزید؟ "
          />
        </form>
        <Menu as="div" className="relative">
          <Menu.Button className="inline-flex items-center justify-between w-full shadow-sm bg-transparent text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100 border-0 rounded-2xl focus:ring-indigo-500">
            <img
              src={image_url.name}
              className="w-14 h-14 rounded-2xl"
              alt=""
            />
          </Menu.Button>

          <Menu.Items className="origin-top-right absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                <Link
                  to="/console/profile"
                  className="group flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 rounded-lg hover:text-white font-farsi"
                >
                  پروفایل
                  <AiOutlineUser className="mr-3 h-6 w-6 text-gray-800 hover:text-white" />
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  to=""
                  className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white font-farsi rounded-lg justify-between"
                >
                  اعلانات
                  <IoMdNotificationsOutline className="mr-3 h-6 w-6 text-gray-800 hover:text-white" />
                </Link>
              </Menu.Item>
            </div>

            <div className="py-1">
              <Menu.Item>
                <Link
                  to=""
                  className="group flex items-center justify-between px-4 py-2 text-sm text-red-400 hover:bg-indigo-500 rounded-lg hover:text-white font-farsi"
                >
                  خروج
                  <BiLogOut className="mr-3 h-6 w-6 text-red-400 hover:text-white" />
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}
