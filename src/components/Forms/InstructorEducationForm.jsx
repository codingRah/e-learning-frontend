import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEducation } from "../../features/education/educationSlice";
import { getInstructor } from "../../features/instructor/instructorSlice";
import Button from "../Button";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { RotatingLines } from "react-loader-spinner";

export default function InstructorEducationForm({
  setActive,
  tabs,
  step,
  setStep,
}) {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { instructor } = useSelector((state) => state.instructor);
  const { education, status } = useSelector((state) => state.education);

  useEffect(() => {
    if (instructor) {
      dispatch(getInstructor({ access: token?.access, id: instructor?.id }));
    }
  }, [education]);

  useEffect(() => {
    if (education) {
      setStep(2);
    }
  }, [education]);

  //   education data state
  const [title, setTitle] = useState("");
  const [university, setUniversity] = useState("");
  const [start_date, setStart_date] = useState("");
  const [finish_date, setFinish_date] = useState("");
  const [deploma, setDeploma] = useState("");
  const [description, setDiscription] = useState("");

  const eduData = {
    title,
    university,
    start_date,
    finish_date,
    deploma,
    description,
    instructor_id: instructor?.id,
    access: token?.access,
  };

  const onDiplomaUploadHandler = (e) => {
    setDeploma(e.target.files[0]);
  };

  const onEducationSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addEducation(eduData));
  };
  return (
    <div className="border-2 border-gray-300 rounded-md shadow-2xl shadow-white mt-10">
      <section className="px-20 pt-6">
        <div className="grid grid-cols-3">
          {instructor?.Education.length > 0 &&
            instructor?.Education.map((edu, index) => (
              <div
                key={index}
                className="bg-white mx-3 w-64 min-h-16 py-3 rounded-md border shadow-lg border-gray-600"
              >
                <div className="flex flex-col h-full font-farsi items-center justify-center">
                  <h1 className="text-xl font-semibold">{edu.title}</h1>
                  <div className="text-sm mt-[2px]">
                    <h6>دانشگاه {edu.university}</h6>
                    {edu.start_date.substring(0, 4)} -{" "}
                    {edu.finish_date.substring(0, 4)}
                  </div>

                  <div className="flex items-center justify-evenly mt-2">
                    <button className="ml-3">
                      <AiOutlineDelete className="text-3xl bg-red-500 p-1 text-white rounded-full" />
                    </button>
                    <button>
                      <AiOutlineEdit className="text-3xl bg-blue-500 p-1 text-white rounded-full" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
      <form
        action=""
        className="px-20 py-6"
        onSubmit={onEducationSubmitHandler}
      >
        <div className="divide-y-2 divide-solid divide-gray-400 mx-10">
          <h3 className="mb-5  font-farsi text-xl font-semibold text-gray-800">
            تحصیلات متقاضی
          </h3>
          <div>
            <div className="flex mt-4">
              <div className="flex flex-col space-y-2 mx-10">
                <label
                  htmlFor=""
                  className="font-farsi text-sm font-bold text-gray-600"
                >
                  مقطع تحصیلی
                </label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="لیسانس"
                  className="border-none font-farsi h-12 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 px-2 text-gray-700 transition duration-200 ease-in"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor=""
                  className="font-farsi text-sm font-bold text-gray-600"
                >
                  دانشگاه
                </label>
                <input
                  type="text"
                  name="university"
                  value={university}
                  placeholder="دانشگاه کابل"
                  onChange={(e) => setUniversity(e.target.value)}
                  className="border-none font-farsi h-12 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 px-2 text-gray-700 transition duration-200 ease-in"
                  required
                />
              </div>
            </div>
            <div className="flex mt-4">
              <div className="flex flex-col space-y-2 mx-10">
                <label
                  htmlFor=""
                  className="font-farsi text-sm font-bold text-gray-600"
                >
                  تاریخ شروع
                </label>
                <input
                  type="date"
                  name="start_date"
                  value={start_date}
                  onChange={(e) => setStart_date(e.target.value)}
                  className="border-none font-farsi h-12 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 px-2 text-gray-700 transition duration-200 ease-in"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor=""
                  className="font-farsi text-sm font-bold text-gray-600"
                >
                  تاریخ ختم
                </label>
                <input
                  type="date"
                  name="finish_date"
                  value={finish_date}
                  onChange={(e) => setFinish_date(e.target.value)}
                  className="border-none font-farsi h-12 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 px-2 text-gray-700 transition duration-200 ease-in"
                  required
                />
              </div>
            </div>
            <div className="flex mt-4">
              <div className="flex flex-col space-y-2 mx-10">
                <label
                  htmlFor=""
                  className="font-farsi text-sm font-bold text-gray-600"
                >
                  توضیحات
                </label>
                <textarea
                  name="description"
                  value={description}
                  placeholder="..."
                  onChange={(e) => setDiscription(e.target.value)}
                  className="border-none font-farsi h-36 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 px-2 pt-2 text-gray-700 transition duration-200 ease-in"
                  cols={10}
                ></textarea>
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor=""
                  className="font-farsi text-sm font-bold text-gray-600"
                >
                  عکس دیپلوم
                </label>
                <input
                  type="file"
                  name="deploma"
                  onChange={onDiplomaUploadHandler}
                  className="text-sm text-grey-500
                  file:mr-0 file:py-3 file:px-10
                  file:rounded-full file:border-0
                  file:text-md file:font-semibold  file:text-white
                  file:bg-gradient-to-r file:from-blue-600 file:to-blue-800
                  hover:file:cursor-pointer hover:file:opacity-80"
                  required
                />
              </div>
            </div>
            <div className="mt-4 mx-4 mr-10 flex justify-between">
              {status === "loading" && (
                <Button type="disabled">
                  <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="20"
                    visible={true}
                  />
                </Button>
              )}
              {status !== "loading" && <Button>ذخیره</Button>}
              <button
                type="submit"
                className="mr-10 font-farsi px-6 py-2 border-[2.5px] border-indigo-600 rounded-md"
                onClick={() => setActive(tabs[2])}
              >
                ادامه
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
