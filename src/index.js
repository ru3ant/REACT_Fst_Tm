import React from "react";
import ReactDOM from "react-dom";

const el = <h1>h!W</h1>; //jsX - el = React.createElement('h1', null, 'h!W');

const divRoot = document.getElementById("root");
ReactDOM.render(el, divRoot);
