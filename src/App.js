import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
//to do list

function useSemiPersistentState(key) {
  // Save local storage items in savedTodoList variable
  const savedTodoList = JSON.parse(localStorage.getItem(key));

  // Create new state variable named "todoList" with setter "setTodoList" 
  // and default value pf a savedTodoList or an empty Array []
  const [todoList, setTodoList] = useState(savedTodoList || []);

  // useEffect
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todoList))
  }), [key, todoList];
  
  return (
    [todoList, setTodoList]
  )
}

function Main() {
  // Create new state variable named "todoList" with setter "setTodoList" 
  // and default value as the savedTodoList from localStorage

  const [todoList, setTodoList] = useSemiPersistentState("savedTodoList");

  // addTodo item
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  };

  // removeTodo item
  function removeTodo(id) {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList)
  }

  return (
    // empty tags - a short syntax for declaring fragments
    <>
      <h1> Todo List </h1>
      {/* callback handler */}
      <AddTodoForm onAddTodo={addTodo}/>
      {/* adds list items */}
      <TodoList todoList={todoList} removeTodo={removeTodo} />
      <p></p>
    </>
  );
}

export default Main;

