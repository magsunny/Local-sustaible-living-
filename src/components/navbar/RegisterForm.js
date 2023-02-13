import { useState, useEffect, useRef } from 'react';
import './LoginFormTransition.css';
import Button from '../Button';
import axios from 'axios';

export default function Registration() {



// use state for input field content
const [isOpenRegisterForm, setOpenRegisterForm] = useState(false);
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [register, setRegister] = useState(false);

// set pop up active or innactive
const toggleRegisterForm = () => {
    setOpenRegisterForm(!isOpenRegisterForm);
    setRegister(false);
  } 

// close active popup when clicking outside popup
const registerFormRef = useRef(null);
useEffect(() => {

  const pageClickEvent = (e) => {
    if (registerFormRef.current !== null && !registerFormRef.current.contains(e.target)) {
        setOpenRegisterForm(!isOpenRegisterForm);
     }
    };

  setTimeout (function() {
    if (isOpenRegisterForm) {
      window.addEventListener('click', pageClickEvent)
    }}, 100);

  return () => {
      window.removeEventListener('click', pageClickEvent);
    }

    }, [isOpenRegisterForm]
);

// sends information to server on clicking submit button
const handleSubmit = (e) => {
    e.preventDefault() //prevents refreshing page
    const configuration = {
        method: 'post',
        url: 'http://localhost:3000/register', //endpoint
        data: { //data contains request body for backend
            username,
            email,
            password,
        },
    };
    axios(configuration) // calls API
    .then((result) => { //resets input fields to empty strings
        setRegister(true);
        setUsername('');
        setEmail('');
        setPassword('');
    })
    .catch((error) => {
        error = new  Error();
    })
}; 

    return (

    <div className="relative flex justify-center items-center">

        {/* button to open login popup */}
        <Button
            type={'button'}
            onClick={toggleRegisterForm}
            label={'Registrieren'}
        />

        {/* making popup visible with css */}
        <div 
            ref={registerFormRef} 
            className={`px-4 absolute rigth-0 top-16 w-80 flex min-h-full items-center justify-center z-10 bg-slate-100 text-center rounded-xl shadow-xl
                  transition ${isOpenRegisterForm ? 'active' : 'inactive'}`}
        >
            <div className="w-full max-w-md space-y-4">
                <div>
                    <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">
                        Registriere dich: 
                    </h2>
                </div>
                
                    {/* register form */}
                    <form 
                        className="mt-4 space-y-4" 
                        action="#" 
                        method="POST"
                        onSubmit={handleSubmit}
                    >

                        {/* username */}
                        <div className="mt-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Benutzername
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    id="username"
                                    name="username"
                                    type="username"
                                    autoComplete="username"
                                    required
                                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-00 placeholder-gray-300 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 focus:bg-emerald-100 sm:text-sm"
                                    placeholder="Mein Benutzername"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* email */}
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                E-mail
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 focus:bg-emerald-100 sm:text-sm"
                                    placeholder="beispiel@email.de"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* password */}
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Passwort
                            </label>
                            <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="password"
                                    required
                                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 focus:bg-emerald-100 sm:text-sm"
                                    placeholder="Passwort"
                                    value={password}
                                    onChange={(e) => {setPassword(e.target.value)}}
                                />
                        </div>

                        {/* display successful registration message */}
                        {register ? (
                            <p>Registrierung erfolgreich!</p>
                        ) : (
                            <p></p>
                        )}

                        {/* Submit & Close Button */}
                        <div className="flex flex-col items-center justify-center mt-4">
                        <Button 
                            type={'submit'}
                            onClick={() => {
                                // toggleRegisterForm();
                                handleSubmit()}}
                            label={'Registrieren'}
                        />

                            <div className="flex flex-col items-center justify-center text-sm text-gray-600 mb-4 mt-2">
                                <span 
                                onClick={toggleRegisterForm}
                                className="flex items-center justify-center cursor-pointer hover:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex items-center justify-center w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Close
                                </span>
                            </div>

                        </div>
                    </form>
            </div>
        </div>
        
        {/* blur background when active popup */}
        <div className={`${isOpenRegisterForm ? 'fixed top-0 left-0 w-screen h-screen backdrop-blur-sm z-5' : ''}`}>
        </div>

    </div>
    );
}


