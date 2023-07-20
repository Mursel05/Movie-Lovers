import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import NowFilms from "../components/NowFilms";
import Footer from "../components/Footer";

const now = () => {
  return (
    <div>
      <Helmet>
        <title>{"Movie Lovers-Now Films"}</title>
      </Helmet>
      <Navbar />
      <NowFilms />
      <Footer />
    </div>
  );
};

export default now;
