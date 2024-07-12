import React, { useState } from "react";
import { Button } from "primereact/button";
import { createTodo, fetchTodo } from "../api.ts";

const TodoForm = ({ todos, setTodos }) => {
  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todoInput) {
      await createTodo(todoInput.trim());
      fetchTodo().then((data) => setTodos(data));
      setTodoInput("");
    }
  };

  return (
    <div className="form-control">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo-input"
          className="todo-input"
          id="todoInput"
          placeholder="Create a new todo..."
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
      </form>
      <Button
        onClick={handleSubmit}
        icon="pi pi-plus"
        size="large"
        severity="secondary"
      />
    </div>
  );
};

export default TodoForm;
