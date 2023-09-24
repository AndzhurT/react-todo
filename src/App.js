import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from "./components/TodoListItem.module.css";

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

  async function fetchData() {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      } 
      const data = await response.json();
      const todos = data.records.map(record => ({
        title: record.fields.title,
        id: record.id,
        createdTime: record.createdTime,
      }));
      console.log(todos)
      setTodoList(todos);
    } catch (error) {
      console.log("Oops, an error occurred...", error.message);
    } finally {
      setIsLoading(false);
    }

  } 

  useEffect(() => {
    fetchData();
  }, []);


  // useEffect to do list decleration to save local storage if the data is not loading
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(key, JSON.stringify(todoList));
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


  // Sorting // 
  const [isAscending, setIsAscending] = useState(true);

  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };
  

  // Sort the todoList based on the title field
  const sortedTodoList = [...todoList].sort((a, b) => {
    // If either a or b doesn't have a title, consider them equal
    if (!a.title || !b.title) {
      return 0; 
    }
    
    if (isAscending) {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className={style.h1}>Todo List</h1>
              {/* callback handler */}
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? (
                // creates a loading text
                <p className={style.p}>Loading...</p>
              ) : (
                // adds list items
                <TodoList todoList={sortedTodoList} removeTodo={removeTodo} />
              )}
              {/* button for sorting */}
              <button className={style.button3} onClick={toggleSortOrder}>
                {isAscending ? 'Sort-Descending' : 'Sort-Ascending'}
              </button>
            </>
          }
        />
        <Route path="new" element={<h1 className={style.h1}>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;

