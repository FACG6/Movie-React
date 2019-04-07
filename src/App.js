import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
import Watchlist from "./components/Wathchlist";
import getMovie from "./utils/getMovie";
import Search from "./components/Search";
import Popup from "./components/Popup";
import Home from "./components/Home";

class App extends Component {
  state = {
    watchList: [
      {
        name: "CAPTAIN MARVEL",
        img:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
        date: "4April,2019",
        overview:
          " The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
        status: false
      },
      {
        Name: "CAPTAIN MARVEL",
        img:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
        date: "4April,2019",
        overview:
          " The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
        status: true
      }
    ],
    isError: null,
    searchResult: null,
    MovieToAdd: { display: "none" }
  };
  search = null;

  componentDidUpdate() {
    localStorage.setItem("state", JSON.stringify(this.state));
  }

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem("state")));
    this.setState({ searchResult: null });
  }
  handleIdToAdd = (e, title) => {
    this.setState({
      MovieToAdd: {
        id: e.target.id,
        name: title
      }
    });
  };

  handleAddToWatchList = e => {
    e.preventDefault();
    const date = e.target[0].value;
    const id = e.target[1].id;
    const { title: name, overview, poster_path } = this.state.searchResult[id];
    this.setState({
      MovieToAdd: { display: "none" },
      watchList: [
        {
          name,
          overview,
          img: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`,
          date
        }
      ].concat(this.state.watchList)
    });
  };

  handleWatchlistDone = e => {
    const id = e.target.id;
    this.setState(prevState => {
      const cloneState = { ...prevState };
      cloneState.watchList[id].status = true;
      return cloneState;
    });
  };

  handleGetMovie = e => {
    e.preventDefault();
    getMovie(this.search)
      .then(response => {
        this.setState({ searchResult: response.results });
        const html = document.querySelector("html");
        const sectionTwoTitel = document.querySelector(".watchList--main");
        setTimeout(() => (html.scrollTop = sectionTwoTitel.offsetTop), 200);
      })
      .catch(() => this.setState({ isError: "Error" }));
  };

  handleSearchInput = e => {
    this.search = e.target.value;
  };

  render() {
    if (this.state.isError) return <h1>Error ...</h1>;

    return (
      <BrowserRouter>
        <Nav />
        <Popup
          data={this.state.MovieToAdd}
          submit={this.handleAddToWatchList}
        />
        <Switch>
          <Route
            exact
            path={"/"}
            component={() => <Home watchList={this.state.watchList} />}
          />
          <Route
            exact
            path={"/search"}
            component={() => (
              <Search
                search={this.state.searchResult}
                change={this.handleSearchInput}
                submit={this.handleGetMovie}
                idAdd={this.handleIdToAdd}
              />
            )}
          />
          <Route
            exact
            path={"/movie-list"}
            component={() => (
              <Watchlist
                click={this.handleWatchlistDone}
                watchList={this.state.watchList}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
