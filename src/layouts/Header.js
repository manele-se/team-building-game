import React from "react";
import ContinueButton from "../layouts/buttons/ContinueButton";
import { Link } from "react-router-dom";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";

//choose logo3 but modify it. if you click on logo it will bring you to home page
//TO DO: fix the header
const logo = { logo1, logo2, logo3 };

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm  headerStyle ">
      <div className="container  ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMain"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarMain">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <ContinueButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
