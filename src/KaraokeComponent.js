import React from "react";
import "./App.css";
import karapic from "./img/karaokepage.jpeg";

const Karaoke = () => {
  return (
    <>
      <h2 className="component-title">Next Level Karaoke</h2>
      <div className="container">
        <img
          src={karapic}
          alt="Descriptive Alt Text"
          className="responsive-img"
        />
        <div className="text-content">
          <p>
            Picture this: You're standing on stage, surrounded by a live rock
            band comprised of guitar, bass, drums, and keyboards. The lyrics are
            in front of you, the electrifying sound of the live band is behind
            you, the microphone is in your hand and you are in the spotlight as
            you transform into the rock star of your dreams. Live Band Karaoke
            from Scozzari Sounds offers a one-of-a-kind experience that will
            make any event unforgettable. Whether it's a birthday party, wedding
            after-party, anniversary celebration, or corporate event, our live
            band karaoke will elevate the atmosphere and make your event the
            highlight of the season. From classic rock hits to modern pop
            anthems to Broadway showtunes to pop punk emo mainstays, our
            extensive song list has something for everyone. Whether you're a
            seasoned performer or a first-time singer, we guarantee a splendid
            time for all.
          </p>
        </div>
      </div>
    </>
  );
};
export default Karaoke;
