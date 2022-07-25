// From Libraries
import React from "react";

// Components
import Header from "../components/header/Header";
import SignInForm from "../components/signInForm/SignInForm";
const SignIn: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <div style={{ marginTop: "10%" }} className="flex justify-center">
        <div className=" px-20 py-10 bg-slate-200 opacity-80 rounded-2xl">
          <h1 className="text-3xl mb-4">Sign In</h1>
          <SignInForm />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
