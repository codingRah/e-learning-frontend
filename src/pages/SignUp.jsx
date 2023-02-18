import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { user_types, status } = useSelector((state) => state.userType);
  const type = user_types.filter((type) => type.id === Number(params.type));

  useEffect(() => {
    if (!user_types || status === "idle") {
      navigate("/type");
    }
  }, [user_types, status]);

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    re_password: "",
    user_type: params.type,
  });
  const { email, username, password, re_password, user_type } = formData;
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const data = { email, username, password, re_password, user_type };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser(data));
    toast.success("موفقانه ثبت سیستم شدید. ");
  };

  return (
    <>
      <section className="h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center py-4 justify-between">
            <Link
              to={"/login"}
              className="font-farsi border-2 border-black px-4 py-[2px] rounded-full hover:bg-cyan-900 hover:text-slate-50 transition duration-200 ease-out"
            >
              ورود
            </Link>
            <h1 className="text-lg font-semibold">e-learning</h1>
          </div>

          <div className="h-full mt-32 flex justify-center items-center">
            <div className="flex w-full justify-around">
              <div className="">
                <>
                  <div className="flex justify-between items-start">
                    <h1 className="text-lg font-bold font-farsi mb-6">
                      ثبت به عنوان {type[0]?.name}
                    </h1>
                    <div className="flex flex-col space-y-2 ">
                      <h2 className="font-farsi text-sm text-gray-400">
                        ثبت همراه
                      </h2>
                      <div className="flex">
                        <button className="bg-white rounded-full ml-1">
                          <AiOutlineGoogle className="text-4xl p-1 text-blue-800" />
                        </button>
                        <button className="bg-white rounded-full">
                          <AiOutlineGithub className="text-4xl p-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <form action="" onSubmit={onSubmit}>
                    <div className="flex flex-col space-y-2">
                      <label
                        htmlFor=""
                        className="font-farsi text-sm font-bold text-gray-600"
                      >
                        آدرس ایمیل
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder="email@gmail.com"
                        className="border-none h-12 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 px-2 text-gray-700 transition duration-200 ease-in"
                        required
                      />
                    </div>
                    <div className="mt-2 flex flex-col space-y-2">
                      <label
                        htmlFor=""
                        className="font-farsi text-sm font-bold text-gray-600"
                      >
                        نام کاربری
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
                        placeholder="Your Name"
                        className="border-none h-12 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 px-2 text-gray-700 transition duration-200 ease-in"
                        required
                      />
                    </div>
                    <div className="mt-2 flex flex-col space-y-2">
                      <label
                        htmlFor=""
                        className="font-farsi text-sm font-bold text-gray-600"
                      >
                        رمز ورود
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        className="border-none h-12 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 px-2 text-gray-700 transition duration-200 ease-in"
                        required
                      />
                    </div>

                    <div className="mt-2 flex flex-col space-y-2">
                      <label
                        htmlFor=""
                        className="font-farsi text-sm font-bold text-gray-600"
                      >
                        تکرار رمز ورود
                      </label>
                      <input
                        type="password"
                        name="re_password"
                        value={re_password}
                        onChange={onChange}
                        className="border-none h-12 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 px-2 text-gray-700 transition duration-200 ease-in"
                        required
                      />
                    </div>

                    {status === "loading" ? (
                      <button
                        type="submit"
                        className="border-none bg-blue-700 text-white mt-4 rounded-full font-farsi px-4 py-[8px] text-sm"
                      >
                        <RotatingLines
                          strokeColor="white"
                          strokeWidth="5"
                          animationDuration="0.75"
                          width="20"
                          visible={true}
                        />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="border-none bg-blue-700 text-white mt-4 rounded-full font-farsi px-4 py-[8px] text-sm"
                      >
                        ‌‌ذخیره کردن
                      </button>
                    )}
                  </form>
                </>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[2.3px] bg-gray-300 h-[15rem]"></div>
                <div className="text-gray-300">O</div>
                <div className="w-[2.3px] bg-gray-300 h-[15rem]"></div>
              </div>
              <div className="">
                <img src="/images/object.png" className="w-[30rem]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
