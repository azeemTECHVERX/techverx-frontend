import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ type, text }) => {
  return (
    <button
      type={type}
      className="text-white bg-blue-700 hover:bg-blue-800 hover:scale-105 transition-all  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
    >
      {text}
    </button>
  );
};

export default Button;
