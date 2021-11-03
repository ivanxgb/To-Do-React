import React, { useState } from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Curso Intro a React", completed: false },
  { text: "Curso React Codecademy", completed: false },
];

function useLocalStorage() {}

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;
  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos =
    !searchValue.length > 0
      ? todos
      : todos.filter((todo) =>
          todo.text.toLowerCase().includes(searchValue.toLowerCase())
        );

  const saveTodos = (todosToSave) => {
    const stringifiedTodos = JSON.stringify(todosToSave);
    localStorage.setItem("TODOS_V1", stringifiedTodos);
    setTodos(todosToSave);
  };

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
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={index}
            onComplete={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
