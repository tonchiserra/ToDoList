import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { TodoList } from './components/TodoList.jsx';
import { Footer } from './components/Footer.jsx';

const KEY = "todoApp.todos"

export function App() {
  const [todos, setTodos] = useState([]);

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

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);

    let i = newTodos.indexOf(todo);
    newTodos.splice(i, 1);

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
      <section className="app-content">
        <h1 className="title">ToDoList</h1>
        <hr></hr>

        <div className="add-task-content">
          <input className="input-add-task" ref={taskRef} type="text" placeholder="Add task"></input>
          <button className="button-add-task" onClick={addTask} >Add</button>
        </div>

        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

        <div className="text-task-to-finish">Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar</div>
      </section>
      <Footer />
    </React.Fragment>
  );
}