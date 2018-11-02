import React, { Component } from 'react';
import './index.css'

class TodoItem extends Component {
  render() {
    return (
      <li className="todoItem">
        <input type="checkbox" id={this.props.todoInfo.id}/>
        <span className="label">{this.props.todoInfo.name}</span>
        <button className="delete" id={this.props.todoInfo.id}>X</button>
      </li>
    );
  }
}

export default TodoItem;