// From Libraries
import React, { useEffect } from "react";
import { motion } from "framer-motion";
// Components
import Header from "../components/header/Header";
import SignInForm from "../components/signInForm/SignInForm";
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
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div className=" px-20 py-10 bg-slate-200 opacity-80 rounded-2xl">
            <h1 className="text-3xl mb-4">Sign In</h1>
            <SignInForm />
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
