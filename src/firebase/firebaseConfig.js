import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

//FIREBASE SETUP #JATURON's Firebase REPO.
//Please add your firebase database. This database configuration will connect to this project
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
//will consider later
//import { getAnalytics } from "firebase/analytics";
// export const analytics = getAnalytics(app);
