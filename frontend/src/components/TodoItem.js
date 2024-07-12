import React, { useState } from "react";
import IconCheck from "../images/icon-check.svg";
import {
  deleteTodoApi,
  fetchTodo,
  toggleTodoById,
  updateTodoApi,
} from "../api.ts";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";

const TodoItem = ({ todo, setTodos }) => {
  const [todoValue, setTodoValue] = useState(todo.value);

  const classes = todo.completed ? "completed" : "";
  const checkIcon = todo.completed ? (
    <img src={IconCheck} alt="Completed" />
  ) : (
    ""
  );

  const toggleCompleted = async ({ id }) => {
    await toggleTodoById(id);
    fetchTodo().then((data) => setTodos(data));
  };

  const updateTodo = async (todoObj) => {
    await updateTodoApi(todoObj);
    fetchTodo().then((data) => setTodos(data));
  };

  const deleteTodo = async ({ id }) => {
    await deleteTodoApi(id);
    fetchTodo().then((data) => setTodos(data));
  };

  return (
    <li className={classes}>
      <label htmlFor={`todoCheckbox-${todo.id}`}>Completed Checkbox</label>
      <input
        id={`todoCheckbox-${todo.id}`}
        type="checkbox"
        name="completed-checkbox"
        defaultChecked={todo.completed}
      />
      <div className="checkbox-border-wrap">
        <span
          className="checkbox"
          onClick={() => toggleCompleted({ id: todo.id })}
        >
          {checkIcon}
        </span>
      </div>
      {todo.completed ? (
        <p className="line-through">{todo.value}</p>
      ) : (
        <input
          type="text"
          name="todo-input"
          id="todoInput"
          disabled={todo.completed}
          placeholder={todoValue}
          value={todoValue}
          className={classNames(
            { "line-through": todo.completed },
            "todo-input"
          )}
          onChange={(e) => setTodoValue(e.target.value)}
          onBlur={() => updateTodo({ ...todo, value: todoValue })}
        />
      )}
      <Button
        onClick={() => deleteTodo({ id: todo.id })}
        icon="pi pi-minus"
        size="large"
        severity="secondary"
      />
    </li>
  );
};

export default TodoItem;
