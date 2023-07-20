import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="logo">
        <img src="images/film.svg" alt="sekil" />
        <span>MOVIE LOVERS</span>
      </NavLink>
      <div className="links">
        <NavLink to="/" className="link">
          <span>Today Films</span>
        </NavLink>
        <NavLink to="/soon" className="link">
          <span>Soon Films</span>
        </NavLink>
        <NavLink to="/table" className="link">
          <span>Table</span>
        </NavLink>
        <NavLink to="/aboutUs" className="link">
          <span>About Us</span>
        </NavLink>
        <NavLink to="/contact" className="link">
          <span>Contact</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
