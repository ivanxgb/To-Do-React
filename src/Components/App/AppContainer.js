import React, { Fragment } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";

function AppContainer() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({ error, loading, searchedTodos, toggleTodo, deleteTodo }) => (
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
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </>
  );
}

export { AppContainer };
