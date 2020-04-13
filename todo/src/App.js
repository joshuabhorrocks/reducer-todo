import React from 'react';
import TodoForm from "../src/components/TodoForm"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Todo List</h1>
      </header>
      <TodoForm />
    </div>
  );
}

export default App;
