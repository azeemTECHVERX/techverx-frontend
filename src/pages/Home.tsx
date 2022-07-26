import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Post from "../components/Post/Post";
import ProfileCard from "../components/profile/ProfileCard";
import PageAnimator from "../components/animators/PageAnimator";

const Home: React.FC = () => {
  let navigate = useNavigate();
  // Navigating User if user is not logged in!
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      navigate("/signin");
    }
  });
  return (
    <div>
      <Header />
      <PageAnimator>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 p-5">
          <div className="p-14 rounded-lg">
            <ProfileCard />
          </div>
          <div className="col-span-1 lg:col-span-3 p-14 rounded-lg">
            <div className="flex justify-center"></div>
            <Post />
          </div>
        </div>
      </PageAnimator>
    </div>
  );
};

export default Home;
