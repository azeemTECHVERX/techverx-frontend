// Libraries
import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  handleClick?: () => void;
  isError?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  text,
  handleClick,
  isError,
}) => {
  return (
    <button
      onClick={handleClick ? handleClick : () => {}}
      type={type}
      className={`text-white ${
        isError
          ? "bg-red-600 hover:bg-red-800 hover:scale-105 focus:ring-red-300"
          : "bg-blue-700 hover:bg-blue-800 hover:scale-105 focus:ring-blue-300"
      } transition-all  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0`}
    >
      {text}
    </button>
  );
};

export default Button;
