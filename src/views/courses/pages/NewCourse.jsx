import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newCourse } from "../store/dataSlice";
import { fetchCategory } from "../store/dataSlice";

export default function NewCourse() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const { course_categories } = useSelector((state) => state.courses.data);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    language: "",
    course_type: "",
    category: "",
  });
  const access = token?.access;
  //   fetch available course category
  useEffect(() => {
    dispatch(fetchCategory(access));
  }, []);
  const { title, description, language, category, course_type } = formData;
  const data = {
    title,
    description,
    language,
    category,
    course_type,
    access: token.access,
    created_by: user.id,
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
    dispatch(newCourse(data));
  };
  return (
    <div>
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
