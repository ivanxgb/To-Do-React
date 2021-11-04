import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const handleClick = () => {
    console.log("Aqui se debe abrir el modal");
  };

  return (
    <button className="CreateTodoButton" onClick={handleClick}>
      +
    </button>
  );
}

export { CreateTodoButton };
