import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <nav className=" border-gray-200 px-2 sm:px-4 py-5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <img
            src="https://www.techverx.com/wp-content/uploads/2021/05/logo-grey.png"
            className="mr-3 h-6 sm:h-9"
            alt="Techverx Logo"
          />
          <span className="self-center text-xl text-gray-200 font-semibold whitespace-nowrap">
            Techverx
          </span>
        </div>
        <div className="flex md:order-2">
          <Link
            to={location.pathname.includes("signup") ? "/signin" : "/signup"}
          >
            <Button
              type="button"
              text={
                location.pathname.includes("signup") ? "Sign In" : "Sign Up"
              }
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
