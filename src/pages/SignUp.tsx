import React from "react";
import { motion } from "framer-motion";
// Components
import Header from "../components/header/Header";
import SignUpForm from "../components/signUpForm/SignUpForm";

const SignUp: React.FC = () => {
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
          <div className="px-20 py-10 bg-slate-100 opacity-80 rounded-2xl ">
            <h1 className="text-3xl mb-4">Sign Up</h1>
            <SignUpForm />
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
