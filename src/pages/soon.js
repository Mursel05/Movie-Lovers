import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import SoonFilms from "../components/SoonFilms";
import Footer from "../components/Footer";

const soon = () => {
  return (
    <div>
      <Helmet>
        <title>{"Soon Films"}</title>
      </Helmet>
      <Navbar />
      <SoonFilms />
      <Footer />
    </div>
  );
};

export default soon;
