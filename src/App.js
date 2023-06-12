import React from 'react';
//to do list
const todoList = [];

function App() {
  todoList.push(
    { id: 1, title: 'Do a react homework' },
    { id: 2, title: 'Text a friend' },
    { id: 3, title: 'Go to the gym' }
  );

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
