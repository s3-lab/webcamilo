import React  from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

// pages

import Home from "./pages/home";
import Works from "./pages/works";
import About from "./pages/about";
import Blog from "./pages/blog";
import Prints from "./pages/prints";
import Contact from "./pages/contact";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/works">
          <Works/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/prints">
          <Prints/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
