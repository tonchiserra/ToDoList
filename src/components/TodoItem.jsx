import React from 'react';
import './TodoItem.css';
import trash from '../assets/trash.svg';

export function TodoItem({ todo, toggleTodo, deleteTodo }){
  const {id, task, completed} = todo;

  const todoClick = () => {
    toggleTodo(id);
  };

  const todoTrash = () => {
    deleteTodo(id);
  }

  return(
    <li>
      <div>
        <input className="task-checkbox" type="checkbox" checked={completed} onChange={todoClick}></input>
        {completed ? <strike>{task}</strike> : task}
      </div>
      <button className="button-trash" onClick={todoTrash}>
        <img src={trash} alt="x" ></img>
      </button>
    </li>
  );
}