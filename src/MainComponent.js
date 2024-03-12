import React from "react";
import "./App.css";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import Testimonials from "./TestimonialsComponent";
import Band from "./BandComponent";
import Karaoke from "./KaraokeComponent";
import DJ from "./DJComponent";
import { Route, Switch, Redirect } from "react-router-dom";

function Main() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/band" component={Band} />
        <Route path="/karaoke" component={Karaoke} />
        <Route path="/DJ" component={DJ} />
        <Route path="/testimonials">
          <Testimonials />
        </Route>
        <Route path="/https://calendly.com/dane-scozzari/30min">
          <a
            href="https://calendly.com/dane-scozzari/30min"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </Route>
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </>
  );
}

export default Main;
