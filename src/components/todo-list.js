import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = () => {
  return (
    <ul>
      <li>
        <TodoListItem label="0" />
      </li>
      <li>
        <TodoListItem label="1" important />
      </li>
    </ul>
  );
};

export default TodoList;
