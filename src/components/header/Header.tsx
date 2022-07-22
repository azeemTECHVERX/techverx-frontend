import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";

interface HeaderProps {
  btnText: string;
  navigateTo: string;
  actionFunction?: () => void;
}

const Header: React.FC<HeaderProps> = ({ btnText, navigateTo }) => {
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
          <Link to={navigateTo}>
            <Button type="button" text="Navigate" />
          </Link>
        </div>
        {/* <div className="hidden justify-between items-center text-3xl text-gray-700 w-full md:flex md:w-auto md:order-1">
          Posts
        </div> */}
      </div>
    </nav>
  );
};

export default Header;
