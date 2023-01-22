import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function LeftSide(props) {
  return (
    <div className="left">
      {props.details.map((detail, index) => {
        return (
          <div id={"id" + index} className="detail-block">
            <h3>{detail.heading}</h3>
            <h2>{detail.subHeading}</h2>
            <p>{detail.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default LeftSide;
