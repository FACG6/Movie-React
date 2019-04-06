import React from "react";
import "./style.css";

const Popup = ({ data: { id, name, display }, submit }) => (
  <div className={display ? display : "gray"}>
    <div className="white">
      <h3 className="text"> Name : {name}</h3>
      <div className="date">
        <h3 className="text">Date:</h3>
        <form className="form" onSubmit={submit}>
          <input className="inputDate" type="date" />
          <input
            value="Add To Watch List"
            type="submit"
            className="submit"
            id={id}
          />
        </form>
      </div>
    </div>
  </div>
);

export default Popup;
