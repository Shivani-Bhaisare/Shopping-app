import React from 'react'

const Button = ({

  children,
  onClick,
  variant = "primary",
  className = "",
  iconRight = null,
  iconLeft = null,
  type = "button",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-4 text-white font-[Helvetica] transition duration-300";

  const variants = {
    primary: "bg-[#3f1700] hover:bg-black",
    secondary: "bg-white text-black border hover:bg-gray-100",
  };


  return (
       <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {iconLeft && <span>{iconLeft}</span>}
      {children}
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
};


export default Button