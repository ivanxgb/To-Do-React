import React, { useState } from "react";
import "./TodoItem.css";

function TodoItem({ todo, onComplete, onDelete }) {
  const { text, completed } = todo;
  const [checked, setChecked] = useState(completed);

  const handleChange = () => {
    setChecked(!checked);
    onComplete(text);
  };

  const handleDelete = () => {
    onDelete(text);
  };

  return (
    <li className="TodoItem">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={handleDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
