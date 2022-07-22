import React from "react";
// Components
import Header from "../components/header/Header";
import SignUpForm from "../components/signUpForm/SignUpForm";

const SignUp: React.FC = () => {
  return (
    <React.Fragment>
      <Header btnText="Sign In" navigateTo="/signin" />
      <div style={{ marginTop: "10%" }} className="flex justify-center">
        <div className=" p-12 bg-slate-100 opacity-80 rounded-2xl ">
          <h1 className="text-2xl mb-2">Sign Up</h1>
          <SignUpForm />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
