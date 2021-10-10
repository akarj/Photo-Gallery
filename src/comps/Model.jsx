import React from "react";

const Model = ({ selectedImg, setSelectedImg }) => {
  const modelRemover = e => {
    if (e.target.classList.contains("backdrop")) setSelectedImg(null);
  };
  return (
    <div className="backdrop" onClick={modelRemover}>
      <img src={selectedImg} alt="Original Size" />
    </div>
  );
};

export default Model;
