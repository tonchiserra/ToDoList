import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from './components/TodoList.jsx';

const KEY = "todoApp.todos"

export function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea 1", completed: false },
  ]);

  const taskRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const addTask = () => {
    const task = taskRef.current.value;
    if (task === '') return;

    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), task, completed: false}]
    })

    taskRef.current.value = null;
  }

  return(
    <React.Fragment>
      <input ref={taskRef} type="text" placeholder="Add task"></input>
      <button onClick={addTask} >Add</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <div>Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar</div>
    </React.Fragment>
  );
}