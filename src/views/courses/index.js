import React, { useState } from "react";
import reducer from "./store";
import { useDispatch, useSelector } from "react-redux";
import { injectReducer } from "../../app/store";
import { newCourse } from "./store/dataSlice";

injectReducer("courses", reducer);

export default function Course() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const { title, description } = formData;
  const data = {
    title,
    description,
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
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={onChange}
          />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}
