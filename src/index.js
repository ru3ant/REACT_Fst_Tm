import React from "react";
import ReactDOM from "react-dom";

const TodoList = () => {
  return (
    <ul>
      <li>Important Do</li>
      <li>More important</li>
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
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

const divRoot = document.getElementById("root");
ReactDOM.render(<App />, divRoot);
