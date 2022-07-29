// Libraries
import React, { useState } from "react";

const ErrorSnackbar: React.FC<any> = ({ errorMsg }) => {
  const [show, setShow] = useState<boolean>(true);
  if (show) {
    return (
      <div className="flex shadow-md gap-6 rounded-lg bg-red-200  mt-10 mb-10 overflow-hidden max-w-2xl">
        <div className="flex flex-1 flex-col p-4 border-l-8 border-red-500">
          <span className="text-2xl">Error</span>
          <span className="text-xs dark:text-gray-400">{errorMsg}</span>
        </div>
        <div className="text-gray-400  hover:text-gray-600 transition-all ease-in flex items-center justify-center m-5">
          <svg
            aria-hidden="true"
            onClick={() => setShow(false)}
            className="w-5 h-5 hover:cursor-pointer"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    );
  }

  return <React.Fragment />;
};

export default ErrorSnackbar;
