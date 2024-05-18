import React from "react";
import img1 from "../../src/assets/home/slide1.jpg";
import SectionTitle from "./SectionTitle";
function Recommended() {
  return (
    <div className="max-w-7xl mx-auto px-32 pb-20">
      <SectionTitle
        title={"Should try"}
        subTitle={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid grid-cols-3 gap-6  ">
        <div className="max-w-xs   shadow-md dark:bg-gray-900 bg-gray-100 text-gray-100 dark:text-gray-800">
          <img
            src={img1}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl text-black font-semibold text-center ">
                Caeser Salad
              </h2>
              <p className="text-black text-center dark:text-gray-800">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
            </div>
            <button
              type="button"
              className="flex w-fit items-center text-center mx-auto justify-center px-6  p-3 font-semibold tracking-wide  bg-gray-200 dark:bg-violet-600 text-yellow-400 dark:text-gray-50 rounded-md border-b-2 border-yellow-400"
            >
              Add To Card
            </button>
          </div>
        </div>
        <div className="max-w-xs   shadow-md dark:bg-gray-900 bg-gray-100 text-gray-100 dark:text-gray-800">
          <img
            src={img1}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl text-black font-semibold text-center ">
                Caeser Salad
              </h2>
              <p className="text-black text-center dark:text-gray-800">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
            </div>
            <button
              type="button"
              className="flex w-fit items-center text-center mx-auto justify-center px-6  p-3 font-semibold tracking-wide  bg-gray-200 dark:bg-violet-600 text-yellow-400 dark:text-gray-50 rounded-md border-b-2 border-yellow-400"
            >
              Add To Card
            </button>
          </div>
        </div>
        <div className="max-w-xs   shadow-md dark:bg-gray-900 bg-gray-100 text-gray-100 dark:text-gray-800">
          <img
            src={img1}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl text-black font-semibold text-center ">
                Caeser Salad
              </h2>
              <p className="text-black text-center dark:text-gray-800">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
            </div>
            <button
              type="button"
              className="flex w-fit items-center text-center mx-auto justify-center px-6  p-3 font-semibold tracking-wide  bg-gray-200 dark:bg-violet-600 text-yellow-400 dark:text-gray-50 rounded-md border-b-2 border-yellow-400"
            >
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
