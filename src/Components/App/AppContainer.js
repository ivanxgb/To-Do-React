import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";

function AppContainer({
  completed,
  totalTodos,
  searchValue,
  setSearchValue,
  todos,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <React.Fragment>
      <TodoCounter completed={completed} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {}

        {todos.map((todo, index) => (
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

export { AppContainer };
