import React from "react";
import { Navbar, Sidebar } from "../components/Dashboard";
import { toggleSidebar } from "../features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

export default function DashboardLayout(props) {
  const { children, links } = props;
  const { isSidebarCollapsed } = useSelector((state) => state.theme);
  return (
    <div className="flex relative">
      {!isSidebarCollapsed ? (
        <div className="w-72 fixed">
          <Sidebar links={links} />
        </div>
      ) : (
        <div className="w-0">
          <Sidebar />
        </div>
      )}
      <div
        className={`${!isSidebarCollapsed ? "md:mr-72 w-full" : "mr-0 w-full"}`}
      >
        <Navbar />
        <div className="min-h-screen">{children}</div>
      </div>
    </div>
  );
}
