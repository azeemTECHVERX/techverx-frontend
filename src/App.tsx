// Librariess
import React, { useContext, useEffect } from "react";
import { NavigateFunction, Route, Routes } from "react-router-dom";
// Components
import Home from "./pages/Home";
// Pages
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// hooks
import UserContext from "./context/UserContext";
import { useNavigate } from "react-router-dom";
// Utils
import fetchUser from "./utils/fetchUser";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  const userContext = useContext(UserContext);
  let navigate: NavigateFunction = useNavigate();
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    fetchUser(userContext, token, navigate);
  }, []);
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
