import React, { Component } from 'react';
import './index.css';

class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.handleAddItem = this.handleAddItem.bind(this)
  }
  handleAddItem (e) {
    if (e.keyCode === 13) {
      let name = e.currentTarget.value
      let id = 0
      if(this.props.todoList.length > 0) {
        id = this.props.todoList[this.props.todoList.length - 1].id + 1
      }
      let newItem = {
        id: id,
        name: name,
        complete: false
      }
      e.currentTarget.value = ''
      this.props.onAddItem && this.props.onAddItem(newItem)
    }
  }
  render() {
    return (
      <div className="addTodo">
        <input className="addText" type="text" placeholder="What needs to be done?" onKeyDown={this.handleAddItem} />
      </div>
    );
  }
}

export default AddTodo;