import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { fetchTodo } from "./api.ts";

function App() {
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    fetchTodo().then((data) => setTodos(data));
  }, []);

  useEffect(() => {
    const handleFilter = () => {
      switch (filterStatus) {
        case "active":
          return setFilteredTodos(todos.filter((todo) => !todo.completed));

        case "completed":
          return setFilteredTodos(todos.filter((todo) => todo.completed));

        default:
          return setFilteredTodos(todos);
      }
    };
    handleFilter();
  }, [todos, filterStatus]);

  return (
    <div className="wrapper dark">
      <div className="container">
        <Header />
        <main>
          <TodoForm todos={todos} setTodos={setTodos} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
