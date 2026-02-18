import React from 'react'
import girlsimg4 from "../assets/girlsimg4 (2).png"
import { VscArrowRight } from "react-icons/vsc";
import Button from "./Button";

const OfferSection = () => {
  return (
        <section className="bg-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-5 lg:px-16">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={girlsimg4}
            alt="Offer"
            className="w-[80%] sm:w-[70%] md:w-full lg:w-[90%] h-auto object-contain max-h-[450px]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pl-10">
          <p className="text-gray-500 tracking-wide text-lg sm:text-xl lg:text-2xl font-[Helvetica]">
            Limited Time Offers
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 pt-6">
            25% Off All Fashion <br className="hidden sm:block" /> Favorites - Limited Time!
          </h1>
          <p className="text-gray-600 font-medium text-sm sm:text-base md:text-lg pt-6 px-2 sm:px-0 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br className="hidden sm:block" /> elit, sed do eiusmod tempor incididunt.
          </p>

          <Button
            iconRight={<VscArrowRight />}
            className="mt-8"
            onClick={() => alert("Button clicked!")}
          >
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default OfferSection;
