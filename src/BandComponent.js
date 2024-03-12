import React from "react";
import "./App.css";
import bandpic from "./img/bandpage.jpeg";

const Band = () => {
  return (
    <>
      <h2 className="component-title">A Band for Every Occasion</h2>
      <div className="container">
        <img
          src={bandpic}
          alt="Descriptive Alt Text"
          className="responsive-img"
        />
        <div className="text-content">
          <p>
            Elevate your special event to extraordinary heights with a live
            band! Available for weddings, birthday parties, bar mitzvahs,
            corporate events, awards ceremonies, anniversary celebrations, and
            more, our band specializes in delivering an unparalleled musical
            experience, curating repertoire from a wide variety of genres,
            ranging from rock and pop to jazz and classical, to create the right
            mood and vibe for your event. Whether you desire an intimate
            instrumental ensemble or a dynamic full-scale dance band featuring
            vocalists and horns, our group can be customized to suit the unique
            ambiance of your event. Comprised of seasoned New York City
            musicians, our ensemble boasts a wealth of experience performing on
            stages around the world, on Broadway productions, and alongside
            famous rock acts. Let us transform your event into an unforgettable
            celebration filled with moments of joy, laughter, and timeless
            memories.
          </p>
        </div>
      </div>
    </>
  );
};
export default Band;
