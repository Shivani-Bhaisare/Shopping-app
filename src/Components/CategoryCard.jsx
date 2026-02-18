import React from "react";
import girlsimg1 from "../assets/girlsimg1 (2).png";
import menimg2 from "../assets/menimg2 (2).png";
import img3 from "../assets/img3.png";
const CategoryCard = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 px-4 sm:px-8 lg:px-24 py-8 sm:py-12 lg:py-14 bg-white">
      
      {/* Women's Section */}
      <div className="flex-1 flex flex-col sm:flex-row items-center bg-[#f6f6f6] shadow p-6 sm:p-10 lg:p-14 gap-6">
        {/* Text */}
        <div className="flex flex-col gap-4 w-full sm:w-1/2">
          <span className="bg-white px-4 py-2 sm:py-3 rounded-full text-lg sm:text-xl font-semibold w-fit">
            2500+ Items
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans text-black font-semibold">
            For Women’s
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-medium">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do
          </p>
          <div className="text-base sm:text-lg text-gray-500 font-semibold font-sans space-y-1 sm:space-y-2">
            <p>Blazers</p>
            <p>T-Shirts and Blouses</p>
            <p>Dresses</p>
            <p>Jackets & Coats</p>
            <p>Jeans</p>
            <p>Knit</p>
            <p>Sarees</p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full sm:w-1/2 flex items-center justify-center">
          <img src={girlsimg1} alt="Women" className="w-full h-auto object-contain" />
        </div>
      </div>

      {/* Right Side: Men + Accessories */}
      <div className="flex-1 flex flex-col gap-6">
        
        {/* Men Section */}
        <div className="bg-[#f6f6f6] px-6 sm:px-8 lg:px-10 py-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <span className="bg-white px-4 py-2 sm:py-3 rounded-full text-lg sm:text-xl font-semibold w-fit">
              1500+ Items
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans text-black font-semibold mt-4">
              For Men’s
            </h2>
            <div className="text-base sm:text-lg text-gray-500 mt-2 font-semibold font-sans space-y-1 sm:space-y-2">
              <p>Blazers</p>
              <p>T-Shirts and Shirts</p>
              <p>Jackets & Coats</p>
              <p>Jeans</p>
            </div>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center w-full sm:w-72">
            <img src={menimg2} alt="Men" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Accessories Section */}
        <div className="bg-[#f6f6f6] px-6 sm:px-8 lg:px-10 py-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <span className="bg-white px-4 py-2 sm:py-3 rounded-full text-lg sm:text-xl font-semibold w-fit">
              800+ Items
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans text-black font-semibold mt-4">
              Accessories
            </h2>
            <div className="text-base sm:text-lg text-gray-500 font-semibold mt-2 font-sans space-y-1 sm:space-y-2">
              <p>Handbags</p>
              <p>Watches</p>
              <p>Sunglasses</p>
              <p>Hats</p>
            </div>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center w-full sm:w-72">
            <img src={img3} alt="Accessories" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
