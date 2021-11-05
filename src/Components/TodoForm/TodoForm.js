import React, { useState, useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const handleChange = ({ target }) => {
    setNewTodoValue(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Escribe un nuevo To Do!</label>
      <textarea
        autoCapitalize="sentence"
        rows="10"
        cols="50"
        value={newTodoValue}
        onChange={handleChange}
      />
      <div>
        <button onClick={handleCancel} type="button">
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export { TodoForm };
