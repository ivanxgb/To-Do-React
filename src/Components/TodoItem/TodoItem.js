import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const { text, completed } = props.todo;

  const onComplete = () => {
    props.onComplete(text);
  };

  const onDelete = () => {
    props.onDelete(text);
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        C
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
