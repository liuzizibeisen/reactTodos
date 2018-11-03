import React, { Component } from 'react';
import './index.css'

class TodoItem extends Component {
  deleteItem = (e) => {
    this.props.handleDeleteItem && this.props.handleDeleteItem(e.currentTarget.id)
  }
  toogleState = (e) => {
    let state = e.currentTarget.checked
    let itemId = parseInt(e.currentTarget.value)
    this.props.toogleState(state, itemId)
  }
  render() {
    return (
      <li className="todoItem">
        <input type="checkbox" value={this.props.todoInfo.id} onClick={this.toogleState}/>
        <span className="label">{this.props.todoInfo.name}</span>
        <button className="delete" id={this.props.todoInfo.id} onClick={this.deleteItem}>X</button>
      </li>
    );
  }
}

export default TodoItem;