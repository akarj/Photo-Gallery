// Import the functions you need from the SDKs you need

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import * as firestore from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZ7jSPVI9cBYJpOEASE2JBEQFI5akWQWw",
  authDomain: "react-photo-gallery-app-dfbee.firebaseapp.com",
  projectId: "react-photo-gallery-app-dfbee",
  storageBucket: "react-photo-gallery-app-dfbee.appspot.com",
  messagingSenderId: "392741677080",
  appId: "1:392741677080:web:52b0ec2b4859b0e753fb6d",
  measurementId: "G-LLZVLHJ89E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
const projectStorageRef = ref(projectStorage);
const timestamp = firestore.serverTimestamp;

export {
  projectFirestore,
  projectStorage,
  projectStorageRef,
  timestamp,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  collection,
  addDoc,
};
