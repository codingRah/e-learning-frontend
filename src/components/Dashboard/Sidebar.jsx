import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Menu } from "@headlessui/react";
import { LineWave } from "react-loader-spinner";

export default function Sidebar(props) {
  const { paths } = props;
  const [arrowIcon, setArowIcons] = useState(false);
  const [toggleArrow, setToggleArrow] = useState(<MdArrowBackIosNew />);

  const toggleHandler = (icon) => {
    setToggleArrow(icon);
    setArowIcons(!arrowIcon);
  };
  return (
    <div className="h-screen bg-gray-200">
      <div>
        <div className="flex items-center justify-center pt-20 text-3xl">
          Logo
        </div>
      </div>
      <div className="pt-20 mx-4">
        {paths?.map((path, index) => (
          <Menu key={index} as="div" className="relative">
            <Menu.Button
              as="button"
              onClick={() =>
                toggleHandler(
                  arrowIcon === false ? (
                    <IoIosArrowDown />
                  ) : (
                    <MdArrowBackIosNew />
                  )
                )
              }
              className="flex  font-medium w-full text-gray-800  border-0 "
            >
              <div className="flex  justify-between w-full items-center rounded-md px-2 hover:bg-gray-100 transition-all ease-in-out duration-400 py-2  font-farsi font-semibold">
                <div className="flex items-center w-64 justify-between">
                  {path.icon} {path.name}
                </div>
                <span className="text-xl w-full flex justify-end ">
                  {toggleArrow}
                </span>
              </div>
            </Menu.Button>

            {path?.subPaths && (
              <Menu.Items className="origin-top-right absolute left-0 mt-3 w-60 rounded-md shadow-lg bg-white items-center ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                <div className="py-1 ">
                  {path?.subPaths?.map((sub) => (
                    <Menu.Item key={sub.url}>
                      <Link
                        onClick={() =>
                          toggleHandler(
                            arrowIcon === false ? (
                              <IoIosArrowDown />
                            ) : (
                              <MdArrowBackIosNew />
                            )
                          )
                        }
                        to={sub.url}
                        className="flex items-center font-farsi hover:bg-gray-100 py-1 mx-auto px-2 text-sm "
                      >
                        {sub.icon} {sub.name}
                      </Link>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            )}
          </Menu>
        ))}
      </div>
    </div>
  );
}
