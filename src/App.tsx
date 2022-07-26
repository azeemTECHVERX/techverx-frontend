// Librariess
import React, { useContext, useEffect } from "react";
import { NavigateFunction, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
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

const App: React.FC = () => {
  const queryClient = new QueryClient();
  const userContext = useContext(UserContext);
  let navigate: NavigateFunction = useNavigate();
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    fetchUser(userContext, token, navigate);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen h-screen ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
