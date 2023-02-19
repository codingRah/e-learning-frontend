import React, { useState } from "react";
import reducer from "./store";
import { useDispatch, useSelector } from "react-redux";
import { newCourse } from "./store/dataSlice";
import { injectReducer } from "../../app/store";



injectReducer("courses", reducer);

export default function Course() {
  

  return (
    <div>
      course list
    </div>
  );
}
