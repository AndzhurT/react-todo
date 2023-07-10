import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({todoList}) {
  // todoList as a parameter 
  return (
    <div>
      {todoList.map(({id, title}) => (
        <li key={id}>{title}</li>
      ))}
    </div>
  );
}

export default TodoList;

