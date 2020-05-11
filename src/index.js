import React from "react";
import ReactDOM from "react-dom";

const TodoList = () => {
  const items = ["Important Do", "More important"];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};

const SearchPanel = () => {
  return <input placeholder="search" />;
};

const AppHeader = () => {
  return <h1>ToDo App</h1>;
};

const App = () => {
  const loginBox = <span>Log in please</span>;
  const welcomBox = <span>Welcome Back</span>;
  const isLoggeIn = true;
  return (
    <div>
      {isLoggeIn ? welcomBox : loginBox}
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

const divRoot = document.getElementById("root");
ReactDOM.render(<App />, divRoot);
