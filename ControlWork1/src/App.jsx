import React from 'react';
import AddressContainer from './components/AddressContainer';
import PageTitle from './components/PageTitle';
import './App.css';

function App() {
  return (
    <div>
      <PageTitle title="Address Book" />
      <AddressContainer />
    </div>
  );
}

export default App;
