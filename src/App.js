import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/addTodo/index'
import TodoList from './components/todoList/index'
import Filters from './components/filters/index'

class App extends Component {
  constructor (props) {
    super(props)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
    this.state = {
      todoList: [],
      hasFilter: false
    }
  }
  componentDidMount () {
  }
  onAddItem = (newItem) => {
    this.state.todoList.push(newItem)
    this.setState({
      todoList: this.state.todoList
    })
  }
  handleDeleteItem = (deleteItemId) => {
    let todoList = this.state.todoList
    let nowTodoList = todoList.filter(function (item) {
      return item.id !== parseInt(deleteItemId)
    })
    this.setState({
      todoList: nowTodoList
    })
  }
  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <div className="content">
          <AddTodo todoList={this.state.todoList} onAddItem={this.onAddItem}/>
          <TodoList todoList={this.state.todoList} handleDeleteItem={this.handleDeleteItem}/>
          <Filters hasFilter={this.state.hasFilter}/>
        </div>
      </div>
    );
  }
}

export default App;
