import React, { Component } from 'react';
import './index.css'
class Filters extends Component {
  render() {
    return (
      <div className="filterBox">
        <div className="leftTodos">
          <span>3 </span>
          <span>items left</span>
        </div>
        <div className="filters">
          <span>All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
        <div className="clearCompleted">
          <span>Clear completed</span>
        </div>
      </div>
    );
  }
}

export default Filters;