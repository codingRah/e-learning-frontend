import React from "react";
import { Link } from "react-router-dom";
import { CiFacebook, CiInstagram, CiLinkedin, CiYoutube } from "react-icons/ci";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
export default function TopNav() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="w-full bg-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between py-2">
        <div className="flex items-center ml-6">
          <span className="flex items-center space-x-2 ml-6">
            <Link to={""} className="ml-2">
              <CiFacebook className="text-xl" />
            </Link>
            <Link to={""}>
              <CiInstagram className="text-xl" />
            </Link>
            <Link to={""}>
              <CiLinkedin className="text-xl" />
            </Link>
            <Link to={""}>
              <CiYoutube className="text-xl" />
            </Link>
          </span>
          <ul className="flex justify-between items-center ">
            {token ? (
              <>
                <li>
                  <Link
                    to={"/profile"}
                    className="font-farsi border-2 ml-3 text-sm border-gray-900 px-3 rounded-sm"
                  >
                    پروفایل
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logoutHandler}
                    className="font-farsi ml-3 text-sm border-gray-900 px-3 "
                  >
                    خروج
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to={"/login"}
                    className="font-farsi border-2 ml-3 text-sm border-gray-900 px-3 rounded-sm"
                  >
                    ورود
                  </Link>
                </li>
                <li className="ml-3 text-gray-600">&#124;</li>
                <li>
                  <Link to={"/type"} className="font-farsi ml-3 text-sm">
                    ثبت نام
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <span dir="ltr" className="font-farsi text-md tracking-wider">
              codingrah@info.com
            </span>
            <AiOutlineMail className="text-xl mx-2 text-blue-600" />
          </span>
          <span className="ml-3 text-gray-600">&#124;</span>
          <span className="flex items-center">
            <span dir="ltr" className="font-farsi">
              (+۹۳) ۷۸۴۱ ۵۳۴ ۶۲
            </span>
            <AiOutlinePhone className="text-xl mr-2 text-blue-600" />
          </span>
        </div>
      </div>
    </div>
  );
}
