import React, { Component } from 'react';
import TodoItem from '../todoItem/index'
import './index.css'

class TodoList extends Component {
  handleDeleteItem = (deleteItemId) => {
    this.props.handleDeleteItem(deleteItemId)
  }
  toogleState = (state, itemId) => {
    this.props.toogleState(state, itemId)
  }
  render() {
    let { todoList } = this.props
    let { filterState } = this.props
    return (
      <div className="todoList">
        <ul>
          {todoList.map((item, index) => 
            <TodoItem className={(filterState === 0 || (filterState === 1 && !item.complete) || (filterState === 2 && item.complete)) ? '' : 'hide'} todoInfo={item} key={index} handleDeleteItem={this.handleDeleteItem} toogleState={this.toogleState} />
          )}
        </ul>
      </div>
    );
  }
}

export default TodoList;