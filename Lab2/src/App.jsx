import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ToDoList from './components/ToDoList.jsx';
import './App.css';


function App() {
  const [toDoList, setToDoList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleAddToDo = (title) => {
    setToDoList((prevState) => [
      ...prevState,
      { id: Math.random(), title },
    ]);
  };

  const handleDelete = (id) => {
    setToDoList((prevState) => prevState.filter((item) => item.id !== id));
  };

  const filteredToDoList = toDoList.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;
    handleAddToDo(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ToDoList items={filteredToDoList} onDelete={handleDelete} />
    </div>
  );
}

export default App;
