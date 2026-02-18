import React from "react";
import { TbMessageReportFilled } from "react-icons/tb";


const Newsletter = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-3xl mx-auto text-center px-6">
        {/* Small Heading */}
        <p className="text-gray-800 text-xl mb-4 font-medium">Our Newsletter</p>

        {/* Main Heading */}
        <h2 className="text-4xl mb-8 font-semibold text-gray-900 mt-5">
          Subscribe to Our Newsletter to Get <br/> Updates to Our Latest Collection
        </h2>

        {/* Subtext */}
        <p className="mt-4 mb-8  font-medium text-gray-500 text-base md:text-lg">
          Get 20% off on your first order just by subscribing to our newsletter
        </p>

        {/* Input + Button */}
        <form className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Email Input */}
          <div className="flex items-center w-full sm:w-auto border border-gray-300 overflow-hidden">
            <span className="bg-[#f5be62] px-2 py-2 m-2">
              <TbMessageReportFilled className="text-2xl" />


            </span>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-1 px-4 py-2 outline-none text-gray-900"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#3d1a0a] text-white px-6 py-4 font-medium hover:bg-black transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
