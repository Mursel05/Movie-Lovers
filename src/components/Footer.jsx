import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="link-logo">
        <NavLink to="/" className="logo">
          <img src="images/film.svg" alt="sekil" />
          <span>MOVIE LOVERS</span>
        </NavLink>
        <div className="links">
          <NavLink to="/aboutUs" className="link">
            <span>About Us</span>
          </NavLink>
          <NavLink to="/contact" className="link">
            <span>Contact</span>
          </NavLink>
        </div>
      </div>
      <div className="apps">
        <div className="circles">
          <div className="circle">
            <img src="images/icons8-apple-logo-50.png" alt="icon" />
            <div className="text">
              <span>Download on the</span>
              <span className="name-store">App Store</span>
            </div>
          </div>
          <div className="circle">
            {" "}
            <img src="images/icons8-google-play-48.png" alt="icon" />
            <div className="text">
              <span>GET IT ON</span>
              <span className="name-store">Google Play</span>
            </div>
          </div>
        </div>
        <div className="app">
          <img src="images/facebook.svg" alt="icon" />
          <img src="images/instagram.svg" alt="icon" />
          <img src="images/twitter.svg" alt="icon" />
          <img src="images/youtube.svg" alt="icon" />
        </div>
      </div>{" "}
      <span className="right">Copyright All Rights Reserved</span>
    </div>
  );
};

export default Footer;
