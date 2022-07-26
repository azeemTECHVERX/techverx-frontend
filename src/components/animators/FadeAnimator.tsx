import React from "react";
import { motion } from "framer-motion";

const FadeAnimator: React.FC<any> = ({ children }: any) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        },
      }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeAnimator;
