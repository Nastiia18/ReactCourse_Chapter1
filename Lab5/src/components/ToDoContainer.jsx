import React, { useState } from "react";
import ToDoList from "./ToDoList.jsx";
import ToDoForm from "./ToDoForm.jsx";
import SearchInput from "./SearchInput.jsx";
import useGetAllToDo from "../hooks/useGetAllToDo";
import Loading from "./Loading";

const ToDoContainer = () => {
  const { isLoading, data, setData } = useGetAllToDo();

  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleAddToDo = (title) => {
    setData((prevState) => [...prevState, { id: Date.now(), title }]);
  };

  const handleDelete = (id) => {
    setData((prevState) => prevState.filter((item) => item.id !== id));
  };

  const filteredToDoList = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    handleAddToDo(inputValue);
    setInputValue("");
  };

  return (
    <Loading isLoading={isLoading}>
      <div>
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <ToDoForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
        />
        <ToDoList toDoList={filteredToDoList} handleDelete={handleDelete} />
      </div>
    </Loading>
  );
};

export default ToDoContainer;
