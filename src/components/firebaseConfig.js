
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyAbIx-8SBgFgCjyIy18-QHXSWg3TejI4dU",
  authDomain: "trainingapp-2adbc.firebaseapp.com",
  databaseURL: "https://trainingapp-2adbc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "trainingapp-2adbc",
  storageBucket: "trainingapp-2adbc.appspot.com",
  messagingSenderId: "369387208340",
  appId: "1:369387208340:web:c5be745988eba74c9e3e81",
  measurementId: "G-08HPXM1RJ9"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const imageDb = getStorage(app);