
import { useState, useEffect, useRef } from 'react';
import './LoginFormTransition.css';

export default function Registration() {

const registerFormRef = useRef(null);
const [isOpenRegisterForm, setOpenRegisterForm] = useState(false);

const toggleRegisterForm = () => {
    setOpenRegisterForm(!isOpenRegisterForm);
  }

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

    return (

    <div className="relative flex justify-center items-center">

      <button 
        className="inline-flex items-center justify-center rounded-md z-20 text-sm text-white bg-gradient-to-r from-emerald-500 to-blue-500 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 "
        onClick={toggleRegisterForm}
      >
        <span className="px-3 py-2 text-sm font-semibold hover:rounded-md hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Registrieren</span>  
      </button>

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
                
                    <form 
                        className="mt-4 space-y-4" 
                        action="#" 
                        method="POST"
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
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
                                />
                            </div>
                        </div>
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
                                />
                            </div>
                        </div>
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
                                />
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Passwort bestätigen
                            </label>
                            <input
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password_confirmation"
                                    autoComplete="password_confirmation"
                                    required
                                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 focus:bg-emerald-100 sm:text-sm"
                                    placeholder="Passwort wiederholen"
                                />
                        </div>
                        <div className="flex flex-col items-center justify-center mt-4">
                        <button 
                            className="inline-flex items-center justify-center rounded-md z-20 text-sm text-white bg-gradient-to-r from-emerald-500 to-blue-500 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 "
                            onClick={toggleRegisterForm}
                            type="submit"
                        >
                            <span className="px-3 py-2 text-sm font-semibold hover:rounded-md hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Registrieren</span>  
                        </button>

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

        <div className={`${isOpenRegisterForm ? 'fixed top-0 left-0 w-screen h-screen backdrop-blur-sm z-5' : ''}`}>
        </div>

    </div>
    );
}


