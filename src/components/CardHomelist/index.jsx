import React from "react";
import "./style.css";

const CardHomelist =({
    data: { img, name, date},
}) => (
    <div className="list">
    <img className="img" src={img} alt="movie poster" />
    <div className="description">
      <h3>
        Name : <br /> {name}
      </h3>
      <h3>
        Watching Date : <br /> {date}
      </h3>
      
    </div>
  </div>
);
export default CardHomelist;