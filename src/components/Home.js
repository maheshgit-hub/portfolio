import React from "react";
import Lottie from "lottie-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "./Typed";
import Website from "../Lottie/Website.json";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col justify-center">
            <p className="text-pink-600">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
              Mahesh Gaikwad
            </h1>
            <Typed />
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              I’m a full-stack developer specializing in building (and
              occasionally designing) exceptional digital experiences. Currently,
              I’m focused on building responsive full-stack web applications.
            </p>
            <button className=" w-1/4 text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
          <div className=" w-full sm:w-1/3 mt-8 sm:mt-0">
            <Lottie animationData={Website} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
