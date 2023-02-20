import React, { useState, useEffect } from "react";
import reducer from "./store";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersCourse } from "./store/dataSlice";
import { Link } from "react-router-dom";

import { injectReducer } from "../../app/store";

injectReducer("courses", reducer);

export default function Course() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { courses } = useSelector((state) => state.courses.data);

  const access = token?.access;

  useEffect(() => {
    dispatch(fetchUsersCourse(access));
  }, [dispatch]);

  return (
    <div className="mt-10">
      <div className="flex">
        {courses.map((course, index) => (
          <div className="mx-5" key={index}>
            <Link to={`${course.id}`}>{course.title}</Link>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
