// Libraries
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// Components
import Button from "../button/Button";
import CreatePostForm from "../createPostForm/CreatePostForm";
// Hooks
import { useLocation } from "react-router-dom";
// Context
import UserContext from "../../context/UserContext";
// Utils
import signOutUser from "../../utils/signOutUser";
import EmptyModal from "../emptyModal/EmptyModal";

const Header: React.FC = () => {
  const location = useLocation();
  const userContext = useContext(UserContext);
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <nav className=" border-gray-200 px-2 sm:px-4 py-5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <img
            src="https://www.techverx.com/wp-content/uploads/2021/05/logo-grey.png"
            className="mr-3 h-6 sm:h-9"
            alt="Techverx Logo"
          />
          <span className="self-center text-2xl text-gray-200 font-semibold whitespace-nowrap">
            Techverx
          </span>
        </div>
        <div className="flex md:order-2">
          {userContext?.user ? (
            <div className="space-x-3">
              <Button
                type="button"
                text="Create Post"
                handleClick={() => setOpenModal(true)}
              />
              <Button
                type="button"
                text="Sign Out"
                handleClick={() => signOutUser(userContext)}
              />
            </div>
          ) : (
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
          )}
        </div>
      </div>
      <EmptyModal isOpen={openModal} closeModal={() => setOpenModal(false)}>
        <CreatePostForm closeModal={setOpenModal} />
      </EmptyModal>
    </nav>
  );
};

export default Header;
