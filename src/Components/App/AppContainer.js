import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";

function AppContainer() {
  const { error, loading, searchedTodos, toggleTodo, deleteTodo } =
    useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Lo sentimos, hubo un error al traer los ToDo's</p>}
        {loading && <p>Cargando...</p>}
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
    </>
  );
}

export { AppContainer };
