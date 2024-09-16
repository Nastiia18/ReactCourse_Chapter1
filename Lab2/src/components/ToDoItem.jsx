import React from 'react';

function ToDoItem({ item, onDelete }) {
  return (
    <li>
      {item.title}
      <button type="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;
