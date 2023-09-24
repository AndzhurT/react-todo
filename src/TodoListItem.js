import React from "react";
import style from "./TodoListItem.module.css";

function TodoListItem({ id, title, removeTodo }) {
  const handleRemoveClick = () => {
    removeTodo(id);
  };

  return (
    <li className={style.ListItem} key={id}>
      {title} <button className={style.button} onClick={handleRemoveClick}>Remove</button>
    </li>
  );
}

export default TodoListItem;
