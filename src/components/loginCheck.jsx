import { auth } from "../firebase/firebaseConfig.js";
import { onAuthStateChanged } from "firebase/auth";
import React, {useState,useEffect} from "react";
import LoginForm from "./signin.jsx";
import Header from "./Header.jsx";
import LogoutButton from "./logout.jsx";

const LoginCheck =()=> {
    //const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
                alert("welcome " + user.email);
            } else {
                setIsAuthenticated(false);
                //alert("please login, redirect to login page");
                //window.location.replace("/login");
            }
        });
        //setIsLoading(false);
    },[]);
    //if(isLoading) {
        //return <div>Loading...</div>;
    //}
    if(isAuthenticated)
        return <div className="px-10 text-3xl">
            <h1 className="text-center text-cyan-700 py-14">Admin Dashboard</h1>
            <div className="grid grid-rows-3 w-full h-auto text-center">
                <div className="py-3">
                    <a href="/admin/approval">
                        <button className="text-white border-4 border-amber-950 rounded-lg w-1/3 h-20 bg-amber-800">Pending
                            Approval
                        </button>
                    </a>
                </div>
                <div className="py-3">
                    <a href="/admin/createDocument">
                        <button className="text-white border-4 border-amber-950 rounded-lg w-1/3 h-20 bg-amber-800">Create
                            Documents
                        </button>
                    </a>
                </div>
                <LogoutButton />
            </div>
        </div>;
    if(!isAuthenticated){
        return <div>
            <h1 className="text-3xl text-center text-red-500"> Please login to access admin dashboard </h1>
            <LoginForm/>
            </div>;
    }
}

export default LoginCheck;