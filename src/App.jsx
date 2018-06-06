import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import todoList from './todos.json';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

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

    const ActiveList = this.state.todos.filter(todo=> !todo.completed);
    const CompletedList = this.state.todos.filter(todo => todo.completed);

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" ref="clearInput" onKeyPress={this.handlePress} onChange={this.handleChange} placeholder="What needs to be done?" autofocus />
        </header>
        {/* This section should be hidden by default and shown when there are todos */}
        {/* <TodoList deleteCompleted={this.deleteCompleted} toggleCompleted={this.toggleCompleted} todos={this.state.todos} /> */}
        <Switch>
            <Route exact path='/' render={props => <TodoList {...props} todos={this.state.todos} deleteCompleted={this.deleteCompleted} toggleCompleted={this.toggleCompleted} />} />
            <Route path='/active' render={props => <TodoList {...props} todos={ActiveList} deleteCompleted={this.deleteCompleted} toggleCompleted={this.toggleCompleted} ActiveList={ActiveList} />} />
            <Route path='/completed' render={props => <TodoList {...props} todos={CompletedList} deleteCompleted={this.deleteCompleted} toggleCompleted={this.toggleCompleted} CompletedList={CompletedList} />} />
        </Switch>
        {/* This footer should hidden by default and shown when there are todos */}
        <footer className="footer">
          {/* This should be `0 items left` by default */}
          <span className="todo-count"><strong>{this.state.todos.filter(todo => todo.completed !==true).length}</strong> item(s) left</span>
          {/* Remove this if you don't implement routing */}
          {/* Hidden if no completed items are left ↓ */}
            <ul className="filters">
              <li>
                <Link to="/">
                All
                </Link>
              </li>
              <li>
                <Link to="/active">
                Active
                </Link>
              </li>
              <li>
                <Link to="/completed">
                Completed
                </Link>
              </li>
            </ul>
          <button onClick={this.deleteAllCompleted} className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }
}

export default App;
