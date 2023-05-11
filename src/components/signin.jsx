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
                window.location.replace("/admin");
            }
        ).catch(e=>{
            alert(e.message);
        })
    };

    return (
        <div className="grid grid-cols-6">
            <span className=":col-span-1"></span>
            <div className="col-span-1"><img className="scale-75 pr-10 my-5" src="/rccabadge.png" alt="rcca-badge"></img>
            </div>
            <div className="col-span-3 flex flex-col">
                <div className="text-6xl mt-20 pl-5">Rover Car Club of Australia</div>
                <div className="text-3xl pl-40 pt-5 items-center">Please Sign In to Continue</div>
            </div>
            <span className="col-span-1"></span>
            <span className="col-span-2"></span>
        <div className="col-span-2 mb-4 h-48 flex flex-col items-center justify-center">
            <h1 className="mb-4 text-2xl">EMAIL:</h1>
            <input className="mb-6 scale-150 rounded-lg border-2 px-2 border-zinc-950" type="email " placeholder={'Email'} required={true} value={email} onChange={handleEmailChange} />
            <h1 className="mb-4 text-2xl">PASSWORD:</h1>
            <input className="mb-6 border-2 scale-150 rounded-lg px-2 border-zinc-950" type="password" placeholder={'Password'} required={true} value={password} onChange={handlePasswordChange} />
            <button className="block text-2xl bg-amber-950 hover:bg-amber-950-dark text-white uppercase mx-auto p-3 rounded-lg" type="submit" onClick={()=> handleLogin()}>Login</button>
        </div>
        </div>
    );
}

export default LoginForm;