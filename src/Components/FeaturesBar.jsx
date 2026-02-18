import React from "react";
import { PiCodesandboxLogo } from "react-icons/pi";
import { TbBoxMultiple } from "react-icons/tb";
import { LuHeadphones } from "react-icons/lu";

const FeaturesBar = () => {
      const features = [
      {
      icon: <PiCodesandboxLogo className="text-5xl text-[#462716]" />,
      title: "Free Shipping",
      subtitle: "Free shipping for order above $180",
    },
    {
      icon: <TbBoxMultiple className="text-5xl text-[#462716]" />,
      title: "Flexible Payment",
      subtitle: "Multiple secure payment options",
    },
    {
      icon: <LuHeadphones className="text-5xl text-[#462716]" />,
      title: "24x7 Support",
      subtitle: "We support online all days.",
    },
  ];
  return (
    <div className="w-full flex mt-4 flex-col md:flex-row items-center justify-around py-6 gap-6 bg-white">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="flex items-center sm:items-start gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          {/* Icon with small circle behind */}
          <div className="relative flex-shrink-0">
            {/* Small circle */}
            <div className="h-7 w-7 bg-[#f2bd6d] rounded-full absolute top-2 left-2 z-0" />
            {/* Large icon overlapping */}
            <div className="relative z-10">{feature.icon}</div>
          </div>

          {/* Text content */}
          <div className="flex flex-col">
            <h4 className="font-[Helvetica] text-lg sm:text-xl text-black/80 font-semibold leading-tight">
              {feature.title}
            </h4>
            <p className="text-sm sm:text-base font-[Helvetica] text-gray-500 leading-snug">
              {feature.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>

  );
};

export default FeaturesBar;
