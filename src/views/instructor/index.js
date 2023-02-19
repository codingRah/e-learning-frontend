import React from "react";
import DashboardLayout from "../../layotus/DashboardLayout";
import Course from "../courses";
import { Routes, Route } from "react-router-dom";
import { MdOutlineClass } from "react-icons/md";
import { AiOutlinePlus } from 'react-icons/ai'
import { NewCourse } from "../courses/pages";

export default function InstructorDashboard() {
  const paths = [
    {
      name: "کورس ها",
      icon: <MdOutlineClass className="text-2xl mx-2" />,
      subPaths : [
        {
          name  : "لیست کورس ها", 
          url: "/instructor/courses",
          icon : <AiOutlinePlus className="text-2xl mx-2" />
        },
        {
          name  : "کورس جدید", 
          url : "/instructor/courses/new",
          icon : <AiOutlinePlus className="text-2xl mx-2" />
        },

      ]
    },
    
  ];
  return (
    <div>
      <DashboardLayout paths={paths}>
        <Routes>
          <Route path="/" element={"dashboard"} />
          <Route path="/courses" element={<Course />} />
          <Route path="/courses/new" element={<NewCourse />} />
        </Routes>
      </DashboardLayout>
    </div>
  );
}
