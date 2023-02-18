import React, { useState, useEffect, useRef } from "react";
import Button from "../Button";
import './LoginFormTransition.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies(); // initalises universal-cookies

const LoginForm = ({ isLogin, setLogin }) => {

// use state for input field content
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// sends information to server on clicking submit button or enter
const handleSubmit = (e) => {
  e.preventDefault(); // prevents refreshing whole page
  const configuration = { //data contains request body for backend
    method: 'post',
    url: 'http://localhost:3000/login', // endpoint 
    data: {
      email,
      password,
    },
  }
  console.log(configuration);
  console.log('handle submit beginning ' + isLogin)
  axios(configuration) // calls API
    .then((result) => {
      cookies.set('TOKEN', result.data.token, { // sets cookies: name of cookie, value and where its available
        path: '/' // sets cookie available everywhere
      })
      console.log(result);
      setLogin(true);
      setEmail(''); // resets input fields to empty string
      setPassword('');
      window.location.href(''); // redirects
    })
    .catch((error) => {
      error = new Error();
    })
}

// set pop up active or innactive
const [isOpenLoginForm, setOpenLoginForm] = useState(false);
const toggleLoginForm = () => {
    setOpenLoginForm(!isOpenLoginForm);
    setEmail(''); // resets input fields to empty when closing popup
    setPassword('');
  }

// close active popup when clicking outside popup
const loginFormRef = useRef(null);
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

    {/* button to open login popup */}
    <Button
        type={'button'}
        onClick={toggleLoginForm}
        label={'Login'}
    />

    {/* making popup visible with css */}
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

        {/* login form */}
          <form 
            className="mt-0 space-y-6" 
            method="POST"
            onSubmit={handleSubmit}>
            <div className="-space-y-px rounded-md shadow-sm">

            {/* mail adress */}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* enter password */}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* display successful registration message */}
            {isLogin ? (
              <p className="">Erfolgreich angemeldet</p>
              ) : (
                <p>Du bist nicht eingelogged</p>
            )}
            <div>

              {/* Login Button */}
              <Button
                type={'submit'}
                onClick={(e) => {
                  handleSubmit(e)
                }}
                label={'Login'}
              />

              {/* close button */}
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

      {/* blur background when active popup */}
      <div className={`${isOpenLoginForm ? 'fixed top-0 left-0 w-screen h-screen backdrop-blur-sm z-5' : ''}`}>
    </div>
  </div>

 )
}


export default LoginForm;