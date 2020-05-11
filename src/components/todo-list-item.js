import React from "react";

/*пример пропсов без дкструктуризации 
const TodoListItem = props => {
  const items = ["Important", "More important"];
  return <span>{items[props.label]}</span>;
};*/

/* пример использования деструктуризации переданных аргументов
задание значение по умолчанию для аргументов
задание стиля для хтмл-элемента*/
const TodoListItem = ({ label, important = false }) => {
  const items = ["Important", "More important"];
  const style = { color: important ? "tomato" : "black" };
  return <span style={style}>{items[label]}</span>;
};

export default TodoListItem;
