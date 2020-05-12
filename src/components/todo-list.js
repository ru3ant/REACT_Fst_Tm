import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({ todos }) => {
  //Пример 2 обращение к свойствам элементов массива-аргумента
  const elements = todos.map(item => {
    return (
      /* Передача аргументам значений из свойств объектов массива
      <li>
        <TodoListItem label={item.label} important={item.important} />
      </li>*/
      // Пример 3 заполнение аргументов одноименномыми свойствами объектов массива с помошью spread
      <li>
        <TodoListItem {...item} />
      </li>
    );
  });
  return (
    <ul>{elements}</ul>
    /*Пример 1 обращение к свойствам элементов массива-аргумента
   <ul>
      <li>
        <TodoListItem label={todos[0].label} important={todos[0].important} />
      </li>
      <li>
        <TodoListItem label={todos[1].label} important={todos[1].important} />
      </li>
      <li>
        <TodoListItem label={todos[2].label} important={todos[2].important} />
      </li>
    </ul>*/
  );
};

export default TodoList;
