import { useEffect, useState } from "react";
import {
  projectStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "../Firebase/config";

const useStorage = imageFile => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    try {
      const storageRef = ref(projectStorage, imageFile.name);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        snapshot => {
          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log("Upload is " + percentage + "% done");
          setProgress(percentage);
        },
        err => {
          setError(err);
        },
        async () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
            // console.log("File available at", downloadURL);
            setUrl(downloadURL);
          });
        }
      );
    } catch (error) {
      console.log("not working");
    }
  }, [imageFile]);

  return { progress, url, error };
};

export default useStorage;
