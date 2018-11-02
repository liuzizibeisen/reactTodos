import React, { Component } from 'react';
import TodoItem from '../todoItem/index'
import './index.css'
import { debug } from 'util';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: this.props.todoList
    }
  }
  handleDeleteItem = (deleteItemId) => {
    this.props.handleDeleteItem(deleteItemId)
  }
  render() {
    let { todoList } = this.props
    return (
      <div className="todoList">
        <ul>
          {todoList.map((item, index) => 
            <TodoItem todoInfo={item} key={index} handleDeleteItem={this.handleDeleteItem} />
          )}
        </ul>
      </div>
    );
  }
}

export default TodoList;