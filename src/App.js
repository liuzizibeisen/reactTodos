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
      filterState: 0
    }
  }

  // 添加一条 todo
  onAddItem = (newItem) => {
    this.state.todoList.push(newItem)
    this.setState({
      todoList: this.state.todoList
    })
  }

  // 删除一条 todo
  handleDeleteItem (deleteItemId) {
    let todoList = this.state.todoList
    let nowTodoList = todoList.filter(function (item) {
      return item.id !== parseInt(deleteItemId)
    })
    this.setState({
      todoList: nowTodoList
    })
  }

  // 保存编辑
  handleSaveEdit (editItemId, text) {
    let currentList = this.state.todoList
    currentList.map(function (item) {
      if (item.id === editItemId) {
        item.name = text
      }
    })
    this.setState({todoList: currentList})
  }

  // 切换状态
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

  // 切换筛选条件
  toogleFilter (filterState) {
    this.setState({filterState: filterState})
  }

  // 清空已完成的 todos
  clearCompleted () {
    let currentList = this.state.todoList.filter(function (item) {
      return !item.complete
    })
    this.setState({todoList: currentList})
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
            handleSaveEdit={this.handleSaveEdit.bind(this)}
            toogleState={this.toogleState.bind(this)} />
          <Filters 
            listLength={this.state.todoList.length}
            toogleFilter={this.toogleFilter.bind(this)}
            clearCompleted={this.clearCompleted.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
