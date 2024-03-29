import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink } from 'react-router-dom'
import UserNavbar from './UserNavbar';
import {useState } from 'react';


const navigation = [

  { name: 'Home', href: '/' },
  { name: 'Ernährung', href: '/ernährung' },
  { name: 'Fashion', href: '/fashion' },
  { name: 'Mobilität', href: '/mobilität' },
  { name: 'Wohnen', href: '/wohnen' },

]

export default function Navbar () {

  const [isLogin, setLogin] = useState(false);

  return (
    <Disclosure as="nav" className="bg-emerald-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-emerald-600 hover:bg-emerald-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Menu for Tablet & Desktop */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                         isActive ? 'bg-emerald-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-black-300 hover:bg-emerald-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

               {/* Login menu */}
              <UserNavbar 
               isLogin={isLogin}
               setLogin={setLogin}
              />

            </div>
          </div>

          {/* content drop down menu for mobile devices */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={'text-black-300 hover:bg-emerald-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

