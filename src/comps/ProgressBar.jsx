import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ imageFile, setImageFile }) => {
  const { url, progress } = useStorage(imageFile);
  console.log(progress, url);
  useEffect(() => {
    if (url) {
      setImageFile(null);
    }
  }, [url, setImageFile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
