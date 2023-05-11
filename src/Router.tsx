import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import Project from "./pages/Project";
import WouldU from "./pages/Project_1";
import GreenPlogging from "./pages/Project_2";
import PortfolioShare from "./pages/Project_3";
import ShareMe from "./pages/Project_4";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/*" element={<Project />} />
        <Route path="/project/wouldU" element={<WouldU />} />
        <Route path="/project/greenplogging" element={<GreenPlogging />} />
        <Route path="/project/portfolioshare" element={<PortfolioShare />} />
        <Route path="/project/shareme" element={<ShareMe />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;