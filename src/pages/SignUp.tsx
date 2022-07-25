import React from "react";
// Components
import Header from "../components/header/Header";
import SignUpForm from "../components/signUpForm/SignUpForm";

const SignUp: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <div style={{ marginTop: "10%" }} className="flex justify-center">
        <div className="px-20 py-10 bg-slate-100 opacity-80 rounded-2xl ">
          <h1 className="text-3xl mb-4">Sign Up</h1>
          <SignUpForm />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
