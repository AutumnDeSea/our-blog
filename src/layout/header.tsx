import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-yellow fixed w-full top-0 left-0">
      <header className="flex justify-between  max-w-7xl mx-auto h-75">
        <div className="flex items-center space-x-5">
          <Link to="/home">
            <img
              className="w-44 object-contain cursor-pointer"
              src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex items-center space-x-5 text-black">
          <h3>Our Story </h3>
          <h3> Memory </h3>
          <h3>writer</h3>
          <h3>sign in </h3>
          <h3 className="text-white bg-black rounded-full px-4 py-2">
            Get Started
          </h3>
        </div>
      </header>
    </div>
  );
};
export default Header;
