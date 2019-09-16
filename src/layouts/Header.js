import React from "react";
import ContinueButton from "../layouts/buttons/ContinueButton";
//this is a general header
//create a logo
const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm   headerStyle ">
      <div className="collapse navbar-collapse " id="navbarMain">
        <ul className="navbar-nav ml-auto">
          <ContinueButton />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
