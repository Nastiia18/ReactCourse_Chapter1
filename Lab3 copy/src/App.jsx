import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import PageTitle from './components/PageTitle.jsx';
import ToDoContainer from './components/ToDoContainer.jsx';

import './App.css';

function App() {
  return (
    <div>
      <PageTitle title="To Do List" />
      <ToDoContainer/>
    </div>
  );
}

export default App;
