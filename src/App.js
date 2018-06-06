import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todoList from './todos.json';

class TodoItem extends Component {



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

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

 render() {
   return (
    <section className="main">
    <ul className="todo-list">
      {/* These are here just to show the structure of the list items */}
      {/* List items should get the class `editing` when editing and `completed` when marked as completed */}
      {this.props.todos.map( todo => <TodoItem key={todo.id} deleteCompleted={this.props.deleteCompleted(todo.id)} toggleCompleted={this.props.toggleCompleted(todo.id)} value={todo.title} completed={todo.completed} /> )}
    </ul>
  </section>
   )
 }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todoList,
    }
  }

  handlePress = (event) => {
    let updatedTodoList = this.state.todos.slice();
    let newTodo = {
      "userId": 1,
      "id": this.state.todos[this.state.todos.length-1].id + 1,
      "title": event.target.value,
      "completed": false,
    }
    updatedTodoList.push(newTodo)
    if(event.key === "Enter") {
      this.setState({todos: updatedTodoList})
      this.refs.clearInput.value = ''
    }
  }

  toggleCompleted = id => evt => {
      const { todos } = this.state;
  
      this.setState({
        todos: todos.map(todo => todo.id === id ? {
          ...todo,
          completed: !todo.completed
        } : todo)
      });
    }

    deleteCompleted = id => evt => {
      const {todos} = this.state
      this.setState({todos: todos.filter(todo => todo.id !== id)})
    }

    deleteAllCompleted = evt => {
      const {todos} = this.state
      this.setState({todos: todos.filter(todo => todo.completed !== true)})
    }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" ref="clearInput" onKeyPress={this.handlePress} onChange={this.handleChange} placeholder="What needs to be done?" autofocus />
        </header>
        {/* This section should be hidden by default and shown when there are todos */}
        <TodoList deleteCompleted={this.deleteCompleted} toggleCompleted={this.toggleCompleted} todos={this.state.todos} />
        {/* This footer should hidden by default and shown when there are todos */}
        <footer className="footer">
          {/* This should be `0 items left` by default */}
          <span className="todo-count"><strong>{this.state.todos.filter(todo => todo.completed !==true).length}</strong> item(s) left</span>
          {/* Remove this if you don't implement routing */}
          {/* Hidden if no completed items are left ↓ */}
          <button onClick={this.deleteAllCompleted} className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }
}

export default App;
