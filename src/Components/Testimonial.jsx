import React from "react";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import girlsimge6 from "../assets/girlsimg6.png";
const Testimonial = () => {
  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-20">
      {/* 🔹 Top Heading + Arrows */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 px-4 sm:px-8 lg:px-16 xl:px-32 gap-6">
        {/* Left Heading */}
        <div>
          <p className="text-gray-800 font-medium tracking-wide text-base sm:text-lg lg:text-xl">
            Testimonial
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-black/90 mt-2">
            What Our Clients Say
          </h2>
        </div>

        {/* Right Arrows */}
        <div className="flex gap-3">
          <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#f5bd63] rounded-md">
            <VscArrowLeft className="text-black text-xl sm:text-2xl" />
          </button>
          <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#3f1700] rounded-md">
            <VscArrowRight className="text-white text-xl sm:text-2xl" />
          </button>
        </div>
      </div>

      {/* 🔹 Testimonial Card */}
      <div className="max-w-7xl mx-auto border border-black/20 shadow-lg rounded-xl overflow-hidden">
        <div className="w-full bg-[#f6f6f6] flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10 p-6 sm:p-10 lg:p-16">
          {/* Left Image */}
          <div className="relative w-full max-w-[250px] sm:max-w-[280px] md:max-w-[320px]">
            <img
              src={girlsimge6}
              alt="Client"
              className="w-full h-auto object-cover rounded-lg"
            />
            {/* Quote Icon */}
            <div className="absolute top-2 right-2 bg-[#f5bd63] p-2 sm:p-3 rounded-md shadow-md">
              <FaQuoteLeft className="text-black text-lg sm:text-2xl lg:text-3xl" />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Stars */}
            <div className="flex justify-center md:justify-start items-center gap-2 sm:gap-3">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className="text-[#f5bd63] text-base sm:text-lg lg:text-xl"
                />
              ))}
              <span className="ml-2 text-gray-800 font-semibold text-sm sm:text-base lg:text-lg">
                5.0
              </span>
            </div>

            {/* Text */}
            <p className="text-gray-600 mt-4 sm:mt-6 leading-relaxed text-sm sm:text-base lg:text-lg font-medium">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto.
            </p>

            {/* Name + Role */}
            <div className="mt-4 sm:mt-6">
              <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                Leslie Alexander
              </p>
              <p className="text-gray-500 text-xs sm:text-sm lg:text-base font-medium">
                Fashion Enthusiast
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
