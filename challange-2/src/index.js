import React from "react";
import ReactDOM from "react-dom";

const name="Abu Shadat Shaikat";
const date= new Date().toLocaleDateString();
const time=new Date().toLocaleTimeString();

ReactDOM.render(<React.Fragment>
  <h3>My name is {name}</h3>
  <p>Todays date: {date}</p>
  <p>Current time: {time}</p>
</React.Fragment>,document.getElementById("root"))



