import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";
import technology from "./pages/technology";
import signin from "./pages/signin";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/technology" component={technology}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Service}></Route>
        <Route path="/signin" component={signin}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
