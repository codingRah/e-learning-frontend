import React, { useEffect, useState } from "react";
import { fetchUserInfo } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../features/profile/profileSlice";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Routes, Route } from "react-router-dom";
import { Sidebar, MenuBar } from "../components";
import Courses from "./Courses";
import Profile from "./Profile";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { token, user, status } = useSelector((state) => state.auth);
  const { profile, image_url } = useSelector((state) => state.profile);
  useEffect(() => {
    if (token) {
      dispatch(fetchUserInfo(token.access));
    }
  }, [token]);

  const data = { access: token.access, username: user.username };
  useEffect(() => {
    if (user.username !== undefined) {
      dispatch(getUserProfile(data));
    }
  }, [dispatch, token, user, status]);

  //   sidebar status => true, false
  const [sidebar, setSidebar] = useState(true);
  return (
    <main className="">
      <div className="flex relative">
        <div className="fixed left-4 bottom-4" style={{ zIndex: "1000" }}>
          <button
            type="button"
            className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
            style={{ background: "blue", borderRadius: "50%" }}
          >
            <FiSettings />
          </button>
        </div>

        {/*  */}
        {sidebar ? (
          <aside className="w-72 relative">
            <Sidebar />
          </aside>
        ) : (
          <aside className="w-0 text-[2px] hidden">
            <Sidebar />
          </aside>
        )}

        <div
          className={`min-h-screen w-full ${
            sidebar ? "mr-1 md:mr-72" : "flex-2"
          }`}
        >
          <div className="fixed md:static w-full">
            <MenuBar />
          </div>

          <div>
            {/* routes */}
            <Routes>
              <Route path="/courses" element={<Courses />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  );
}
