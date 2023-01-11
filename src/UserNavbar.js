import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'

function UserNavbar(props) {



     if (props.isLogin === true) {
        return (
            <div className="flex space-x-4 flex-1 items-center justify-center sm:items-stretch sm:justify-end">

              <Link to="">
                <button type="button" className="flex rounded-full bg-white border-solid border-2 border-white text-sm focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 ">
                 <img 
                  className="h-8 w-8 rounded-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Phenotype_portrait_02.jpg/440px-Phenotype_portrait_02.jpg"
                  alt="User Foto"
                />
                </button>
              </Link>

              <Link to="">
                <button type="button" onClick={props.isLoggedIn} className="inline-flex items-center justify-center rounded-md text-sm text-white bg-gradient-to-r from-emerald-500 to-blue-500 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1">
                  <span className="px-3 py-2 text-sm font-semibold hover:rounded-md hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Logout</span>  
                </button>
              </Link>

             </div>
        );}
     else {
        return (
            <div className="flex space-x-4 flex-1 items-center justify-center sm:items-stretch sm:justify-end">

                {/* <button type="button" onClick={props.toggleLogin} className="inline-flex items-center justify-center rounded-md text-sm text-white bg-gradient-to-r from-emerald-500 to-blue-500 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 ">
                  <span className="px-3 py-2 text-sm font-semibold hover:rounded-md hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Login</span>  
                </button> */}
              <LoginForm />

  
              
              <Link to="">
                <button className="inline-flex items-center justify-center rounded-md text-sm text-white bg-gradient-to-r from-emerald-500 to-blue-500 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 ">
                  <span className="px-3 py-2 text-sm font-semibold hover:rounded-md hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Registrieren</span>  
                </button>
              </Link>

          </div>
        );
   }
 }

export default UserNavbar;
