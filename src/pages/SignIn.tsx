// From Libraries
import React from "react";

// Components
import Header from "../components/header/Header";
import SignInForm from "../components/signInForm/SignInForm";
const SignIn: React.FC = () => {
  return (
    <React.Fragment>
      <Header btnText="Sign Up" navigateTo="/signup" />
      <div style={{ marginTop: "10%" }} className="flex justify-center">
        <div className=" p-12 bg-slate-200 opacity-80 rounded-2xl">
          <h1 className="text-2xl mb-2">Sign In</h1>
          <SignInForm />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
