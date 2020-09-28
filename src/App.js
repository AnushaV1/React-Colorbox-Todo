import React from 'react';
import './App.css';
import BoxList from './ColorBox/BoxList';
import TodoList from './Todo/TodoList';

function App() {
  return (
    <div className="App">
    <BoxList />
    <TodoList />
    </div>
  );
}

export default App;
