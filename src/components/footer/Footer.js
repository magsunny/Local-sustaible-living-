import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import Button from "../Button";

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-100">Happy </span> to start your sustainable living
        </h1>
        <div>
          <input
            type="Mailadresse"
            placeholder="e-mail"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />

           <button
                  type="submit"
                  className="m-auto inline-flex items-center justify-center rounded-md text-sm text-white bg-gradient-to-r from-emerald-500 to-blue-500 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 "
              >
                  <span className="px-3 py-2 text-sm font-semibold hover:rounded-md hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">hier zum Newsletter anmelden</span>
              </button>

        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;