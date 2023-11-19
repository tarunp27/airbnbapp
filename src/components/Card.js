import React from "react";

function Card() {
  return (
    <div className="card">
      <img src="./Card1.png"></img>
      <div className="cardstats">
        <img src="./Star 1.png" className="card--star"></img>  
        <span>(5.6)</span>
        <span className="gray">6.</span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>From $136/person</p>
    </div>
  );
}

export default Card