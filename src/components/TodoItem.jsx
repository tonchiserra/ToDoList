import React from 'react';
import trash from '../assets/trash.svg';
import { StyledCheckbox } from './ui/StyledCheckbox.jsx';
import { ButtonTrash } from './ui/ButtonTrash.jsx';
import { StyledItem } from './ui/StyledItem.jsx';

export function TodoItem({ todo, toggleTodo, deleteTodo }){
  const {id, task, completed} = todo;

  const todoClick = () => {
    toggleTodo(id);
  };

  const todoTrash = () => {
    deleteTodo(id);
  }

  return(
    <StyledItem>
      <div>
        <StyledCheckbox type="checkbox" checked={completed} onChange={todoClick} />
        {completed ? <strike>{task}</strike> : task}
      </div>
      <ButtonTrash onClick={todoTrash}>
        <img src={trash} alt="x" ></img>
      </ButtonTrash>
    </StyledItem>
  );
}