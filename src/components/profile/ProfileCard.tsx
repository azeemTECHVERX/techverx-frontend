// Libraries
import React, { useContext } from "react";
// Context
import UserContext from "../../context/UserContext";
const ProfileCard: React.FC = () => {
  const userContext = useContext(UserContext);
  return (
    <div className="rounded-xl relative">
      <div className="w-full h-full bg-white rounded-2xl opacity-50 absolute z-10"></div>
      <div className="p-10">
        <div className="flex flex-col items-center pb-10 relative z-20">
          <div className="mb-3 w-24 h-24 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 shadow-lg flex items-center justify-center">
            <h1 className="text-4xl">
              {userContext?.user?.name?.toUpperCase().substring(0, 2)}
            </h1>
          </div>
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            {userContext?.user?.name?.toUpperCase()}
          </h5>
          <span className="text-sm text-gray-500">User</span>
          <div className="flex mt-4 space-x-3 lg:mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
