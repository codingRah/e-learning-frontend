import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editCourse } from "../store/dataSlice";

export default function CourseDetail() {
  const { id } = useParams();
  const { courses } = useSelector((state) => state.courses.data);
  const { token } = useSelector((state) => state.auth);
  const course = courses.find((c) => c.id === Number(id));
  const access = token?.access;
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: course?.title ?? "",
    description: course?.description ?? "",
    category: course?.category.id ?? "",
    course_type: course?.course_type.id ?? "",
    language: course?.language.id ?? "",
  });

  const { title, description, category, course_type, language } = formData;
  const data = {
    title,
    description,
    category,
    course_type,
    language,
    access,
    id: course?.id,
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(editCourse(data));
  };
  return (
    <div>
      <h1 className="text-3xl mt-10">{course.title}</h1>
      <p>{course.description}</p>
      <hr />
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="">Title</label>
          <input type="text" name="title" value={title} onChange={onChange} />
        </div>
        <div className="mt-3">
          <label htmlFor="">Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={onChange}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="">Language</label>
          <input
            type="text"
            name="language"
            value={language}
            onChange={onChange}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="">Course Type</label>
          <input
            type="text"
            name="course_type"
            value={course_type}
            onChange={onChange}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="">Category</label>
          <input
            type="text"
            name="category"
            value={category}
            onChange={onChange}
          />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}
