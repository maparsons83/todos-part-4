import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todoList from './todos.json';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   value: props.value,
    //   isCompleted: false,
    // }
  }

  render() {
    return (
    <li className={this.props.isCompleted}>
      <div className="view">
        <input className="toggle"  type="checkbox" autofocus />
        <label>{this.props.value}</label>
        <button className="destroy"/>
      </div>
    </li>
    )
  }
}

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todoList,
    }

  }

 render() {
   return (
    <section className="main">
    <ul className="todo-list">
      {/* These are here just to show the structure of the list items */}
      {/* List items should get the class `editing` when editing and `completed` when marked as completed */}
      {this.state.todos.map( todo => <TodoItem value={todo.title} isCompleted={todo.completed} /> )}
    </ul>
  </section>
   )
 }
}

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autofocus />
        </header>
        {/* This section should be hidden by default and shown when there are todos */}
        <TodoList />
        {/* This footer should hidden by default and shown when there are todos */}
        <footer className="footer">
          {/* This should be `0 items left` by default */}
          <span className="todo-count"><strong>0</strong> item(s) left</span>
          {/* Remove this if you don't implement routing */}
          {/* Hidden if no completed items are left ↓ */}
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }
}

export default App;
