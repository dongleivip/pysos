import React from "react";
import { render } from "react-dom";

import "./sass/main.scss"

import Dashboard from "./Dashboard.js"


const App = () =>{
  return (
    <div>
      <h1>Hello Parcel</h1>
    </div>
  )
};


render(<Dashboard />, document.getElementById("app"));