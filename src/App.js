import React from "react";
import AboutUs from "./pages/aboutUs";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Now from "./pages/now";
import Soon from "./pages/soon";
import Table from "./pages/table";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/now" element={<Now />} />
          <Route path="/soon" element={<Soon />} />
          <Route path="/table" element={<Table />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
