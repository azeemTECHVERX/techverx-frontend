// Libraries
import React from "react";

interface FormLabelProps {
  forInput: string | undefined;
  text: string;
}

const FormLabel: React.FC<FormLabelProps> = ({ text, forInput }) => {
  return (
    <label
      htmlFor={forInput}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {text}
    </label>
  );
};

export default FormLabel;
