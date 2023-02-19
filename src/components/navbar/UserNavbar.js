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

  const token = cookies.get('TOKEN');

  const logout = () => {
    cookies.remove('TOKEN', { path: ''});
    setLogin(false);
  }

     if (isLogin === true && token) {
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


             
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">

             
                      <Link to="/community">
                      </Link>
                      
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

                   </div>
                </div>
              </div>

                         
              <Link to="">
              <Button
                type={'button'}
                onClick={logout}
                label={'Logout'}
              />
              </Link>
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
