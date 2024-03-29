import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <ul>
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
            >
            <a href={icon.link}
            target='_blank'
            rel='noreferrer'>
          <ion-icon name={icon.name}></ion-icon></a>
        </span>
      ))}
    </div>
    </ul>
  );
};

export default SocialIcons;