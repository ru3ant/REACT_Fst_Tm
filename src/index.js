import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
  //пример массива из объектов
  const todoData = [
    { label: "Important", important: false, id: 1 },
    { label: "More important", important: true, id: 2 },
    { label: "Very very important", important: false, id: 3 }
  ];
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

const divRoot = document.getElementById("root");
ReactDOM.render(<App />, divRoot);
