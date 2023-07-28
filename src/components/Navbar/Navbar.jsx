import React, { useState } from "react";
import "./NavbarStyle.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <ul>
        <li className="active">Contact</li>
        <li className="active">About</li>
        <li className="active">Shop</li>
      </ul>
      <div className="mobile" onClick={handleMenuClick}>
        {isMenuOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
