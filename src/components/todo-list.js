import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({ todos }) => {
  const elements = todos.map(item => {
    // Записываем свойство id в переменную id, а все остальные свойства элемента массива в переменную otherProps
    const { id, ...otherProps } = item;
    return (
      // Задание уникального ключа для оптимизации обновления страницы реактом

      <li key={id}>
        <TodoListItem {...otherProps} />
      </li>
    );
  });
  return <ul>{elements}</ul>;
};

export default TodoList;
