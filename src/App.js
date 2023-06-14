import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
//to do list

function main() {
  return (
    <div>
      <h1> Todo List </h1>
      <TodoList />
      <AddTodoForm />
    </div>
  );
}

export default main;
