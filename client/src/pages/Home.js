import React from "react";
import HomeNavbar from "../components/Navbar";
import "../css/homepage.css";
import Bottom1 from "../components/Bottom1";
import Bottom2 from "../components/Bottom2";
import RightBar from "../components/RightBar";
import MainQuote from "../components/MainQuote";
import MainImage from "../components/MainImage";
const HomePage = () => (
  <div>
    <div className="bg"></div>
    <HomeNavbar />
    <Bottom1 />
    <Bottom2 />
    <RightBar />
    <MainQuote />
    <MainImage />
  </div>
);

export default HomePage;
