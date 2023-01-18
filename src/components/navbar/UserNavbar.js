import { Link } from 'react-router-dom'
import Button from '../Button.js';
import LoginForm from './LoginForm.js'
import RegisterForm from './RegisterForm';

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
              <Button
                type={'button'}
                onClick={props.isLoggedIn}
                label={'Logout'}
              />
              </Link>

             </div>
        );}
     else {
        return (
            <div className="flex space-x-4 flex-1 items-center justify-center sm:items-stretch sm:justify-end">


              <LoginForm 
                isLogin={props.isLogin}
                isLoggedIn={props.isLoggedIn}
              />

              <RegisterForm
                isLogin={props.isLogin}
                isLoggedIn={props.isLoggedIn}
              />

          </div>
        );
   }
 }

export default UserNavbar;
