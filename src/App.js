import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/addTodo/index'
import TodoList from './components/todoList/index'
import Filters from './components/filters/index'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todoList: [],
      hasFilter: false
    }
  }
  componentDidMount () {
  }
  onAddItem (newItem) {
    this.state.todoList.push(newItem)
    this.setState({
      todoList: this.state.todoList
    })
  }
  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <div className="content">
          <AddTodo todoList={this.state.todoList} onAddItem={this.onAddItem.bind(this)}/>
          <TodoList todoList={this.state.todoList} />
          <Filters hasFilter={this.state.hasFilter}/>
        </div>
      </div>
    );
  }
}

export default App;
