import React from "react";
import { Route, Routes } from "react-router-dom";
// Components
import Header from "./components/header/Header";
import Home from "./pages/Home";
// Pages
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App: React.FC = () => {
  return (
    <div className="w-screen h-screen ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
