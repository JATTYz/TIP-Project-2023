import {auth} from "../firebase/firebaseConfig.js";
import {signOut} from "firebase/auth";

export const handleLogout = () => {
    signOut(auth).then(() => {
        alert("You are successfully logged out, now redirect to home page");
        window.location.replace("/");
    }).catch((error) => {
        alert("something went wrong");
    })
}