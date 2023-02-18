import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addExp } from "../../features/experience/experienceSlice";
import { getInstructor } from "../../features/instructor/instructorSlice";
import Button from "../Button";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { RotatingLines } from "react-loader-spinner";

export default function InstructorExperienceForm({ setActive, tabs, setStep }) {
  const dispatch = useDispatch();
  const { experience, status: loading } = useSelector(
    (state) => state.experience
  );
  const { token, status, user } = useSelector((state) => state.auth);
  const { instructor } = useSelector((state) => state.instructor);

  // experience data state

  useEffect(() => {
    if (instructor) {
      dispatch(getInstructor({ access: token?.access, id: instructor?.id }));
    }
  }, [experience]);

  useEffect(() => {
    if (experience) {
      setStep(3);
    }
  }, [experience]);

  const [organization, setOrganization] = useState("");
  const [position, setPosition] = useState("");
  const [from_date, setFrom_date] = useState("");
  const [to_date, setTo_date] = useState("");
  const [desc, setDesc] = useState("");
  const [documentation, setDocumentation] = useState("");

  const expData = {
    position,
    organization,
    from_date,
    to_date,
    desc,
    documentation,
    instructor_id: instructor?.id,
    access: token?.access,
  };

  const onExperienceFileChangeHandler = (e) => {
    setDocumentation(e.target.files[0]);
  };

  const onExperienceSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addExp(expData));
  };

  return (
    <div className="border-2 border-gray-300 rounded-md shadow-2xl shadow-white mt-10">
      <section className="px-20 pt-6">
        <div className="grid grid-cols-3">
          {instructor?.exprience?.length > 0 &&
            instructor?.exprience?.map((exp, index) => (
              <div
                key={index}
                className="bg-white mx-3 w-64 min-h-16 py-3 rounded-md border shadow-lg border-gray-600"
              >
                <div className="flex flex-col h-full font-farsi items-center justify-center">
                  <h1 className="text-xl font-semibold">{exp.organization}</h1>
                  <div className="text-sm mt-[2px]">
                    <h6> {exp.position}</h6>
                    {exp.from_date.substring(0, 4)} -{" "}
                    {exp.to_date.substring(0, 4)}
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
        onSubmit={onExperienceSubmitHandler}
        encType="multipart/form-data"
      >
        <div className="divide-y-2 divide-solid divide-gray-400 mx-10">
          <h3 className="mb-5  font-farsi text-xl font-semibold text-gray-800">
            سوابق کاری متقاضی
          </h3>

          <div>
            <div className="flex mt-4">
              <div className="flex flex-col space-y-2 mx-10">
                <label
                  htmlFor=""
                  className="font-farsi text-sm font-bold text-gray-600"
                >
                  شرکت/ کمپنی
                </label>
                <input
                  type="text"
                  name="organization"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  required
                  className="border-none font-farsi h-12 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 px-2 text-gray-700 transition duration-200 ease-in"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor=""
                  className="font-farsi text-sm font-bold text-gray-600"
                >
                  موقعیت
                </label>
                <input
                  type="text"
                  name="position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
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
                  name="from_date"
                  value={from_date}
                  onChange={(e) => setFrom_date(e.target.value)}
                  required
                  className="border-none font-farsi h-12 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 px-2 text-gray-700 transition duration-200 ease-in"
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
                  name="to_date"
                  value={to_date}
                  onChange={(e) => setTo_date(e.target.value)}
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
                  name="desc"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="border-none font-farsi h-36 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 px-2 pt-2 text-gray-700 transition duration-200 ease-in"
                  cols={10}
                ></textarea>
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor=""
                  className="font-farsi text-sm font-bold text-gray-600"
                >
                  عکس
                </label>
                <input
                  type="file"
                  name="documentation"
                  onChange={onExperienceFileChangeHandler}
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
            <div className="mt-4 mr-10 flex justify-between">
              {loading === "loading" && (
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
              {loading !== "loading" && <Button>ذخیره</Button>}

              <button
                type="submit"
                className="mr-10 font-farsi px-6 py-2 border-[2.5px] border-indigo-600 rounded-md"
                onClick={() => setActive(tabs[3])}
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
