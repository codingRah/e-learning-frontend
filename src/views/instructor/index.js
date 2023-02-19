import React from "react";
import DashboardLayout from "../../layotus/DashboardLayout";
import Course from "../courses";
import { Routes, Route } from "react-router-dom";
import { MdOutlineClass } from "react-icons/md";

export default function InstructorDashboard() {
  const paths = [
    {
      name: "My Courses",
      url: "/instructor/courses",
      icon: <MdOutlineClass />,
    },
  ];
  return (
    <div>
      <DashboardLayout paths={paths}>
        <Routes>
          <Route path="/" element={"dashboard"} />
          <Route path="/courses" element={<Course />} />
        </Routes>
      </DashboardLayout>
    </div>
  );
}
