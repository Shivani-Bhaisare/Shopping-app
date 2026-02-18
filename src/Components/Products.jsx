import React from "react";

const Products = () => {
  return (
    <div className="w-full bg-white px-4 sm:px-8 lg:px-16 xl:px-28 py-8">
      {/* Heading + Buttons */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        
        {/* Heading */}
        <div>
          <h3 className="text-gray-800 font-medium text-lg sm:text-xl lg:text-2xl mb-3">
            Our Products
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-black/90 leading-snug">
            Our Top Seller Products
          </h2>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 font-medium text-base sm:text-lg lg:text-xl text-black/85">
          <button className="bg-amber-950 text-white px-4 sm:px-5 py-2 sm:py-3 rounded">
            All
          </button>
          <button className="border px-3 sm:px-4 py-2 sm:py-3 rounded">
            Women
          </button>
          <button className="border px-3 sm:px-4 py-2 sm:py-3 rounded">
            Men
          </button>
          <button className="border px-3 sm:px-4 py-2 sm:py-3 rounded">
            Accessories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
