import React, { useState } from 'react';
import ToDoList from './ToDoList.jsx';
import ToDoForm from './ToDoForm.jsx';
import SearchInput from './SearchInput.jsx';
import useGetAllToDo from '../hooks/useGetAllToDo';
import Loading from './Loading';

const ToDoContainer = () => {
  const { isLoading, data, setData } = useGetAllToDo();

  const [searchQuery, setSearchQuery] = useState('');
  const [inputValue, setInputValue] = useState('');

  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleAddToDo = (title) => {
    setData((prevState) => [...prevState, { id: Date.now(), title }]);
  };

  const handleDelete = (id) => {
    setData((prevState) => prevState.filter((item) => item.id !== id));
  };

  const handleEdit = (id, newTitle) => {
    setData((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item
      )
    );
    setEditingId(null);
    setErrorMessage('');
  };

  const startEditing = (id, title) => {
    setEditingId(id);
    setEditValue(title);
    setErrorMessage('');
  };

  const saveEdit = () => {
    if (!editValue.trim()) {
      setErrorMessage('Title is required');
      return;
    }
    handleEdit(editingId, editValue);
    setEditValue('');
  };

  const filteredToDoList = data.filter((item) =>
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
      <ToDoForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />
      <Loading isLoading={isLoading}>
        <ToDoList
          toDoList={filteredToDoList}
          handleDelete={handleDelete}
          handleEdit={saveEdit}
          editingId={editingId}
          setEditValue={setEditValue}
          editValue={editValue}
          startEditing={startEditing}
          errorMessage={errorMessage}
        />
      </Loading>
    </div>
  );
};

export default ToDoContainer;
