import React from "react";
import DashboardLayout from "../../layotus/DashboardLayout";
import Course from "../courses";
import { Routes, Route } from "react-router-dom";

export default function InstructorDashboard() {
  const paths = [{ name: "", url: "", icon: "" }];
  return (
    <div>
      <DashboardLayout links="hello">
        <Routes>
          <Route path="/" element={"dashboard"} />
          <Route path="/courses" element={<Course />} />
        </Routes>
      </DashboardLayout>
    </div>
  );
}
