import React from "react";

function TodoListItem({ id, title, removeTodo }) {
  const handleRemoveClick = () => {
    removeTodo(id);
  };

  return (
    <li key={id}>
      {title} <button onClick={handleRemoveClick}>Remove</button>
    </li>
  );
}

export default TodoListItem;
