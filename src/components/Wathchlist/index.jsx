import React from "react";
import Cardwatchlist from "../Cardwatchlist";
import "./style.css";

const Watchlist = ({ click, watchList }) => (
  <section id="movie-list" className="watchList">
    <div className="watchList--main">
      <h1 className="watchList-h1">Watch List</h1>
      <div className="watchList-list">
        {watchList.map((list, index) => (
          <Cardwatchlist key={index} click={click} id={index} data={list} />
        ))}
      </div>
    </div>
  </section>
);

export default Watchlist;
