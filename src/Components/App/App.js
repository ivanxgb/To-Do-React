import React, { useState } from "react";
import { AppContainer } from "./AppContainer";
import { useLocalStorage } from "../../utils/CustomHooks/CustomHooks";

function App() {
  const {
    item: todos,
    setItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos =
    !searchValue.length > 0
      ? todos
      : todos.filter((todo) =>
          todo.text.toLowerCase().includes(searchValue.toLowerCase())
        );

  const toggleTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const oldTodos = [...todos];
    const newTodos = oldTodos.filter((todo) => !todo.text.includes(text));
    saveTodos(newTodos);
  };

  return (
    <AppContainer
      loading={loading}
      error={error}
      completed={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todos={searchedTodos}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
