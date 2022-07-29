// Libraries
import React from "react";
import { motion } from "framer-motion";

const PageAnimator: React.FC<any> = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimator;
