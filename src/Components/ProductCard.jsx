import React from 'react'
import { VscArrowRight } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import girlsimg5 from "../assets/girlsimg5 (2).png"
import menimg3 from "../assets/menimg3 (2).png"
const ProductCard = () => {
    const navigate = useNavigate();

  return (
<section className="py-10 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-5 sm:px-10 lg:px-16">
        
        {/* Men's Collection */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start bg-[#f6f6f6] p-6 sm:p-9 relative min-h-[350px] lg:min-h-[400px] shadow-xl">
          {/* Left Content */}
          <div className="w-full sm:w-1/2 sm:pr-6 text-center sm:text-left">
            <p className="text-lg sm:text-xl font-medium text-gray-600">Flat 20% Discount</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mt-2">
              Men’s Latest <br className="hidden sm:block" /> Collection
            </h2>
            <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* ✅ Button Navigate */}
            <Button
              variant="warning"
              iconRight={<VscArrowRight />}
              className="mt-5 bg-[#f5bd63] text-black active:scale-95"
              onClick={() => navigate("/men")}
            >
              Shop Now
            </Button>
          </div>

          {/* Right Image */}
          <div className="w-full sm:w-1/2 h-56 sm:h-full mt-6 sm:mt-0">
            <img src={menimg3} alt="" className="w-full h-full object-cover  " />
          </div>
        </div>

        {/* Women's Collection */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start bg-[#f5bd63] p-6 sm:p-9 relative min-h-[350px] lg:min-h-[400px] shadow-xl">
          {/* Left Content */}
          <div className="w-full sm:w-1/2 sm:pr-6 text-center sm:text-left">
            <p className="text-lg sm:text-xl font-medium text-gray-600">Flat 25% Discount</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mt-2">
              Women’s <br className="hidden sm:block" /> Latest Fashion
            </h2>
            <p className="text-gray-700 mt-4 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* ✅ Button Navigate */}
            <Button
              variant="dark"
              iconRight={<VscArrowRight />}
              className="mt-5 bg-[#3f1700] text-white active:scale-95"
              onClick={() => navigate("/women")}
            >
              Shop Now
            </Button>
          </div>

          {/* Right Image */}
          <div className="w-full sm:w-1/2 h-56 sm:h-full mt-6 sm:mt-0">
            <img src={girlsimg5} alt="Women Collection" className="w-full h-full object-cover object-top rounded-xl" />
          </div>
        </div>

      </div>
    </section>
  );
};
  

export default ProductCard