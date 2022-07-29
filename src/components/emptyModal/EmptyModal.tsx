// Libraries
import React from "react";
// Components
import Button from "../button/Button";
import SpringAnimator from "../animators/SpringAnimator";
interface EmptyModalInterface {
  isOpen: boolean;
  children?: any;
  closeModal?: () => void;
}

const EmptyModal: React.FC<EmptyModalInterface> = ({
  isOpen,
  children,
  closeModal,
}) => {
  if (isOpen) {
    return (
      <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex">
        <div
          onClick={closeModal}
          className="h-screen w-screen bg-black absolute opacity-50"
        ></div>
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <SpringAnimator>
            <div className="backdrop-filter backdrop-blur-md bg-opacity-25 bg-gray-50 rounded-lg shadow">
              <div className="flex justify-between items-start p-4 rounded-t">
                <button
                  onClick={closeModal}
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
              <div className="p-6 flex items center justify-center flex-col">
                {children}
              </div>
              <div className="flex items-center p-6 space-x-2 rounded-b ">
                <Button text="Cancel" type="button" handleClick={closeModal} />
              </div>
            </div>
          </SpringAnimator>
        </div>
      </div>
    );
  }
  return <React.Fragment />;
};

export default EmptyModal;
