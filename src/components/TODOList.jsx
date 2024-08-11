// TodoList.js
import React, { useState } from "react"; //state hooks are used to remember user inputs //useState is for dynamically adding and removing our input
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]); //maintains the list of items
  const [newTodo, setNewTodo] = useState(""); //takes in the current value

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent page resubmission/refresh
    setTodos([...todos, { text: newTodo, completed: false }]); //set the items of list ..newtodo has two properties: text(value set to newTodo) and completed
    setNewTodo(""); //resets to empty string
  };

  const handleToggle = (index) => {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleRemove = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div>
        <h3>Let's make the day productive!</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          className="new-todo-input"
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onToggle={() => handleToggle(index)}
            onRemove={() => handleRemove(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
