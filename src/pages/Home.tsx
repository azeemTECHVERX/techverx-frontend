import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Header from "../components/header/Header";
import { motion } from "framer-motion";
import SpringAnimator from "../components/animators/SpringAnimator";

const Home: React.FC = () => {
  const userContext = useContext(UserContext);
  let navigate = useNavigate();
  // Navigating User if user is not logged in!
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      navigate("/signin");
    }
  });
  return (
    <div>
      <Header />
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
        exit={{ opacity: 0 }}
      >
        <div className="flex items-center justify-center flex-col">
          <div>Home</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
