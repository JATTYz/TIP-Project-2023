import { auth } from "../firebase/firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput } from '@mantine/core';

function LoginForm() {
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin =  () => {
        errorMessage && setErrorMessage('');
        const { email, password } = form.values;

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
            window.location.replace("/admin");
            })
            .catch((e) => {
            setErrorMessage('Invalid Login!');
            });
    };

    const form = useForm({
        initialValues: { email: '', password: ''},
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          password: (value) => (value.length > 6 ? null : 'Password should be at least 6 characters long'),
        },
      });

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
                            <form onSubmit={form.onSubmit()}>
                                <TextInput 
                                {...form.getInputProps('email')}
                                    mt="md" 
                                    label="Email" 
                                    placeholder="Email" 
                                    withAsterisk
                                />
                                <PasswordInput 
                                {...form.getInputProps('password')} 
                                    my="md"
                                    label="Password" 
                                    placeholder="Password" 
                                    withAsterisk
                                />
                                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                                <button className="px-6 py-2 mt-4 text-white bg-[#361500] rounded-lg hover:bg-[#1C0A00]"
                                    type="submit" 
                                    onClick={()=> handleLogin()}
                                    >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;