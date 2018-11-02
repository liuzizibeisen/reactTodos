import React, { Component } from 'react';
import './index.css'

class TodoItem extends Component {
  deleteItem = (e) => {
    this.props.handleDeleteItem && this.props.handleDeleteItem(e.currentTarget.id)
  }
  render() {
    return (
      <li className="todoItem">
        <input type="checkbox" id={this.props.todoInfo.id}/>
        <span className="label">{this.props.todoInfo.name}</span>
        <button className="delete" id={this.props.todoInfo.id} onClick={this.deleteItem}>X</button>
      </li>
    );
  }
}

export default TodoItem;