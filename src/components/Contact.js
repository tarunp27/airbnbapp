import React from "react";

function Contact(props) {
  return (
    <div className="contact--section">
      <img className="kitty" src="./kitty.jpg"></img>
      <h3 className="contact--name">{props.name}</h3>
      <div>
        <img className="contact--image" src="./Call-icon-on-transparent-background-PNG.png"></img>
        <span className="contact--phone">{props.phone}</span>
      </div>
      <div>
        <img className="contact--image" src="./emailL.png"></img>
        <span className="contact--email">{props.email}</span>
      </div>
    </div>
  );
}

export default Contact;
