import React from 'react';

const ToDoForm = ({inputValue, setInputValue, handleSubmit}) => {
  return(
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
    <button type="submit">Add</button>
  </form>
  )
}
export default ToDoForm;
