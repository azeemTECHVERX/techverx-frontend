// Libraries
import React from "react";
import { motion } from "framer-motion";

const SpringAnimator: React.FC<any> = (props: any) => {
  return (
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
      exit={{
        opacity: 0,
        transition: {
          ease: [0, 0.71, 0.2, 1.01],
          duration: 0.3,
        },
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default SpringAnimator;
