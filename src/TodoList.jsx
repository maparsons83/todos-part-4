import React from 'react';
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
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