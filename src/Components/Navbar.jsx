import React, { useState } from "react";
import { FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full px-4 py-7 md:px-24 flex justify-between items-center border-b border-gray-200 bg-white z-50">
      {/* Logo */}
      <div className="text-2xl flex items-center gap-2 font-[Helvetica]">
        <span className="bg-[#502700] text-[#f1ab47] font-[BeIcons] font-semibold w-10 h-10 rounded-full flex items-center justify-center">
          C
        </span>
        Clothing.
      </div>
      {/* mobile */}
      <div
        className="lg:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      {/* Navigation */}
      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row gap-6 text-black/75 lg:gap-12 absolute lg:static top-20 left-0 w-full lg:w-auto bg-white lg:bg-transparent px-4 md:px-0 py-6 lg:py-0 font-semibold text-[18px] z-40`}
      >
        {[
          "Home",
          "Shop",
          "Women",
          "Men",
          "Accessories",
          "About Us",
          "Contact Us",
          "Blog",
        ].map((item, i) => (
          <li
            key={i}
            className="hover:text-[#502700] border-b-2 border-transparent hover:border-[#502700] cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
      {/* Icons */}
      <div className="hidden lg:flex items-center gap-6 text-[26px] cursor-pointer">
        <FiSearch />
        <LuHeart />
        <FiShoppingCart />
        <FiUser />
      </div>
    </nav>
  );
};

export default Navbar;
