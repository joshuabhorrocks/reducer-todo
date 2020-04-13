import React from 'react';
import Todo from "../src/components/Todo"
import TodoForm from "../src/components/TodoForm"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Default Header</h1>
        <Todo />
      </header>
      <TodoForm />
    </div>
  );
}

export default App;
