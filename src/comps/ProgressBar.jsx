import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({ imageFile, setImageFile }) => {
  const { url, progress } = useStorage(imageFile);
  console.log(progress, url);
  useEffect(() => {
    if (url) {
      setImageFile(null);
    }
  }, [url, setImageFile]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
      // style={{}}
    ></motion.div>
  );
};

export default ProgressBar;
