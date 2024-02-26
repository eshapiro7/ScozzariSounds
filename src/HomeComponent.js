import React from "react";
import DJPic from "./img/DJhomepic.jpg";
import DrumPic from "./img/DrumHomepage.jpeg";
import PartyPic from "./img/PartyHomepage.jpg";
import "./App.css";

const Home = () => {
  return (
    <div className="image-row">
      <div className="image-container">
        <p className="image-text">Rock Band Karaoke</p>
        <img src={PartyPic} alt="Party Pic" />
      </div>
      <div className="image-container">
        <p className="image-text">Bespoke DJ Sets</p>
        <img src={DJPic} alt="DJ Pic" />
      </div>
      <div className="image-container">
        <p className="image-text">Live Music </p>
        <img src={DrumPic} alt="Drum Pic" />
      </div>
    </div>
  );
};
export default Home;
