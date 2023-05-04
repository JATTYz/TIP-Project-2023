import { auth } from "../firebase/firebaseConfig.js";
import { onAuthStateChanged } from "firebase/auth";
import React, {useEffect} from "react";

const LoginCheck =()=> {
    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                alert("welcome " + user.email);
            } else {
                alert("please login, redirect to login page");
                window.location.replace("/login");
            }
        });
    },[]);
  return null;
}

export default LoginCheck;