import React, { Component } from 'react';
import TodoItem from '../todoItem/index'
import './index.css'

class TodoList extends Component {
  // 删除一条
  handleDeleteItem = (deleteItemId) => {
    this.props.handleDeleteItem(deleteItemId)
  }
  // 切换完成状态
  toogleState = (state, itemId) => {
    this.props.toogleState(state, itemId)
  }
  // 保存编辑
  handleSaveEdit = (editId, text) => {
    this.props.handleSaveEdit(editId, text)
  }
  render() {
    let { todoList } = this.props
    let { filterState } = this.props
    return (
      <div className="todoList">
        <ul>
          {todoList.map((item, index) => 
            <TodoItem
              todoInfo={item}
              key={index}
              filterState={filterState}
              handleDeleteItem={this.handleDeleteItem}
              handleSaveEdit={this.handleSaveEdit}
              toogleState={this.toogleState} />
          )}
        </ul>
      </div>
    );
  }
}

export default TodoList;