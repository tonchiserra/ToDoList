import React from 'react';
import './TodoList.css';
import { TodoItem } from './TodoItem.jsx';

export function TodoList({ todos, toggleTodo }){
  return(
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
}