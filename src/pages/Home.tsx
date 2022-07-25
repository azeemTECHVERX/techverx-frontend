import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Home: React.FC = () => {
  const userContext = useContext(UserContext);
  let navigate = useNavigate();
  // Navigating User if user is not logged in!
  useEffect(() => {
    if (!userContext?.user) {
      navigate("/signin");
    }
  });
  return <div>Home</div>;
};

export default Home;
