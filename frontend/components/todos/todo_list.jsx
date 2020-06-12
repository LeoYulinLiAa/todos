import React from 'react';
import TodoForm from './todo_form';
import TodoListItem from './todo_list_item';

export default class TodoList extends React.Component {


  render() {
    return <div>
      <ul>{ this.props.todos.map(todo => <TodoListItem todo={ todo } receiveTodo={ this.props.receiveTodo }/>) }</ul>
      <TodoForm receiveTodo={ this.props.receiveTodo }/>
    </div>
  }

}