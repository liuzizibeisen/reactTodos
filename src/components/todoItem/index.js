import React, { Component } from 'react';
import './index.css'

class TodoItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showEdit: false,
      editText: '',
      completed: false,
      showDelete: false
    }
    this.deleteItem = this.deleteItem.bind(this)
    this.toogleState = this.toogleState.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSaveEdit = this.handleSaveEdit.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
  }
  // 删除一条 todo
  deleteItem (e) {
    this.props.handleDeleteItem && this.props.handleDeleteItem(e.currentTarget.id)
  }
  // 切换完成状态
  toogleState (e) {
    let state = e.currentTarget.checked
    let itemId = parseInt(e.currentTarget.value)
    this.setState({completed: state})
    this.props.toogleState(state, itemId)
  }
  // 切换到编辑状态
  handleEdit (editId) {
    this.setState({showEdit: true,editText: this.props.todoInfo.name,editId: editId})
  }
  // 编辑
  handleChange (e) {
    this.setState({editText: e.currentTarget.value})
  }
  // 保存编辑
  handleSaveEdit () {
    let text = this.state.editText.trim()
    if (text) {
      this.props.handleSaveEdit(this.state.editId, text)
      this.setState({editText: text,showEdit: false})
    } else {
      this.props.handleDeleteItem && this.props.handleDeleteItem(this.state.editId)
    }
  }
  // 保存编辑
  handleKeyDown (e) {
    if (e.keyCode === 13) {
      this.handleSaveEdit()
    }
  }
  mouseEnter () {
    this.setState({showDelete: true})
  }

  mouseLeave () {
    this.setState({showDelete: false})
  }
  render() {
    return (
      <li className="todoItem" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
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
          <input type="checkbox" value={this.props.todoInfo.id} checked={this.props.todoInfo.complete ? 'checked': ''} onChange={this.toogleState}/>
          <span className={`label ${this.props.todoInfo.complete ? 'through': ''}`} onDoubleClick={this.handleEdit.bind(this, this.props.todoInfo.id)} >{this.props.todoInfo.name}</span>
          <button className={`delete ${this.state.showDelete ? '' : 'hide'}`} id={this.props.todoInfo.id} onClick={this.deleteItem}>X</button>
        </div>)
        }
      </li>
    );
  }
}

export default TodoItem;