import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button";
import { addIDCart } from "../../features/IdentitiCart/IdCartSlice";
import { RotatingLines } from "react-loader-spinner";

export default function InstructorCartForm({ tabs, setActive, setStep }) {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { instructor } = useSelector((state) => state.instructor);
  const { status } = useSelector((state) => state.idCart);
  const { idCart } = useSelector((state) => state.idCart);
  console.log(idCart);
  const [cartType, setCartType] = useState("");
  const [passFront, setPassFront] = useState("");
  const [passBack, setPassBack] = useState("");
  const [idFront, setIdFront] = useState("");
  const [idBack, setIdBack] = useState("");

  const carts = ["پاسپورت", "تذکره"];

  const IDdata = {
    cartType,
    passFront,
    passBack,
    idFront,
    idBack,
    access: token?.access,
    instructor_id: instructor?.id,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addIDCart(IDdata));
    setStep(4);
    setActive(tabs[4]);
  };

  useEffect(() => {
    if (idCart) {
      setStep(4);
    }
  }, [idCart]);

  return (
    <div className="border-2 border-gray-300 rounded-md shadow-2xl shadow-white mt-10">
      <form
        action=""
        className="px-20 py-6"
        onSubmit={onSubmit}
        encType="multipart/form-data"
      >
        <div className="divide-y-2 divide-solid divide-gray-400 mx-10">
          <h3 className="mb-5  font-farsi text-xl font-semibold text-gray-800">
            کارت هویت متقاضی
          </h3>

          <div>
            <div className="flex flex-col mt-4 space-y-2 mx-10">
              <label
                htmlFor=""
                className="font-farsi text-sm font-bold text-gray-600"
              >
                نوعیت کارت هویت
              </label>
              <select
                name="cartType"
                className="border-none font-farsi h-12 w-[23rem] rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 px-2 text-gray-700 transition duration-200 ease-in"
                onChange={(e) => setCartType(e.target.value)}
                id=""
              >
                <option value="">نوعیت کارت هویت. </option>
                {carts.map((cart, index) => (
                  <option value={cart} key={index}>
                    {cart}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex mt-4">
              {cartType === "پاسپورت" ? (
                <>
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor=""
                      className="font-farsi text-sm font-bold text-gray-600"
                    >
                      صفحه اول پاسپورت
                    </label>
                    <input
                      type="file"
                      name="passFront"
                      onChange={(e) => setPassFront(e.target.files[0])}
                      className="text-sm text-grey-500
                  file:mr-0 file:py-3 file:px-10
                  file:rounded-full file:border-0
                  file:text-md file:font-semibold  file:text-white
                  file:bg-gradient-to-r file:from-blue-600 file:to-blue-800
                  hover:file:cursor-pointer hover:file:opacity-80"
                      required
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor=""
                      className="font-farsi text-sm font-bold text-gray-600"
                    >
                      صفحه دوم پاسپورت
                    </label>
                    <input
                      type="file"
                      name="passBack"
                      onChange={(e) => setPassBack(e.target.files[0])}
                      className="text-sm text-grey-500
                  file:mr-0 file:py-3 file:px-10
                  file:rounded-full file:border-0
                  file:text-md file:font-semibold  file:text-white
                  file:bg-gradient-to-r file:from-blue-600 file:to-blue-800
                  hover:file:cursor-pointer hover:file:opacity-80"
                      required
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor=""
                      className="font-farsi text-sm font-bold text-gray-600"
                    >
                      عکس روی تذکره
                    </label>
                    <input
                      type="file"
                      name="idFront"
                      onChange={(e) => setIdFront(e.target.files[0])}
                      className="text-sm text-grey-500
                  file:mr-0 file:py-3 file:px-10
                  file:rounded-full file:border-0
                  file:text-md file:font-semibold  file:text-white
                  file:bg-gradient-to-r file:from-blue-600 file:to-blue-800
                  hover:file:cursor-pointer hover:file:opacity-80"
                      required
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor=""
                      className="font-farsi text-sm font-bold text-gray-600"
                    >
                      عکس پشت تذکره
                    </label>
                    <input
                      type="file"
                      name="idBack"
                      onChange={(e) => setIdBack(e.target.files[0])}
                      className="text-sm text-grey-500
                  file:mr-0 file:py-3 file:px-10
                  file:rounded-full file:border-0
                  file:text-md file:font-semibold  file:text-white
                  file:bg-gradient-to-r file:from-blue-600 file:to-blue-800
                  hover:file:cursor-pointer hover:file:opacity-80"
                      required
                    />
                  </div>
                </>
              )}
            </div>
            <div className="mt-4 mr-10">
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
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
