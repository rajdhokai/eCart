import React from "react";
import Logo from "../../public/images/logo.png";
const Header = () => {
  return (
    
      <nav className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
  );
};

export default Header;
