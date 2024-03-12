import React from "react";
import "./App.css";
import djpic from "./img/DJpage.jpg";

const DJ = () => {
  return (
    <>
      <h2 className="component-title">All the songs you love</h2>
      <div className="container">
        <img
          src={djpic}
          alt="Descriptive Alt Text"
          className="responsive-img"
        />
        <div className="text-content">
          <p>
            DJ Dangerous Dane brings the perfect blend of music and
            entertainment to keep your guests grooving all night long. A fixture
            on the wedding and corporate events circuit, DJ Dangerous Dane is
            also a regular presence in the vibrant nightlife scene of Brooklyn
            and Manhattan, spinning tunes that keep the party going until the
            early hours. With a versatile repertoire spanning sultry and smooth
            hits for cocktail hour and dinner, to high-energy tracks that ignite
            the dance floor, DJ Dangerous Dane ensures a seamless flow of music
            tailored to every moment of your event. But DJ Dangerous Dane is
            more than just a music maestro; he's also a master of ceremonies,
            coordinating the evening's movements, speeches, first dances, and
            special announcements with professionalism and flair. With his
            charismatic presence and expert timing, he keeps the energy high and
            the event running smoothly from start to finish. In addition to
            professional sound equipment, DJ Dangerous Dane offers a range of
            optional enhancements to take your event to the next level,
            including dance party lighting, smoke machines, sparklers, slide
            shows, videos, and other special effects.
          </p>
        </div>
      </div>
    </>
  );
};
export default DJ;
