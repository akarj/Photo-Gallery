import React, { useState } from "react";

const UploadForm = () => {
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState(null);
  const acceptedImageType = ["image/png", "image/jpeg"];
  const fileUpload = e => {
    console.log("image file upload");
    let selectedFile = e.target.files[0];
    if (selectedFile && acceptedImageType.includes(selectedFile.type)) {
      setImageFile(selectedFile);
      setError("");
    } else {
      setImageFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };
  return (
    <form>
      <input type="file" accept="image/*" onChange={fileUpload} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {imageFile && <div className="error">{imageFile.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
