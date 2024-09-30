import React from 'react';

const ToDoList = ({ toDoList, handleDelete }) => {
  return (
    <ul>
      {toDoList.map((item) => (
        <li key={item.id}>
          {item.title}{' '}
          <button type="button" onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
