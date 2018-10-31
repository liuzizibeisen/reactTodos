import React, { Component } from 'react';
import './index.css';

class AddTodo extends Component {
  render() {
    return (
      <div className="addTodo">
        <input type="text" placeholder="What needs to be done?" />
      </div>
    );
  }
}

export default AddTodo;