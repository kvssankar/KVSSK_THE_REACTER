import React from "react";
import "../css/homepage.css";
import mypic from "../assets/pp.jpg";
const MainImage = () => {
  return (
    <div className="image-main">
      <img src={mypic} height="400px" alt="" />
    </div>
  );
};

export default MainImage;
