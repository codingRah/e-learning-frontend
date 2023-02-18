import React, { useState, useEffect } from "react";
import { Layout } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserProfile,
  createUserProfile,
  updateUserProfile,
  uploadPic,
  getProfileImageUrl,
  updateImage,
} from "../features/profile/profileSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const profileInfo = JSON.parse(localStorage.getItem("profile"));
  const { token, user, status } = useSelector((state) => state.auth);
  const { profile, image_url } = useSelector((state) => state.profile);
  const data = { access: token.access, username: user.username };
  useEffect(() => {
    if (user.username !== undefined) {
      dispatch(getUserProfile(data));
    }
  }, [dispatch, token, user, status]);

  useEffect(() => {
    dispatch(getProfileImageUrl({ id: user.id, access: token.access }));
  }, [dispatch]);
  const [formData, setFormData] = useState({
    first_name: profileInfo?.first_name ?? "",
    last_name: profileInfo?.last_name ?? "",
    phone: profileInfo?.phone ?? "",
  });

  const [name, setName] = useState("");

  const picData = { access: token.access, user: user.id, name };
  const { first_name, last_name, phone } = formData;
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const profileData = {
    access: token.access,
    user: user.id,
    first_name,
    last_name,
    phone,
  };
  const updatedData = {
    access: token.access,
    user: user.id,
    username: user.username,
    first_name,
    last_name,
    phone,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!profile) {
      dispatch(createUserProfile(profileData));
    }
    dispatch(updateUserProfile(updatedData));
  };

  const onImageChangeHandler = (e) => {
    setName(e.target.files[0]);
  };

  const onImageSubmit = (e) => {
    e.preventDefault();
    if (!image_url) {
      dispatch(uploadPic(picData));
    } else {
      dispatch(updateImage(picData));
    }
  };

  // tabs
  const tabLinks = ["پروفایل", "عکس", "حساب کاربری", "بستن حساب"];
  const [active, setActive] = useState(tabLinks[0]);

  return (
    <>
      <section className="relative">
        <div className="max-w-3xl mx-auto mt-16 p-3 flex border border-gray-400 rounded-md">
          <div className="w-48 border-l-2 border-gray-400 flex flex-col items-center">
            <div>
              <img
                src={image_url?.name}
                className="w-32 h-32 rounded-full"
                alt=""
              />
            </div>
            <div className="flex flex-col font-farsi text-sm w-full font-medium">
              {tabLinks.map((item, index) => (
                <button
                  onClick={() => setActive(tabLinks[index])}
                  key={item}
                  className={`mt-4 py-2 ${
                    active === item ? "bg-white" : ""
                  } ml-2`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-grow mr-24">
            <div>
              {active === "پروفایل" ? (
                <>
                  <form action="" onSubmit={onSubmit}>
                    <div className="flex flex-col space-y-2">
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
                        onChange={onChange}
                        className="border-none h-12 font-farsi w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 px-2 text-gray-700 transition duration-200 ease-in"
                        required
                      />
                    </div>

                    <div className="flex flex-col space-y-2 mt-3">
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
                        onChange={onChange}
                        className="border-none h-12 w-[23rem] font-farsi rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 px-2 text-gray-700 transition duration-200 ease-in"
                        required
                      />
                    </div>

                    <div className="flex flex-col space-y-2 mt-3">
                      <label
                        htmlFor=""
                        className="font-farsi text-sm font-bold text-gray-600"
                      >
                        شماره تماس
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={onChange}
                        className="border-none h-12 w-[23rem] font-farsi rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 px-2 text-gray-700 transition duration-200 ease-in"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="border-none bg-blue-700 text-white mt-4 rounded-full font-farsi px-4 py-[8px] text-sm"
                    >
                      ذخیره
                    </button>
                  </form>
                </>
              ) : active === "عکس" ? (
                <div className="flex flex-col w-full">
                  <div className="w-full">
                    <img
                      src={image_url.name}
                      className="m-auto w-48 h-48 rounded-xl"
                      alt=""
                    />
                  </div>
                  <form
                    action=""
                    className="mt-10 w-full"
                    onSubmit={onImageSubmit}
                    encType="multipart/form-data"
                  >
                    <div className="w-full">
                      <label htmlFor="">
                        <input
                          type="file"
                          name="name"
                          onChange={onImageChangeHandler}
                          id=""
                          className="text-sm text-grey-500
                          file:mr-5 file:py-3 file:px-8
                          file:rounded-full file:border-0
                          file:text-sm file:font-medium
                          file:bg-blue-700 file:text-white
                          hover:file:cursor-pointer hover:file:bg-amber-50
                          hover:file:text-amber-700"
                        />
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="border-none mr-5 bg-blue-700 text-white mt-7 rounded-full font-farsi px-4 py-[8px] text-sm"
                    >
                      ذخیره
                    </button>
                  </form>
                </div>
              ) : active === "حساب کاربری" ? (
                <>0000</>
              ) : (
                <>898989</>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
