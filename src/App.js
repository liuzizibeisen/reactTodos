import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/addTodo/index'
import TodoList from './components/todoList/index'
import Filters from './components/filters/index'

class App extends Component {
  constructor (props) {
    super(props)
    // this.handleDeleteItem = this.handleDeleteItem.bind(this)
    this.state = {
      todoList: [],
      filterState: 0
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
  handleDeleteItem (deleteItemId) {
    let todoList = this.state.todoList
    let nowTodoList = todoList.filter(function (item) {
      return item.id !== parseInt(deleteItemId)
    })
    this.setState({
      todoList: nowTodoList
    })
  }

  toogleState (state, itemId) {
    let todoList = this.state.todoList
    todoList.map(function (item) {
      if (item.id === itemId) {
        if (state) {
          item.complete = true
        } else {
          item.complete = false
        }
      }
    })
    this.setState({todoList: todoList})
  }

  toogleFilter (filterState) {
    this.setState({filterState: filterState})
  }
  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <div className="content">
          <AddTodo todoList={this.state.todoList} onAddItem={this.onAddItem}/>
          <TodoList 
            todoList={this.state.todoList}
            filterState={this.state.filterState}
            handleDeleteItem={this.handleDeleteItem.bind(this)}
            toogleState={this.toogleState.bind(this)} />
          <Filters 
            listLength={this.state.todoList.length}
            toogleFilter={this.toogleFilter.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
