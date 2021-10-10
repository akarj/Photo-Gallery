import { useEffect, useState } from "react";
import {
  projectStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  projectFirestore,
  timestamp,
} from "../Firebase/config";
import { collection, addDoc } from "../Firebase/config";

const useStorage = imageFile => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    try {
      const storageRef = ref(projectStorage, imageFile.name);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      const l = async () => {
        try {
          const docRef = await addDoc(collection(projectFirestore, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      };

      l();

      uploadTask.on(
        "state_changed",
        snapshot => {
          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(percentage);
        },
        err => {
          setError(err);
        },
        async () => {
          try {
            const URL = await getDownloadURL(uploadTask.snapshot.ref);

            setUrl(URL);
            const docRef = await addDoc(
              collection(projectFirestore, "images"),
              {
                url: URL,
                createdAt: timestamp(),
              }
            );
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", { e });
          }
        }
      );
    } catch (error) {
      console.log("not working", { error });
    }
  }, [imageFile]);

  return { progress, url, error };
};

export default useStorage;
