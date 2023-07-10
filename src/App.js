import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import {useState} from 'react';
//to do list


function Main() {
  // Create new state variable named "todoList" with setter "setTodoList" and default value of an empty Array []
  const [todoList, setTodoList] = useState([]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  };

  return (
    <div>
      <h1> Todo List </h1>
      <TodoList todoList={todoList} />
      {/* callback handler */}
      <AddTodoForm onAddTodo={addTodo}/>
      <p></p>
    </div>
  );
}

export default Main;

