import React from 'react';

export default class TodoItem extends React.Component {

    render() {
      return (
      <li  className={this.props.completed ? ("completed") : ('')}>
        <div className="view">
          <input className="toggle" onChange={this.props.toggleCompleted} type="checkbox" checked={this.props.completed} autoFocus />
          <label>{this.props.value}</label>
          <button onClick={this.props.deleteCompleted} className="destroy" />
        </div>
      </li>
      )
    }
  }