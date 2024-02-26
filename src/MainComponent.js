import React from "react";
import "./App.css";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
// import Testimonials from "./TestimonialsComponent";
import Services from "./ServicesComponent";
import Contact from "./ContactComponent";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

const Testimonials = () => {
  return <div id="kat">DO YOU WORK????</div>;
};
export default function NestingExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path="/topics">
            <Testimonials />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
// function Main() {
//   return (
//     <Router>
//       <Header />
//       <Switch>
//         <Route path="/home">
//           <Home />
//         </Route>
//         <Route path="/services">
//           <Services />
//         </Route>
//         <Route path="/testimonials">
//           <div id="kat">DO YOU WORK????</div>
//         </Route>
//         <Route path="/contact">
//           <Contact />
//         </Route>
//         <Redirect to="/home" />
//       </Switch>
//       <Footer />
//     </Router>
//   );
// }

// export default Main;
