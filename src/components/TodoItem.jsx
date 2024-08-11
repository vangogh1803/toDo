// TodoItem.js
import React from "react";

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
        className="todo-checkbox"
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        className="todo-text"
      >
        {todo.text}
      </span>
      <button onClick={onRemove} className="remove-btn">
        Remove
      </button>
    </li>
  );
}

export default TodoItem;
