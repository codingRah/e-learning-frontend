import React, { useState, useEffect } from "react";
import Button from "../Button";
import { addInstructor } from "../../features/instructor/instructorSlice";
import { useDispatch, useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";

import "react-datepicker/dist/react-datepicker.css";

export default function InstructorProfileForm() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const { instructor, status } = useSelector((state) => state.instructor);

  const [first_name, setFirst_name] = useState(instructor?.first_name ?? "");
  const [last_name, setLast_name] = useState(instructor?.last_name ?? "");
  const [father_name, setFather_name] = useState(instructor?.father_name ?? "");
  const [gender, setGender] = useState(instructor?.gender ?? "");
  const [phone, setPhone] = useState(instructor?.phone ?? "");
  const [dob, setDob] = useState(instructor?.dob ?? "");
  const [bio, setBio] = useState(instructor?.bio ?? "");
  const [image, setImage] = useState("");

  const data = {
    first_name,
    last_name,
    father_name,
    gender,
    phone,
    dob,
    bio,
    image,
    access: token?.access,
    user_id: user?.id,
  };

  const onProfileSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addInstructor(data));
  };

  const onImageUploadHandler = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="border-2 border-gray-300 rounded-md shadow-2xl shadow-white mt-10">
      <form
        action=""
        onSubmit={onProfileSubmitHandler}
        encType="multipart/form-data"
        className="px-20 py-6"
      >
        <div className="divide-y-2 divide-solid divide-gray-400 mx-10">
          <h3 className="mb-5  font-farsi text-xl font-semibold text-gray-800">
            مشخصات اولیه متقاضی
          </h3>

          <div>
            <div className="flex mt-4">
              <div className="flex flex-col space-y-2 ml-10">
                <label
                  htmlFor=""
                  className="font-farsi text-sm font-bold text-gray-600"
                >
                  نام
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={first_name}
                  onChange={(e) => setFirst_name(e.target.value)}
                  required
                  className="border-none font-farsi h-12 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 px-2 text-gray-700 transition duration-200 ease-in"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor=""
                  className="font-farsi text-sm font-bold text-gray-600"
                >
                  تخلص
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={last_name}
                  onChange={(e) => setLast_name(e.target.value)}
                  className="border-none font-farsi h-12 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 px-2 text-gray-700 transition duration-200 ease-in"
                  required
                />
              </div>
            </div>

            <div className="flex mt-4">
              <div className="flex flex-col space-y-2 ml-10">
                <label
                  htmlFor=""
                  className="font-farsi text-sm font-bold text-gray-600"
                >
                  نام پدر
                </label>
                <input
                  type="text"
                  name="father_name"
                  value={father_name}
                  onChange={(e) => setFather_name(e.target.value)}
                  className="border-none font-farsi h-12 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 px-2 text-gray-700 transition duration-200 ease-in"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2 ">
                <label
                  htmlFor=""
                  className="font-farsi text-sm font-bold text-gray-600"
                >
                  جنسیت{" "}
                </label>
                <select
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                  className="border-none font-farsi h-12 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 px-2 text-gray-700 transition duration-200 ease-in"
                  id=""
                >
                  <option value="" className="font-farsi">
                    جنسیت
                  </option>
                  <option value="male" className="font-farsi">
                    مرد
                  </option>
                  <option value="female" className="font-farsi">
                    زن
                  </option>
                </select>
              </div>
            </div>

            <div className="flex mt-4">
              <div className="flex flex-col space-y-2 ml-10 ">
                <label
                  htmlFor=""
                  className="font-farsi text-sm font-bold text-gray-600"
                >
                  شماره تماس{" "}
                </label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border-none font-farsi h-12 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 px-2 text-gray-700 transition duration-200 ease-in"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor=""
                  className="font-farsi text-sm font-bold text-gray-600"
                >
                  تاریخ تولد
                </label>
                <input
                  type="date"
                  name="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="border-none font-farsi h-12 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 px-2 text-gray-700 transition duration-200 ease-in"
                />
              </div>
            </div>

            <div className="flex mt-4">
              <div className="flex flex-col space-y-2 ml-10">
                <label
                  htmlFor=""
                  className="font-farsi text-sm font-bold text-gray-600"
                >
                  بیوگرافی{" "}
                </label>
                <textarea
                  name="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  id=""
                  cols="30"
                  rows="5"
                  className="border-none font-farsi w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 px-2 text-gray-700 transition duration-200 ease-in"
                ></textarea>
              </div>
              <div className="flex flex-col space-y-2 ">
                <label
                  htmlFor=""
                  className="font-farsi text-sm font-bold text-gray-600"
                >
                  عکس
                </label>

                <input
                  type="file"
                  name="image"
                  onChange={onImageUploadHandler}
                  required
                  className="text-sm text-grey-500
                  file:mr-0 file:py-3 file:px-10
                  file:rounded-full file:border-0
                  file:text-md file:font-semibold  file:text-white
                  file:bg-gradient-to-r file:from-blue-600 file:to-blue-800
                  hover:file:cursor-pointer hover:file:opacity-80"
                />
              </div>
            </div>

            <div className="mt-4">
              {status === "loading" && (
                <Button type="disabled">
                  <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="20"
                    visible={true}
                  />
                </Button>
              )}
              {status !== "loading" && <Button>ذخیره</Button>}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
