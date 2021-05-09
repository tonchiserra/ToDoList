import React from 'react';
import './TodoItem.css';

export function TodoItem({ todo, toggleTodo }){
  const {id, task, completed} = todo;

  const todoClick = () => {
    toggleTodo(id);
  };

  return(
    <li>
      <input className="task-checkbox" type="checkbox" checked={completed} onChange={todoClick}></input>
      {completed ? <strike>{task}</strike> : task}
    </li>
  );
}