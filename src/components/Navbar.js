import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom_nav-container ">
      <Link className="navbar-brand" to="/">
        <span>SYRY STOCK</span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className=""></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  ">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#shop">
            Shop
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#clients">
            Testimonial
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact Us</a>
        </li>
        </ul>
        <div className="user_option">
          <Link to="/login">
            <span>Login</span>
          </Link>
        
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
