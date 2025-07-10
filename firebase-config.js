// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5YHTglnMSLXdeISzBF2ofmHK_YxnYh_w",
  authDomain: "agroschemes-cf528.firebaseapp.com",
  projectId: "agroschemes-cf528",
  storageBucket: "agroschemes-cf528.appspot.com",  // Corrected here
  messagingSenderId: "561101815885",
  appId: "1:561101815885:web:cbc24065c4926cf0aa5c04",
  measurementId: "G-R5P9Y66Z15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
