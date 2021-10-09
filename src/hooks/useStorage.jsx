import React, { useEffect, useState } from "react";
import { projectStorage } from "../Firebase/config";

const useStorage = file => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);

    storageRef.put(file).on(
      "state_changed",
      snap => {
        let percentageUpload = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentageUpload);
      },
      err => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
