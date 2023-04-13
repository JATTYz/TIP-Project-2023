import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

//FIREBASE SETUP #JATURON's Firebase REPO.
const firebaseConfig = {
  apiKey: "AIzaSyAdooBLHTynFb28DOFthFJUXRDHUsH316Q",
  authDomain: "g2-tip-2023.firebaseapp.com",
  projectId: "g2-tip-2023",
  storageBucket: "g2-tip-2023.appspot.com",
  messagingSenderId: "201570838587",
  appId: "1:201570838587:web:39d3535843f09aebe8541e",
  measurementId: "G-DF3XQ9QFHW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
//will consider later
//import { getAnalytics } from "firebase/analytics";
// export const analytics = getAnalytics(app);