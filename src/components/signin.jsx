import { auth } from "../firebase/firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = e => setEmail(e.target.value);
    const handlePasswordChange = e => setPassword(e.target.value);

    const handleLogin =  () => {
        signInWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                const user = userCredential.user;
                console.log(user);
                window.location.replace("/admin/approval");
            }
        ).catch(e => {
            window.alert("WRONG USERNAME OR PASSWORD");
        })
    };

    return (
        <div className="bg-gray-100 h-screen">
            <div className="flex  justify-center pt-10">
                <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-1/2">
                    <h1 className="text-center text-2xl">Rover Car Club of Australia</h1>
                    <div className="flex justify-center">
                        <img className="w-20 my-6" src="/rccabadge.png" alt="rcca-badge"></img>
                    </div>
                    <h3 className="text-lg font-bold text-center">Login to your account</h3>
                        <div className="mt-4">
                            <div>
                                <label className="block" for="email">Email</label>
                                        <input type="email" 
                                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder={'Email'} 
                                            required={true} 
                                            value={email} 
                                            onChange={handleEmailChange}
                                        />
                            </div>
                            <div className="mt-4">
                                <label className="block">Password</label>
                                        <input type="password" 
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder={'Password'} 
                                        required={true} 
                                        value={password} 
                                        onChange={handlePasswordChange}    
                                        />
                            </div>
                            <div className="flex items-baseline justify-between">
                                <button className="px-6 py-2 mt-4 text-white bg-[#361500] rounded-lg hover:bg-[#1C0A00]"
                                type="submit" onClick={()=> handleLogin()} 
                                >Login</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;