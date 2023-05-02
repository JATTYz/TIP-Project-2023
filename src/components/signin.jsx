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
        <div>
           <h1>EMAIL:</h1>
           <input className="border-2 border-zinc-950" type="email" value={email} onChange={handleEmailChange} />
           <h1>Password:</h1>
           <input className="border-2 border-zinc-950" type="password" value={password} onChange={handlePasswordChange} />
           <button type="submit" onClick={()=> handleLogin()}>Login</button>
        </div>
    );
}

export default LoginForm;