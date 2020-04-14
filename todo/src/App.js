import React from 'react';
import Todo from "../src/components/Todo"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Todo List</h1>
      </header>
      <Todo />
    </div>
  );
}

export default App;
