import {auth} from "../firebase/firebaseConfig.js";
import {signOut} from "firebase/auth";
import React from "react";

function LogoutButton() {
    const handleLogout = () => {
        signOut(auth).then(() => {
            alert("You are successfully logged out, now redirect to home page");
            window.location.replace("/");
        }).catch((error) => {
            alert("something went wrong");
        })
    }


    return (
        <>
            <button className="block bg-amber-950 hover:bg-amber-950-dark text-white uppercase mx-auto p-3 rounded-lg" onClick={handleLogout}>Logout</button>
        </>
    )

}
export default LogoutButton;