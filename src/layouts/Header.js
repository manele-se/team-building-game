import React from 'react';
import ContinueButton from '../layouts/buttons/ContinueButton';
import { Link } from 'react-router-dom';
import '../layouts/layouts.css';

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-sm headerStyle ">
      <ul className="navbar-nav d-flex w-100">
        <li className="navbar-nav flex-grow-1 logo">
          <Link to="/" className="nav-link ">
            <h4>TeamGame</h4>
          </Link>
        </li>
        <li className="nav-item">
          <ContinueButton canContinue={props.canContinue} continueUrl={props.continueUrl} />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
