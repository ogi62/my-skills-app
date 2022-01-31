import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="header">
        <Link to="/">
          <img className="header__logo" src={Logo} alt="Skills-logo" />
        </Link>
        <div className="header__links">
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Home</span>
            </div>
          </Link>

          <Link to="/skills" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Skills</span>
            </div>
          </Link>

          <Link to="/static" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Static</span>
            </div>
          </Link>
        </div>
        <div className="toggleContainer">
          <span onClick={toggle}>
            <GiHamburgerMenu />
          </span>
        </div>
      </nav>
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Header;
