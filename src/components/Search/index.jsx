import React from "react";
import "./style.css";
import Header from "../Header";
import Cardsearch from "../Cardsearch";

const Search = ({ change, search, submit, idAdd }) => (
  <section id="movie-list" className="watchList">
    <Header change={change} submit={submit} />
    {search && (
      <div className="watchList--main">
        <h1 className="watchList-h1">Search Result</h1>
        <div className="watchList-list">
          {search.map((search, index) => (
            <Cardsearch key={index} idAdd={idAdd} id={index} data={search} />
          ))}
        </div>
      </div>
    )}
  </section>
);

export default Search;
