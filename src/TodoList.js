import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
  { id: 1, title: 'Do a react homework' },
  { id: 2, title: 'Text a friend' },
  { id: 3, title: 'Go to the gym' },
];

function TodoList() {
  return (
    <div>
      {todoList.map((todo) => (
        <TodoListItem key = {todo.id} todo = {todo}></TodoListItem>
      ))}
    </div>
  );
}

export default TodoList;

