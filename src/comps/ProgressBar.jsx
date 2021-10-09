import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ imageFile, setImageFile }) => {
  const { url, progress } = useStorage(imageFile);
  console.log(progress, url);

  return (
    <div className="progress-bar" style={{ width: progress + "%" }}>
      progress
    </div>
  );
};

export default ProgressBar;
