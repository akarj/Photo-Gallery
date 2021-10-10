import React from "react";
import { motion } from "framer-motion";

const Model = ({ selectedImg, setSelectedImg }) => {
  const modelRemover = e => {
    if (e.target.classList.contains("backdrop")) setSelectedImg(null);
  };
  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={modelRemover}
    >
      <motion.img
        src={selectedImg}
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
        alt="Original Size"
      />
    </motion.div>
  );
};

export default Model;
