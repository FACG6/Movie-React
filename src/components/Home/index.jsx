import React from "react";
import CardHomeList from "../CardHomelist";
import "./style.css";
const WatchListHome = ({watchList}) => (
    <section id="movie-list" className="watch-list">
        <div className="main-list">
            <h1 className="homeList-h1">The Last movie you added</h1>
            <div className="list-watchList">
            {watchList.map((list,index)=>(
                <CardHomeList key={index} id={index} data={list}/>
            ))}

            </div>
        </div>
    </section>
);
export default WatchListHome;