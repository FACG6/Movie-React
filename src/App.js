import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";

class App extends Component {
  state = {
    watchList: [
      {
        Name: "CAPTAIN MARVEL",
        img:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
        date: "4April,2019",
        status: false
      },
      {
        Name: "CAPTAIN MARVEL",
        img:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
        date: "4April,2019",
        status: true
      }
    ]
  };
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path={"/search"} />
          <Route exact path={"/move-list"} />
        </Switch>
      </Router>
    );
  }
}

export default App;
