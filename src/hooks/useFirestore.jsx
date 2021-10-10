import { useState, useEffect } from "react";
import { projectFirestore, collection, onSnapshot } from "../Firebase/config";

const useFirestore = collectionData => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    try {
      let Docs = [];

      onSnapshot(
        collection(projectFirestore, "images"),
        snapshot => {
          snapshot.docs.forEach(doc => {
            Docs.push({ ...doc.data(), id: doc.id });
          });
        },
        error => {
          console.log("error in getting file from database", error);
        },
        () => {
          console.log("retreived files from database");
          console.log("Docs", Docs);
        }
      );

      // const unsub = projectFirestore
      //   .collection(collectionData)
      //   .orderBy("createdAt", "desc")
      //   .onSnapshot(snap => {
      //     let Docs = [];
      //     snap.forEach(doc => {
      //       doc.push({ ...doc.data(), id: doc.id });
      //     });
      console.log("Docs", Docs);

      setDocs(Docs);
      //   });

      // return () => unsub();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { docs };
};
export default useFirestore;
