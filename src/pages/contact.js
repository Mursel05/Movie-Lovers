import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const contact = () => {
  return (
    <div>
      <Helmet>
        <title>{"Contact"}</title>
      </Helmet>
      <Navbar />
      <Contact />
      <Footer />
     
      
    </div>
  );
};

export default contact;
