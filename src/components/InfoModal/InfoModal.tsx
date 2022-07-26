// Libraries
import React, { useState } from "react";
import { motion } from "framer-motion";
// Components
import Button from "../button/Button";
interface InfoModalInterface {
  title: string;
  body: string;
  isOpen: boolean;
  isError: boolean;
  action?: () => void;
}

const InfoModal: React.FC<InfoModalInterface> = ({
  isOpen,
  body,
  title,
  isError,
  action,
}) => {
  const [opened, setOpened] = useState(isOpen);

  const handleClick = () => {
    setOpened(false);
    if (action) {
      action();
    }
  };

  if (opened) {
    return (
      <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex">
        <div className="h-screen w-screen bg-black absolute opacity-50"></div>
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            exit={{ opacity: 0 }}
          >
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex justify-between items-start p-4 rounded-t border-b">
                <h3
                  className={`text-xl font-semibold ${
                    isError ? "text-red-600" : "text-gray-900"
                  }`}
                >
                  {title}
                </h3>
                <button
                  onClick={handleClick}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
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
                </button>
              </div>
              <div className="p-6 space-y-6">
                <p
                  className={`text-base leading-relaxed ${
                    isError ? "text-red-700" : "text-gray-700"
                  } `}
                >
                  {body}
                </p>
              </div>
              <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
                <Button
                  text="Okay"
                  type="button"
                  handleClick={handleClick}
                  isError={isError}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
  return <React.Fragment />;
};

export default InfoModal;
