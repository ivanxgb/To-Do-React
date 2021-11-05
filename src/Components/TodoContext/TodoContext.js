import React, { useState } from "react";
import { useLocalStorage } from "../../CustomHooks/useLocalStorage";

//Context para el manejo de la lista de tareas
const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

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
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    saveTodos([
      ...todos,
      {
        completed: false,
        text: text,
      },
    ]);
  };

  const value = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    toggleTodo,
    deleteTodo,
    addTodo,
    openModal,
    setOpenModal,
  };

  return (
    //Provider que manejará los distintos props por la propiedad value
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
}

export { TodoProvider, TodoContext };
