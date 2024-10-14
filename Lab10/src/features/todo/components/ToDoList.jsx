import React from 'react';

const ToDoList = ({
  toDoList,
  handleDelete,
  handleEdit,
  editingId,
  setEditValue,
  startEditing,
  editValue,
  errorMessage,
}) => {
  return (
    <ul className="todo-list">
      {toDoList.map((item) => (
        <li key={item.id} className="todo-item">
          {editingId === item.id ? (
            <>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className={errorMessage ? 'error' : ''}
              />
              <button onClick={handleEdit}>Save</button>
              {}
              {errorMessage && (
                <span className="error-message">{errorMessage}</span>
              )}
            </>
          ) : (
            <>
              <span>{item.title}</span>
              <div className="button-group">
                <button
                  className="edit"
                  onClick={() => startEditing(item.id, item.title)}
                >
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
