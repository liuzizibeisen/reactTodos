import React, { Component } from 'react';
import './index.css'

class TodoItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showEdit: false,
      editText: ''
    }
  }
  // 删除一条 todo
  deleteItem = (e) => {
    this.props.handleDeleteItem && this.props.handleDeleteItem(e.currentTarget.id)
  }
  // 切换完成状态
  toogleState = (e) => {
    let state = e.currentTarget.checked
    let itemId = parseInt(e.currentTarget.value)
    this.props.toogleState(state, itemId)
  }
  // 切换到编辑状态
  handleEdit (editId) {
    this.setState({showEdit: true,editText: this.props.todoInfo.name,editId: editId})
  }
  // 编辑
  handleChange = (e) => {
    this.setState({editText: e.currentTarget.value})
  }
  // 保存编辑
  handleSaveEdit = () => {
    let text = this.state.editText.trim()
    if (text) {
      this.props.handleSaveEdit(this.state.editId, text)
      this.setState({editText: text,showEdit: false})
    } else {
      this.props.handleDeleteItem && this.props.handleDeleteItem(this.state.editId)
    }
  }
  // 保存编辑
  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.handleSaveEdit()
    }
  }
  render() {
    return (
      <li className="todoItem">
        {
          this.state.showEdit ? (
            <div className="editContainer">
              <input
                type="text"
                className="edit"
                value={this.state.editText}
                onBlur={this.handleSaveEdit}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
              />
            </div>
          ) : (<div>
          <input type="checkbox" value={this.props.todoInfo.id} onClick={this.toogleState}/>
          <span className="label" onDoubleClick={this.handleEdit.bind(this, this.props.todoInfo.id)} >{this.props.todoInfo.name}</span>
          <button className="delete" id={this.props.todoInfo.id} onClick={this.deleteItem}>X</button>
        </div>)
        }
      </li>
    );
  }
}

export default TodoItem;