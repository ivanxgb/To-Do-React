import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { Modal } from "../Modal/Modal";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";

function AppContainer() {
  const {
    error,
    loading,
    searchedTodos,
    toggleTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Lo sentimos, hubo un error al traer los ToDo's</p>}
        {loading && <p>Cargando...</p>}
        {!loading && searchedTodos.length === 0 && <p>Crea tu primer todo!</p>}
        {searchedTodos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={index}
            onComplete={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          {searchedTodos?.map((todo, i) => (
            <p key={i}>{todo.text}</p>
          ))}
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export { AppContainer };
