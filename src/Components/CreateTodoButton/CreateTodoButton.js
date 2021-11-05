import React, { useState } from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {
  const handleClick = () => {
    setOpenModal((openModal) => !openModal);
  };

  return (
    <button className={`CreateTodoButton`} onClick={handleClick}>
      +
    </button>
  );
}

export { CreateTodoButton };
