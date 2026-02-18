import React from "react";
import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { TbAlignBoxCenterMiddleFilled } from "react-icons/tb";

import { IoChevronDownSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#3f1700] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand + about + socials */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="text-[#502700] bg-[#f1ab47] font-[BeIcons] font-bold w-11 h-11 rounded-full grid place-items-center text-xl">
                C
              </div>
              <span className="text-3xl font-semibold">Clothing.</span>
            </div>

            <p className="mt-5 text-white/50 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-4 text-xl">
              {[
                <FaFacebookSquare />,
                <TbAlignBoxCenterMiddleFilled />,
                <FaYoutube />,
                <FaTwitter />,
                <FaInstagram />,
              ].map((Icon, i) => (
                <span
                  key={i}
                  className="size-10 rounded-full cursor-pointer bg-white/10 backdrop-blur-[1px] grid place-items-center hover:bg-[#f1ab47] transition"
                >
                  {Icon}
                </span>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-white/50">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Services</h4>
            <ul className="space-y-3 text-white/50">
              <li>
                <a href="#" className="hover:underline">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Return
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Our Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Information</h4>
            <ul className="space-y-3 text-white/50 ">
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  User Terms &amp; Condition
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Return Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info (if आप 5th कॉलम अलग चाहते हैं) */}
          {/*  → ऊपर grid-cols-5 है, brand 2 cols ले रहा है, बाक़ी 3. 
              यदि Contact Info अलग चाहिए तो md:grid-cols-6 कर दें और एक extra col जोड़ें */}
        </div>

        {/* slim divider */}
        <div className="mt-10 border-t-2 border-[#af823e]"></div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/85">
          <p>
            Copyright © 2024 Clothing Website Design. All
            Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <button className="flex  text-[#af823e] items-center gap-1 hover:text-white">
              English <IoChevronDownSharp /> 
            </button>
            <button className="flex text-[#af823e] items-center gap-1 hover:text-white">
              USD <IoChevronDownSharp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
