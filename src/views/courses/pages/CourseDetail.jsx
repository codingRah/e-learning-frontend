import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CourseDetail() {
  const { id } = useParams();
  const { courses } = useSelector((state) => state.courses.data);
  const course = courses.find((c) => c.id === Number(id));

  return (
    <div>
      <h1 className="text-3xl mt-10">{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
}
