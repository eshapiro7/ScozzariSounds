// import React from "react";
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
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/band" component={Band} />
        <Route path="/karaoke" component={Karaoke} />
        <Route path="/DJ" component={DJ} />
        <Route path="/testimonials" component={Testimonials} />
        {/* Handling external link directly */}
        <Route path="/calendly">
          <Redirect
            to={{ pathname: "https://calendly.com/dane-scozzari/30min" }}
          />
        </Route>
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </>
  );
}

export default Main;
