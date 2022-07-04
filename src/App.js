import "./App.css";

import React, { useState } from "react";

import Nav from "./views/Nav";
import logo from "./logo.svg";
import Covid from "./views/Covid";

function App() {
  const name = "Sao";
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Hoc ReactJs" },
    { id: "todo2", title: "Hoc Vuejs" },
  ]);

  const handleAddNewTodo = (event) => {
    setTodo(event.target.value);
  };

  const handleSaveTodo = () => {
    let newTodo = {
      id: Math.random() * 10,
      title: todo,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hello {name}!!!</p>

        {/* <input
          type="text"
          value={todo}
          onChange={(event) => handleAddNewTodo(event)}
        />
        <button onClick={() => handleSaveTodo()}>Save Todo</button>
        <ul className="todos-container">
          {todos.map((todo) => {
            return (
              <li className="todo-child" key={todo.id}>
                {todo.title}
              </li>
            );
          })}
        </ul> */}
      </header>
      <Covid />
    </div>
  );
}

export default App;
