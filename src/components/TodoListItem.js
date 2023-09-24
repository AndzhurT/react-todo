import React from 'react';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

function TodoListItem({ id, title, removeTodo }) {
  const handleRemoveClick = () => {
    removeTodo(id);
  };

  return (
    <li className={style.ListItem} key={id}>
      {title} <button className={style.button} onClick={handleRemoveClick}>Remove</button>
    </li>
  );
}

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired,
};


export default TodoListItem;
