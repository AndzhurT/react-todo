import React from 'react';
//to do list
const todoList = [
  { id: 1, title: 'Do a react homework' },
  { id: 2, title: 'Text a friend' },
  { id: 3, title: 'Go to the gym' },
];

function TodoList() {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
