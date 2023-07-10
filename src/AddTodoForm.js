import React from 'react';
import {useState} from 'react';
import TodoList from './TodoList';

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
    <div>
      <form onSubmit={handleAddTodo}> 
        <label htmlFor="todoTitle" > Title </label>
        {/* assiging the value todoTitle to the input and setting the onChange to call the function handleTitleChange*/}
        <input  type="text" id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange}></input>
        <button type="submit"> Add </button>
      </form>
    </div>
  );
}


export default AddTodoForm;
