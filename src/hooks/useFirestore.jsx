import { useState, useEffect } from "react";
import {
  projectFirestore,
  collection,
  onSnapshot,
  query,
  orderBy,
} from "../Firebase/config";

const useFirestore = collectionName => {
  const collectionRef = collection(projectFirestore, collectionName);
  const order = query(collectionRef, orderBy("createdAt", "desc"));

  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      order,
      // collection(projectFirestore, collectionName),
      snapshot =>
        setDocs(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  }, [collectionName, order]);
  return { docs };
};
export default useFirestore;
