import React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

function TodoList({ todoList, removeTodo }) {
  return (
    <div>
      {todoList.map(({ id, title }) => (
        <TodoListItem key={id} id={id} title={title} removeTodo={removeTodo} />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;


