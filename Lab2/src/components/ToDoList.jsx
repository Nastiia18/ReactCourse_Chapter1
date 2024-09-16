import React from 'react';
import ToDoItem from './ToDoItem.jsx';

function ToDoList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <ToDoItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ToDoList;
