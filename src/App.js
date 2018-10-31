import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/addTodo/index'
import TodoList from './components/todoList/index'
import Filters from './components/filters/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <div className="content">
          <AddTodo />
          <TodoList />
          <Filters />
        </div>
      </div>
    );
  }
}

export default App;
