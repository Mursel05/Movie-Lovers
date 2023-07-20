import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import TableFilms from "../components/TableFilms";
import Footer from "../components/Footer";

const table = () => {
  return (
    <div>
      <Helmet>
        <title>{"Table"}</title>
      </Helmet>
      <Navbar />
      <TableFilms />
      <Footer />
    </div>
  );
};

export default table;
