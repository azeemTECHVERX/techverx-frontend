import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Header from "../components/header/Header";

const Home: React.FC = () => {
  const userContext = useContext(UserContext);
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
      <div>Home</div>
    </div>
  );
};

export default Home;
