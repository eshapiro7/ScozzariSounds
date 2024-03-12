import React from "react";
import DJPic from "./img/DJhomepic.jpg";
import DrumPic from "./img/DrumHomepage.jpeg";
import PartyPic from "./img/PartyHomepage.jpg";
import "./App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="image-row">
      <div className="image-container">
        <Link to="/karaoke" className="home-link">
          <p className="image-text">Rock Band Karaoke</p>
          <img src={PartyPic} alt="Party Pic" />
        </Link>
      </div>
      <div className="image-container">
        <Link to="/DJ" className="home-link">
          <p className="image-text">Bespoke DJ Sets</p>
          <img src={DJPic} alt="DJ Pic" />
        </Link>
      </div>
      <div className="image-container">
        <Link to="/band" className="home-link">
          <p className="image-text">Live Music </p>
          <img src={DrumPic} alt="Drum Pic" />
        </Link>
      </div>
    </div>
  );
};
export default Home;
