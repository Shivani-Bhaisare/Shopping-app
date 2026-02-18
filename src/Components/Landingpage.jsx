import React from "react";
import { VscArrowRight } from "react-icons/vsc";
import shoppingimg from "../assets/shoppingimg.png";
import Button from "../Components/Button";
const Landingpage = () => {
  return (
    <section className="w-full bg-[#f6f6f6] px-4 sm:px-8 md:px-32 py-14 sm:py-20 h-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* ✅ Left Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-white px-4 py-2 rounded-full text-base font-[Helvetica] text-black/65 shadow-sm">
            <span className="text-base sm:text-xl md:text-2xl text-black/90 font-[Helvetica]">
              50% OFF
            </span>
            <span className="text-base font-[Helvetica] sm:text-xl text-black/70">
              Summer Super Sale
            </span>
          </div>
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 pt-4 ">
            Step into Style:Your <br /> Ultimate Fashion Destination
          </h1>
          {/* Subheading */}
          <p className="text-gray-600 font-medium text-sm sm:text-base md:text-lg pt-4 px-2 sm:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          {/*Reusable CTA Button */}
          <Button iconRight={<VscArrowRight />} className="mx-auto md:mx-0 active:scale-95">
            Shop Now
          </Button>
        </div>
        {/* ✅ Right Side Image */}
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-16">
          <div className="w-full max-w-[420px] h-[340px] sm:h-[360px] md:h-[540px] border-4 border-black">
            <img
              src={shoppingimg}
              alt=""
              className="w-full h-full object-cover p-1 shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landingpage;
