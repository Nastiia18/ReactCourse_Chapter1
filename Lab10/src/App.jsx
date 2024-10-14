import React from "react";
import PageTitle from "./features/todo/components/PageTitle.jsx";
import ToDoContainer from "./features/todo/components/ToDoContainer.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <PageTitle title="To Do List" />
      <ToDoContainer />
    </div>
  );
}

export default App;
