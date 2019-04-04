import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
import header from "./components/Header/index"
class App extends Component {
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
