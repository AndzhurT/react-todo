import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

//to do list

function Main() {
  // Local storage key
  const key = "savedTodoList";

  // Save local storage items in savedTodoList variable
  const savedTodoList = JSON.parse(localStorage.getItem(key));

  // Create new state variable named "todoList" with setter "setTodoList" 
  // and default value pf a savedTodoList or an empty Array []
  const [todoList, setTodoList] = useState(savedTodoList || []);

  // An indicator to know if the data is still loading 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve({ data: { todoList: savedTodoList || [] } });
      }, 2000); 
    })

    promise
      .then((result) => result.data.todoList)
      .then((loadingTodoList) => {
        setTodoList(loadingTodoList);
        setIsLoading(false); // turns off loading once the data is fetched. 
      })
      .catch((error) => {
        console.error('An error occurred...', error);
      }) 
  }, []);


  // useEffect to do list decleration to save local storage if the data is not loading
  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem(key, JSON.stringify(todoList))
    } 
}, [key, todoList, isLoading]);


  // addTodo item 
  function addTodo(newTodo) {
    // An if condition to check if the item is empty or not. If it's not empty, then it will
    // add the item to the todoList.
    if (newTodo.title.trim() != "") {
      setTodoList([...todoList, newTodo])
    }
    else {
      console.log("An error occured, toDo item can not be empty...")
    }
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
      {isLoading ? (
        // creates a loading text
        <p>Loading...</p>
      ) : (
        // adds list items 
        <TodoList todoList={todoList} removeTodo={removeTodo} />
      )}
    </>
  );
}

export default Main;

