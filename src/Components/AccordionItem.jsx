import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionItem = ({ isOpen, onToggle, question, answer }) => {
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-6 py-5 text-left
          ${isOpen ? "bg-[#3f1700] text-white" : "bg-white text-gray-900"}
        `}
      >
        <span className="text-lg md:text-xl font-medium">{question}</span>
        {isOpen ? (
          <FiMinus className="text-[#f5bd63] text-2xl shrink-0" />
        ) : (
          <FiPlus className="text-gray-500 text-2xl shrink-0" />
        )}
      </button>

      {/* Body */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? "max-h-40" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="px-6 pb-6 bg-[#3f1700]">
          <p className="text-white/90 text-lg md:text-[16px] leading-6">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
