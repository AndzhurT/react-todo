import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList, removeTodo }) {
  return (
    <div>
      {todoList.map(({ id, title }) => (
        <TodoListItem key={id} id={id} title={title} removeTodo={removeTodo} />
      ))}
    </div>
  );
}

export default TodoList;


