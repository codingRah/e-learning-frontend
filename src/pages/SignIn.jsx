import React, { useState, useEffect } from "react";
import { loginUser, fetchUserInfo } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserType } from "../features/userType/typeSlice";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { token, status, user } = useSelector((state) => state.auth);
  const { user_types } = useSelector((state) => state.userType);

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const data = { email, password };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(data));
  };
  useEffect(() => {
    dispatch(fetchUserType());
  }, []);
  useEffect(() => {
    if (token) {
      const access = token.access;
      dispatch(fetchUserInfo(access));
    }
  }, [token]);
  useEffect(() => {
    const types = user_types.find((u_type) => u_type?.id === user?.user_type);
    const { name } = types;
    if (name === "instructor" || name === "استاد") {
      navigate("/instructor/profile");
    } else if (name === "student" || name === "شاگرد") {
      navigate("/console");
    }
  }, [user]);
  return (
    <>
      <section className="h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center py-4 justify-between">
            <Link
              to={"/type"}
              className="font-farsi border-2 border-black px-4 py-[2px] rounded-full hover:bg-cyan-900 hover:text-slate-50 transition duration-200 ease-out"
            >
              ثبت نام
            </Link>
            <h1 className="text-lg font-semibold">e-learning</h1>
          </div>
          <div className="h-full mt-32 flex justify-center items-center">
            <div className="flex w-full justify-around">
              <div className="">
                <>
                  <div className="flex justify-between items-start">
                    <h1 className="text-lg font-bold font-farsi mb-6">
                      ورود به سیستم
                    </h1>
                    <div className="flex flex-col space-y-2 ">
                      <h2 className="font-farsi text-sm text-gray-400">
                        ورود همراه
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
                        ایمیل آدرس
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="email@gmail.com"
                        onChange={onChange}
                        className="border-none h-12 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 px-2 text-gray-700 transition duration-200 ease-in"
                        required
                      />
                    </div>
                    <div className="flex flex-col space-y-2 mt-2">
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
                        ورود
                      </button>
                    )}
                  </form>
                </>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
