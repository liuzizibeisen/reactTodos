import React, { Component } from 'react';
import './index.css'

class TodoList extends Component {
  render() {
    return (
      <div className="todoItem">
        <input type="checkbox" />
        <span className="label">todoItem</span>
        <button className="delete">X</button>
      </div>
    );
  }
}

export default TodoList;