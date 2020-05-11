import React from "react";
import ReactDOM from "react-dom";

const el = (
  <div>
    <h1>ToDo App</h1>
    <input placeholder="search" />
    <ul>
      <li>Important Do</li>
      <li>More important</li>
    </ul>
  </div>
);

const divRoot = document.getElementById("root");
ReactDOM.render(el, divRoot);
