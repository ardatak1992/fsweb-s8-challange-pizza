import React from "react";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import CardContainer from "../components/CardContainer";
import Menu from "../components/Menu";

import "./HomePage.css"

const HomePage = () => {
  return <div className="home-page">
    <Banner />
    <Navigation />
    <CardContainer />
    <Menu />
  </div>;
};

export default HomePage;
