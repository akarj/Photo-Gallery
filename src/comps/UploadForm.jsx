import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState(null);
  const acceptedImageType = ["image/png", "image/jpeg"];
  const fileUpload = e => {
    console.log("image file upload");
    let selectedFile = e.target.files[0];
    if (selectedFile && acceptedImageType.includes(selectedFile.type)) {
      // console.log(selectedFile);
      setImageFile(selectedFile);
      setError("");
    } else {
      setImageFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };
  return (
    <form>
      <label>
        <input type="file" accept="image/*" onChange={fileUpload} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {imageFile && <div className="error">{imageFile.name}</div>}
        {imageFile && (
          <ProgressBar imageFile={imageFile} setFile={setImageFile} />
        )}
      </div>
    </form>
  );
};

export default UploadForm;
