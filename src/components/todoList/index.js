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
  render() {
    let { todoList } = this.props
    return (
      <div className="todoList">
        <ul>
          {todoList.map((item, index) => 
            <TodoItem todoInfo={item} key={index} />
          )}
        </ul>
      </div>
    );
  }
}

export default TodoList;