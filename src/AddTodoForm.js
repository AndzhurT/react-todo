import React from 'react';
import {useState} from 'react';
import InputWithLabel from './InputWithLabel';
import style from "./TodoListItem.module.css";

function AddTodoForm ({onAddTodo}) {
  // creates a new state variable "todoTitle" with setter "setTodoTitle"
  const [todoTitle, setTodoTitle] = useState('');
  
  // stores the newTodoTitle and updates the todoTitle state
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle)
  }

  const handleAddTodo = (event) => {
    event.preventDefault(); //alows for todoItems to appear in the todolist
    const newTodo = {
      title: todoTitle, 
      id: Date.now(), // (temporary) a placeholder for unique number generation
    };
    onAddTodo(newTodo) // adds a todo to the onAddTodo
    setTodoTitle(''); // reset the todoTitle state to an empty string
    console.log(todoTitle) // logs out the todo item
  }; 

  return (
      <form onSubmit={handleAddTodo}>
        <InputWithLabel value={todoTitle} onChange={handleTitleChange}> Title </InputWithLabel>
        <button className={style.button2} type="submit">Create</button>
      </form>

  );
}


export default AddTodoForm;
