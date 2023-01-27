// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: "yard-teamyard",
  storageBucket: "yard-teamyard.appspot.com",
  messagingSenderId: "396284143825",
  appId: "1:396284143825:web:88975b7e3f9b308783fdf0",
  measurementId: "G-8C8SLHEJRG"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const storage = getStorage(firebaseApp);

export default firebaseApp;