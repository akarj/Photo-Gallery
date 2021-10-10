import { useState, useEffect } from "react";
import { projectFirestore, collection, onSnapshot } from "../Firebase/config";

const useFirestore = collectionName => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(projectFirestore, collectionName),
      snapshot =>
        setDocs(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  }, [collectionName]);
  return { docs };
};
export default useFirestore;
