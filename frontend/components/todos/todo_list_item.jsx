import React from 'react';

const TodoListItem = ({ todo }) => <li>
  <strong>{ todo.title }</strong> { todo.body }
  { todo.done ? <small className="primary">Done</small> : <small className="warning">WIP</small> }
</li>

export default TodoListItem;