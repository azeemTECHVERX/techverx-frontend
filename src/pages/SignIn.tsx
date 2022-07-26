// From Libraries
import React, { useEffect } from "react";
// Components
import Header from "../components/header/Header";
import SignInForm from "../components/signInForm/SignInForm";
import SpringAnimator from "../components/animators/SpringAnimator";
// Hooks
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <React.Fragment>
      <Header />
      <div style={{ marginTop: "10%" }} className="flex justify-center">
        <SpringAnimator>
          <div className=" px-20 py-10 bg-slate-200 opacity-80 rounded-2xl">
            <h1 className="text-3xl mb-4">Sign In</h1>
            <SignInForm />
          </div>
        </SpringAnimator>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
