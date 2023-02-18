import React, { useEffect } from "react";
import { Layout } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserType } from "../features/userType/typeSlice";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
export default function UserType() {
  const { user_types } = useSelector((state) => state.userType);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserType());
  }, [dispatch]);
  return (
    <>
      <section className="h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="h-screen flex justify-center items-center">
            <div>{/* <AiOutlineArrowLeft /> */}</div>
            <div>
              {user_types &&
                user_types.map((type) => (
                  <Link
                    key={type?.id}
                    className="mx-6 px-12 py-6 bg-white border-2 text-lg font-bold tracking-wide font-farsi rounded-lg hover:border-cyan-900 transition duration-200 ease-out"
                    to={`${`/signup/${type?.id}`}`}
                  >
                    ثبت به عنوان {type?.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
