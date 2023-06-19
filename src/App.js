import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import {useState} from 'react';
//to do list

function main() {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (todo) => {setNewTodo(todo)};

  return (
    <div>
      <h1> Todo List </h1>
      <TodoList />
      {/* callback handler */}
      <AddTodoForm onAddTodo={handleAddTodo}/>
      <p>Todo: {newTodo}</p>
    </div>
  );
}

export default main;

