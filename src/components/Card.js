import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={props.img}></img>
      <div className="cardstats">
        <img src="./Star 1.png" className="card--star"></img>  
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) .   </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>From ${props.price}/person</p>
    </div>
  );
}

export default Card