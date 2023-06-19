import React from 'react';
import {useState} from 'react';

function AddTodoForm ({onAddTodo}) {
  const [todoTitle, setTodoTitle] = useState('');

  function handleAddTodo(event) {
    event.preventDefault();
    onAddTodo(todoTitle);
    // logs the value of the todoTitle in the console
    console.log(todoTitle);
    // after the todoTitle was submitted, the input box becomes an empty space
    setTodoTitle('');
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}> 
        <label htmlFor="todoTitle" > Title </label>
        {/* assiging the value todoTitle to the input and setting the onChange event to setTodoTitle -> 
        -> this way, the input becomes clear after submitting */}
        <input  type="text" id="todoTitle" name="title" value={todoTitle} onChange={(event) => setTodoTitle(event.target.value)}></input>
        <button type="submit"> Add </button>
      </form>
    </div>
  );
}


export default AddTodoForm;