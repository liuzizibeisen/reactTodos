import React, { Component } from 'react';
import './index.css'
class Filters extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 0
    }
  }
  toogleFilter (selected) {
    this.setState({selected: selected})
    this.props.toogleFilter(selected)
  }
  render() {
    return (
      <div className="filterBox">
        <div className="leftTodos">
          <span>{this.props.listLength} </span>
          <span>items left</span>
        </div>
        <div className="filters">
          <span className={this.state.selected === 0 ? 'selectedState' : ''} onClick={this.toogleFilter.bind(this, 0)}>All</span>
          <span className={this.state.selected === 1 ? 'selectedState' : ''} onClick={this.toogleFilter.bind(this, 1)}>Active</span>
          <span className={this.state.selected === 2 ? 'selectedState' : ''} onClick={this.toogleFilter.bind(this,2)}>Completed</span>
        </div>
        <div className="clearCompleted">
          <span>Clear completed</span>
        </div>
      </div>
    );
  }
}

export default Filters;