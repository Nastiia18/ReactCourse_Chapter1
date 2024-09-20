import React, {useState} from 'react';
import ToDoList from './ToDoList.jsx';
import ToDoForm from './ToDoForm.jsx';
import SearchInput from './SearchInput.jsx';

const ToDoContainer =() =>
{
    const [toDoList, setToDoList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleAddToDo = (title) => {
      setToDoList((prevState) => [
        ...prevState,
        { id:  Date.now(), title },
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
        <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ToDoForm inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit} />
        <ToDoList toDoList={filteredToDoList} handleDelete={handleDelete} />
          </div>
      );
    };

export default ToDoContainer;