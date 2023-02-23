import { Link } from 'react-router-dom'
import Button from '../Button.js';
import LoginForm from './LoginForm.js'
import RegisterForm from './RegisterForm';
import Cookies from 'universal-cookie';


const community = [
  { name: 'Community', href: '/community', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const cookies = new Cookies();

function UserNavbar({ isLogin, setLogin }) {

  // gets Token
  const token = cookies.get('TOKEN');

  // logout 
  const logout = () => {
    cookies.remove('TOKEN', { path: '/home'});
    setLogin(false);
  }

    // checks if user is logged in with useState and token
     if (isLogin === true && token) {
        return (


            <div className="flex space-x-4 flex-1 items-center justify-center sm:items-stretch sm:justify-end">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
             
                      {/* community button */}
                      {community.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-emerald-900 text-white' : 'text-black-300 hover:bg-emerald-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}

                      {/* profile button -- not ready to use */}
                      <Link to="">
                        <button type="button" className="flex rounded-full bg-white border-solid border-2 border-white text-sm focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 ">
                        <img 
                          className="h-8 w-8 rounded-full"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Phenotype_portrait_02.jpg/440px-Phenotype_portrait_02.jpg"
                          alt="User Foto"
                        />
                        </button>
                      </Link>

                   </div>
                </div>
              </div>

              {/* logout button  */}
              <Button
                type={'button'}
                onClick={logout}
                label={'Logout'}
              />
       </div>
            
        );}

       
     else {
        return (
            <div className="flex space-x-4 flex-1 items-center justify-center sm:items-stretch sm:justify-end">


              <LoginForm 
               isLogin={isLogin}
               setLogin={setLogin}
              />

              <RegisterForm
               isLogin={isLogin}
               setLogin={setLogin}
              />

          </div>
        );
   }
 }

export default UserNavbar;
