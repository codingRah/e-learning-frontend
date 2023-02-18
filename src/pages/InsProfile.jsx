import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import {
  InstructorProfileForm,
  InstructorEducationForm,
  InstructorExperienceForm,
  InstructorCartForm,
  InstructorProfileProcess,
} from "../components/Forms";

import { RiUserFollowLine } from "react-icons/ri";
import { MdCastForEducation } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { AiOutlineIdcard, AiFillCheckCircle } from "react-icons/ai";
import { ProgressBar } from "../components";
import { VscServerProcess } from "react-icons/vsc";

export default function InsProfile() {
  const { completed } = useSelector((state) => state.instructor);

  const tabs = ["پروفایل", "تحصیلات", "سوابق کاری", "کارت هویت", "بررسی حساب"];
  const [active, setActive] = useState(tabs[0]);
  const [step, setStep] = useState(0);
  //  instructor profile state

  // change progress card handler
  const progressHandler = (index) => {
    if (completed) {
      setActive(tabs[index]);
    }
  };

  useEffect(() => {
    if (completed) {
      setActive(tabs[1]);
      setStep(1);
    }
  }, [completed]);

  return (
    <section className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-3">
          <button className="font-farsi px-4 py-2 border-[2.5px] border-gray-300">
            خروج
          </button>
          <Link className="text-2xl font-semibold" to={"/"}></Link>
        </div>
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h2 className="font-farsi text-xl font-semibold">{active}</h2>
          <div className="px-6 py-[3px] font-farsi font-semibold text-lg bg-white rounded-full">
            {tabs.length} / {tabs.indexOf(active) + 1}
          </div>
        </div>
        <div className="max-w-6xl mx-auto my-4">
          {/* progress bar */}
          <ProgressBar status={tabs.indexOf(active) + 1} />
        </div>
        <div className="flex items-center justify-center">
          {tabs.map((item, index) => (
            <div
              className={`mr-4 font-farsi w-64  rounded-md cursor-pointer border-2 ${
                step > index
                  ? "border-indigo-600 py-8 bg-white border-[2.5px]"
                  : "border-gray-300 py-8"
              }  flex justify-around items-center ${
                active === item ? "bg-white border-gray-600 border-[2.5px]" : ""
              }`}
              onClick={() => progressHandler(index)}
              key={index}
            >
              <div className="flex flex-col items-end">
                {step > index ? (
                  <div className="relative">
                    <AiFillCheckCircle className="text-2xl absolute -top-7 -left-8 text-indigo-600 " />
                  </div>
                ) : (
                  <></>
                )}
                <div className="flex justify-center items-center">
                  <span className="ml-3 text-lg font-semibold w-24">
                    {item}
                  </span>
                  {item === "پروفایل" ? (
                    <RiUserFollowLine className="text-5xl p-2" />
                  ) : item === "تحصیلات" ? (
                    <MdCastForEducation className="text-5xl p-2" />
                  ) : item === "سوابق کاری" ? (
                    <GiNetworkBars className="text-5xl p-2" />
                  ) : item === "کارت هویت" ? (
                    <AiOutlineIdcard className="text-5xl p-2" />
                  ) : (
                    <VscServerProcess className="text-5xl p-2" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          {active === "پروفایل" ? (
            <InstructorProfileForm />
          ) : active === "تحصیلات" ? (
            <InstructorEducationForm
              setActive={setActive}
              tabs={tabs}
              step={step}
              setStep={setStep}
            />
          ) : active === "سوابق کاری" ? (
            <InstructorExperienceForm
              setActive={setActive}
              tabs={tabs}
              setStep={setStep}
            />
          ) : active === "کارت هویت" ? (
            <InstructorCartForm
              setStep={setStep}
              setActive={setActive}
              tabs={tabs}
            />
          ) : (
            <InstructorProfileProcess />
          )}
        </div>
      </div>
    </section>
  );
}
