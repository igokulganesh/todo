import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem.js";
import TodoFilterControl from "./TodoFilterControl";
import { deleteCompletedTodoApi, fetchTodo } from "../api.ts";

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  filterStatus,
  setFilterStatus,
}) => {
  const [leftTodoCount, setLeftTodoCount] = useState(0);

  useEffect(() => {
    const unCompletedTodos = todos.filter((todo) => !todo.completed);
    setLeftTodoCount(unCompletedTodos.length);
  }, [todos]);

  const textPlacer = filterStatus === "completed" ? "closed task" : "task";

  const clearCompletedTodos = async () => {
    await deleteCompletedTodoApi();
    fetchTodo().then((data) => setTodos(data));
    setFilterStatus("all");
  };

  return (
    <>
      <section className="todo-list-section">
        {filteredTodos.length < 1 ? (
          <p className="info-text">There's no {textPlacer}</p>
        ) : (
          <ul className="todo-list">
            {filteredTodos.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                todos={todos}
              />
            ))}
          </ul>
        )}

        <div className="todo-filter-control">
          <div className="todos-count">{leftTodoCount} items left</div>

          <div className="control-btn group filter-control-for-desktop">
            <TodoFilterControl
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />
          </div>

          <div className="control-btn">
            <button className="btn" onClick={clearCompletedTodos}>
              Clear Completed
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoList;
