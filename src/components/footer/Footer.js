import React  from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import LoginNewsletter from "./LoginNewsletter";



const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">Happy </span> to start your sustainable living
        </h1>
          
  
      </div>
      <LoginNewsletter/>
      <ItemsContainer />
      <div
        className="grid gism:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;