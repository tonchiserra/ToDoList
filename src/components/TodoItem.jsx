import React from 'react';

export function TodoItem({ todo, toggleTodo }){
  const {id, task, completed} = todo;

  const todoClick = () => {
    toggleTodo(id);
  };

  return(
    <li>
      <input type="checkbox" checked={completed} onChange={todoClick}></input>
      {task}
    </li>
  );
}