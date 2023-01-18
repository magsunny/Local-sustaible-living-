import React, { useState, useEffect, useRef } from "react";
import './LoginFormTransition.css';


const LoginForm = (props) => {

const loginFormRef = useRef(null);
const [isOpenLoginForm, setOpenLoginForm] = useState(false);
const toggleLoginForm = () => {
    setOpenLoginForm(!isOpenLoginForm);
  }

useEffect(() => {

  const pageClickEvent = (e) => {
    if (loginFormRef.current !== null && !loginFormRef.current.contains(e.target)) {
        setOpenLoginForm(!isOpenLoginForm);
     }
    };

  setTimeout (function() {
    if (isOpenLoginForm) {
      window.addEventListener('click', pageClickEvent)
    }}, 100);

    return () => {
      window.removeEventListener('click', pageClickEvent);
    }

}, [isOpenLoginForm]);

  return (

   <div className="relative flex justify-center items-center">
    <button type="button" onClick={toggleLoginForm} className="z-20 inline-flex items-center justify-center rounded-md text-sm text-white bg-gradient-to-r from-emerald-500 to-blue-500 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 ">
      <span className="px-3 py-2 text-sm font-semibold hover:rounded-md hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Login</span>  
    </button>

    <div 
      ref={loginFormRef} 
      className={`px-4 absolute rigth-0 top-16 w-80 flex min-h-full items-center justify-center z-10 bg-slate-100 text-center rounded-xl shadow-xl
                  transition ${isOpenLoginForm ? 'active' : 'inactive'}`}
    >
        <div className="mt-4 w-full max-w-md space-y-2">
            <h2 className="text-center text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">
              Melde dich mit deinem Account an:
            </h2>
        <div className="mt-0">
            <span className="text-center text-sm text-gray-600">
              Noch keinen Account? Registrieren
            </span>
        </div>
          <form className="mt-0 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  E-mail Adresse
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 focus:bg-emerald-100 sm:text-sm"
                  placeholder="E-mail Adresse"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 focus:bg-emerald-100 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button 
                  type="submit"
                  onClick={() => {
                    toggleLoginForm()
                    props.isLoggedIn()
                  }}
                  className="m-auto inline-flex items-center justify-center rounded-md text-sm text-white bg-gradient-to-r from-emerald-500 to-blue-500 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 "
              >
                  <span className="px-3 py-2 text-sm font-semibold hover:rounded-md hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Login</span>  
              </button>

              <div className="text-sm text-gray-600 mb-4 mt-2">
                  <span 
                    onClick={toggleLoginForm}
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
      <div className={`${isOpenLoginForm ? 'fixed top-0 left-0 w-screen h-screen backdrop-blur-sm z-5' : ''}`}>
    </div>
  </div>

 )
}


export default LoginForm;