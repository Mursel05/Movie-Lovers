import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const aboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>{"About Us"}</title>
      </Helmet>
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default aboutUs;
